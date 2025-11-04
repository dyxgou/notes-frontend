import { ActionError, defineAction } from "astro:actions";
import { getSecret } from "astro:env/server";
import { z } from "astro:schema";

const API_URL = getSecret("PUBLIC_API_URL");

export const deleteGrade = defineAction({
  input: z.object({
    gradeId: z.number(),
    subjectId: z.number(),
  }),

  async handler({ gradeId, subjectId }) {
    const params = new URLSearchParams();
    params.append("grade_id", gradeId.toString());
    params.append("subject_id", subjectId.toString());

    const res = await fetch(`${API_URL}/api/grade/?${params}`, {
      method: "DELETE",
    });

    if (!res.ok) {
      throw new ActionError({
        code: "BAD_REQUEST",
        message: "La nota no ha sido eliminada.",
      });
    }
  },
});
