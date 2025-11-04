import { ActionError, defineAction } from "astro:actions";
import { z } from "astro:content";
import { getSecret } from "astro:env/server";

const API_URL = getSecret("PUBLIC_API_URL");
type SubjectReport = [number, number, number, number];

export const getSubjectReport = defineAction({
  input: z.object({
    studentId: z.number(),
    name: z.string().max(15),
    course: z.number().gte(0).lte(11),
  }),

  async handler({ studentId, name, course }) {
    const params = new URLSearchParams();
    params.append("student_id", studentId.toString());
    params.append("name", name);
    params.append("course", course.toString());

    const res = await fetch(`${API_URL}/api/report/get/?${params}`);

    if (!res.ok) {
      if (res.status === 404) {
        throw new ActionError({
          code: "NOT_FOUND",
          message: "Este estudiante no existe.",
        });
      }

      throw new ActionError({
        code: "BAD_REQUEST",
        message: "Ha ocurrido un error al obtener el reporte de la materia.",
      });
    }

    const subjectReport = (await res.json()) as SubjectReport;

    return subjectReport;
  },
});
