import type Grade from "@/entities/grade";
import { ActionError, defineAction } from "astro:actions";
import { getSecret } from "astro:env/server";
import { z } from "astro:schema";

const API_URL = getSecret("PUBLIC_API_URL");

export const getAllGrades = defineAction({
  input: z.object({
    subjectId: z.number(),
  }),

  async handler({ subjectId }) {
    const params = new URLSearchParams();
    params.append("subject_id", subjectId.toString());

    const res = await fetch(`${API_URL}/api/grade/?${params}`);

    if (!res.ok) {
      throw new ActionError({
        code: "NOT_FOUND",
        message: "Las notas de esta materia no han sido encontradas",
      });
    }

    const grades = (await res.json()) as Grade[];

    return grades;
  },
});
