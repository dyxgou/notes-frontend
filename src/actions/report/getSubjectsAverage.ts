import { ActionError, defineAction } from "astro:actions";
import { z } from "astro:content";
import { getSecret } from "astro:env/server";

const API_URL = getSecret("PUBLIC_API_URL");

export const getSubjectsAverage = defineAction({
  input: z.object({
    studentId: z.number(),
    names: z.array(z.string()).nonempty(),
    course: z.number().gte(0).lte(11),
  }),

  async handler({ studentId, names, course }) {
    const params = new URLSearchParams();
    names.forEach((name) => {
      params.append("names", name);
    });

    params.append("student_id", studentId.toString());
    params.append("course", course.toString());

    const res = await fetch(`${API_URL}/api/report/avg/?${params}`);

    if (!res.ok) {
      throw new ActionError({
        code: "BAD_REQUEST",
        message: "Ha ocurrido un error al obtener el promedio de esta materia.",
      });
    }

    const average = (await res.json()) as { average: number };

    return average;
  },
});
