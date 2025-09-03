import { ActionError, defineAction } from "astro:actions";
import { getSecret } from "astro:env/server";
import { z } from "astro:schema";

const API_URL = getSecret("PUBLIC_API_URL");

export const changeParentPhone = defineAction({
  input: z.object({
    id: z.number(),
    parent_phone: z.string().length(10),
  }),

  async handler({ id, parent_phone }) {
    const res = await fetch(`${API_URL}/api/student/change/phone`, {
      method: "PATCH",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        id,
        parent_phone,
      }),
    });

    if (!res.ok) {
      throw new ActionError({
        code: "BAD_REQUEST",
        message: "No se ha podido cambiar el numeró telefónico del estudiante.",
      });
    }
  },
});
