import type Note from "@/entities/note";
import { ActionError, defineAction } from "astro:actions";
import { getSecret } from "astro:env/server";
import { z } from "astro:schema";

const API_URL = getSecret("PUBLIC_API_URL");

export const createAndGet = defineAction({
  input: z.object({
    studentId: z.number(),
    gradeId: z.number(),
  }),

  async handler({ studentId, gradeId }) {
    const res = await fetch(`${API_URL}/api/note`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        student_id: studentId,
        grade_id: gradeId,
      }),
    });

    if (!res.ok) {
      throw new ActionError({
        code: "BAD_REQUEST",
        message: "No se ha podido crear la nota",
      });
    }

    const note = (await res.json()) as Note;
    return note;
  },
});
