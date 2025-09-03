import { subjects, type SubjectKind } from "./subjects";
import { courses } from "./courses.ts";
import { periods } from "./periods";

type HeaderInfo = {
  course: keyof typeof courses;
  period: number;
  subject: SubjectKind;
};

export const getHeaderInfo = (params: HeaderInfo) => {
  const course = courses[params.course];
  const period = periods[params.period - 1];
  const subject = subjects[params.subject];

  return { course, period, subject };
};
