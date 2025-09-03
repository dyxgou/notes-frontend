import { ActionError, defineAction } from "astro:actions";
import { z } from "astro:content";
import { getSecret } from "astro:env/server";

const API_URL = getSecret("PUBLIC_API_URL");

export const createOrGet = defineAction({
  input: z.object({
    name: z.string().max(15),
    course: z.number().gte(0).lte(11),
    period: z.number().gte(1).lte(4),
  }),

  async handler(input) {
    const res = await fetch(`${API_URL}/api/subject/get`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(input),
    });

    if (!res.ok) {
      throw new ActionError({
        code: "BAD_REQUEST",
        message: "La materia no ha sido creada o obtenida.",
      });
    }

    const subjectId = (await res.json()) as { id: number };

    return subjectId;
  },
});
