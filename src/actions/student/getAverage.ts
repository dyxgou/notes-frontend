import type Note from "@/entities/note";
import { ActionError, defineAction } from "astro:actions";
import { getSecret } from "astro:env/server";
import { z } from "astro:schema";

const API_URL = getSecret("PUBLIC_API_URL");

export const getAverage = defineAction({
  input: z.object({
    studentId: z.number(),
    subjectId: z.number(),
  }),

  async handler({ studentId, subjectId }) {
    const params = new URLSearchParams();
    params.append("student_id", studentId.toString());
    params.append("subject_id", subjectId.toString());

    const res = await fetch(`${API_URL}/api/student/average/?${params}`);

    if (!res.ok) {
      throw new ActionError({
        code: "BAD_REQUEST",
        message: "No se ha podido calcular el promedio del estudiante.",
      });
    }

    const average = (await res.json()) as { average: number };
    return average;
  },
});
