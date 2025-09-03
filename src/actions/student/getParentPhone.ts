import { ActionError, defineAction } from "astro:actions";
import { getSecret } from "astro:env/server";
import { z } from "astro:schema";

const API_URL = getSecret("PUBLIC_API_URL");

export const getParentPhone = defineAction({
  input: z.object({
    id: z.number(),
  }),
  async handler({ id }) {
    const res = await fetch(`${API_URL}/api/student/parent/${id}`);
    if (!res.ok) {
      throw new ActionError({
        code: "NOT_FOUND",
        message: "El número de teléfono del estudiante no ha sido encontrado.",
      });
    }

    const parentPhone = (await res.json()) as { parent_phone: string };
    return parentPhone;
  },
});
