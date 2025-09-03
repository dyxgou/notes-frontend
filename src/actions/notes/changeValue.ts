import { ActionError, defineAction } from "astro:actions";
import { z } from "astro:content";
import { getSecret } from "astro:env/server";

const API_URL = getSecret("PUBLIC_API_URL");

export const changeValue = defineAction({
  input: z.object({
    id: z.number(),
    value: z.number().gte(10).lte(50),
  }),

  async handler({ id, value }) {
    const res = await fetch(`${API_URL}/api/note`, {
      method: "PATCH",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ id, value }),
    });

    if (!res.ok) {
      throw new ActionError({
        code: "BAD_REQUEST",
        message: "No se ha podido actualizar el valor de la nota",
      });
    }
  },
});
