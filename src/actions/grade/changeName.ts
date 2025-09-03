import { ActionError, defineAction } from "astro:actions";
import { getSecret } from "astro:env/server";
import { z } from "astro:schema";

const API_URL = getSecret("PUBLIC_API_URL");

export const changeName = defineAction({
  input: z.object({
    id: z.number(),
    name: z.string().min(3).max(15),
  }),

  async handler({ id, name }) {
    const res = await fetch(`${API_URL}/api/grade/name`, {
      method: "PATCH",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        id,
        name,
      }),
    });

    if (!res.ok) {
      throw new ActionError({
        code: "BAD_REQUEST",
        message: "No se ha podido cambiar el nombre de la nota.",
      });
    }
  },
});
