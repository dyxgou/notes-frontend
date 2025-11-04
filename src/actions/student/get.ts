import type Student from "@/entities/student";
import { ActionError, defineAction } from "astro:actions";
import { getSecret } from "astro:env/server";
import { z } from "astro:schema";

const API_URL = getSecret("PUBLIC_API_URL");

export const get = defineAction({
  input: z.object({
    id: z.number(),
  }),

  async handler({ id }) {
    const res = await fetch(`${API_URL}/api/student/id/${id}`);

    if (!res.ok) {
      throw new ActionError({
        code: "NOT_FOUND",
        message: "El estudiante no ha sido encontrado.",
      });
    }

    const student = (await res.json()) as Student;

    return student;
  },
});
