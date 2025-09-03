import type Grade from "@/entities/grades";
import { ActionError, defineAction } from "astro:actions";
import { getSecret } from "astro:env/server";
import { z } from "astro:schema";

const CONFLICT_STATUS = 409;
const API_URL = getSecret("PUBLIC_API_URL");

export const create = defineAction({
  accept: "form",
  input: z.object({
    id: z.number(),
    name: z.string().min(4).max(15),
    isFinalExam: z.boolean(),
  }),

  handler: async ({ name, id, isFinalExam }) => {
    const res = await fetch(`${API_URL}/api/grade`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        name,
        subject_id: id,
        is_final_exam: isFinalExam,
      }),
    });

    if (!res.ok) {
      if (res.status === CONFLICT_STATUS) {
        const text = await res.text();
        const isFinalExamError = text.includes("final exam"); // This is shit

        if (isFinalExamError) {
          throw new ActionError({
            code: "CONFLICT",
            message: "Ya existe un examen final en ésta materia.",
          });
        }

        throw new ActionError({
          code: "CONFLICT",
          message:
            "La cantidad máxima de notas que puede haber en una materia es 10.",
        });
      }

      throw new ActionError({
        code: "BAD_REQUEST",
        message: "La nota no ha sido creada.",
      });
    }

    const gradeId = (await res.json()) as { id: number };

    const grade: Grade = {
      name,
      id: gradeId.id,
      subjectId: id,
      is_final_exam: isFinalExam,
    };

    return grade;
  },
});
