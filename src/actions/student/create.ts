import type Student from "@/entities/student";
import { ActionError, defineAction } from "astro:actions";
import { getSecret } from "astro:env/server";
import { z } from "astro:schema";

const API_URL = getSecret("PUBLIC_API_URL");

export const create = defineAction({
  accept: "form",
  input: z.object({
    name: z.string().min(4).max(40),
    parent_phone: z.string().length(10),
    course: z.number().gte(0).lte(11),
  }),

  async handler({ name, course, parent_phone }) {
    const res = await fetch(`${API_URL}/api/student`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        name,
        course,
        parent_phone,
      }),
    });

    if (!res.ok) {
      throw new ActionError({
        code: "BAD_REQUEST",
        message:
          "El usuario no ha podido ser creado correctamente. Porfavor intentalo de nuevo mas tarde.",
      });
    }

    const student = (await res.json()) as Student;

    return student;
  },
});
