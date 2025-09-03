import { courses } from "./courses";

export const periods = [
  "Primer Período",
  "Segundo Período",
  "Tercer Período",
  "Cuarto Período",
] as const;

export const getCoursesAndPeriodProps = () =>
  courses.flatMap((courseName, course) =>
    periods.map((periodName, period) => ({
      params: { course, period },
      props: { courseName, periodName },
    })),
  );
