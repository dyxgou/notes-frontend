import type Student from "@/entities/student";
import { ActionError, defineAction } from "astro:actions";
import { z } from "astro:content";
import { getSecret } from "astro:env/server";

const API_URL = getSecret("PUBLIC_API_URL");

export const getByCourse = defineAction({
  input: z.object({
    course: z.number().gte(0).lte(11),
  }),

  handler: async ({ course }) => {
    const res = await fetch(`${API_URL}/api/student/course/${course}`);

    if (!res.ok) {
      throw new ActionError({
        code: "NOT_FOUND",
        message: "Los estudiantes no han sido enontrados",
      });
    }

    const students = (await res.json()) as Student[];

    return students;
  },
});
