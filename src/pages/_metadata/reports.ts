import type { SubjectKind } from "./subjects";

type Report = {
  sectionName: string;
  subjects: SubjectKind[];
};

type ReportKind = "primary" | "basic" | "pre-militar" | "militar";

export const getReportByCourse = (course: number): Report[] => {
  if (course >= 0 && course <= 5) {
    return subjectReports["primary"];
  } else if (course >= 6 && course <= 8) {
    return subjectReports["basic"];
  } else if (course == 9) {
    return subjectReports["pre-militar"];
  } else if (course >= 10 && course <= 11) {
    return subjectReports["militar"];
  }

  throw new Error("El curso es invalido.");
};

export const subjectReports: Record<ReportKind, Report[]> = {
  primary: [
    {
      sectionName: "Matemáticas",
      subjects: ["math"],
    },
    {
      sectionName: "Humanidades",
      subjects: ["spanish", "english"],
    },
    {
      sectionName: "Ciencias Sociales",
      subjects: ["social"],
    },
    {
      sectionName: "Ciencias Naturales",
      subjects: ["biology"],
    },
    {
      sectionName: "Artes",
      subjects: ["art"],
    },
    {
      sectionName: "Ética",
      subjects: ["ethics"],
    },
    {
      sectionName: "Taekwondo",
      subjects: ["taekwondo"],
    },
    {
      sectionName: "Religión",
      subjects: ["religion"],
    },
    {
      sectionName: "Tecnología",
      subjects: ["tech"],
    },
    {
      sectionName: "Cátedra de Paz",
      subjects: ["peace"],
    },
  ],
  basic: [
    {
      sectionName: "Matemáticas",
      subjects: ["math", "geometry"],
    },
    {
      sectionName: "Humanidades",
      subjects: ["spanish", "english"],
    },
    {
      sectionName: "Ciencias Sociales",
      subjects: ["social"],
    },
    {
      sectionName: "Ciencias Naturales",
      subjects: ["biology"],
    },
    {
      sectionName: "Optativas",
      subjects: ["reading", "sexual", "project"],
    },
    {
      sectionName: "Artes",
      subjects: ["art"],
    },
    {
      sectionName: "Ética",
      subjects: ["ethics"],
    },
    {
      sectionName: "Taekwondo",
      subjects: ["taekwondo"],
    },
    {
      sectionName: "Religión",
      subjects: ["religion"],
    },
    {
      sectionName: "Tecnología",
      subjects: ["tech"],
    },
    {
      sectionName: "Orientación Militar",
      subjects: ["militar"],
    },
  ],
  "pre-militar": [
    {
      sectionName: "Matemáticas",
      subjects: ["math"],
    },
    {
      sectionName: "Humanidades",
      subjects: ["spanish", "english"],
    },
    {
      sectionName: "Ciencias Naturales",
      subjects: ["biology", "physics"],
    },
    {
      sectionName: "Ciencias Sociales",
      subjects: ["social"],
    },
    {
      sectionName: "Artes",
      subjects: ["art"],
    },
    {
      sectionName: "Ética",
      subjects: ["ethics"],
    },
    {
      sectionName: "Taekwondo",
      subjects: ["taekwondo"],
    },
    {
      sectionName: "Religión",
      subjects: ["religion"],
    },
    {
      sectionName: "Tecnología",
      subjects: ["tech"],
    },
    {
      sectionName: "Optativas",
      subjects: ["sexual", "project"],
    },
  ],
  militar: [
    {
      sectionName: "Ciencias Naturales",
      subjects: ["physics", "chemistry"],
    },
    {
      sectionName: "Humanidades",
      subjects: ["spanish", "english"],
    },
    {
      sectionName: "Ciencias Sociales",
      subjects: ["philosophy", "politics", "social"],
    },
    {
      sectionName: "Artes",
      subjects: ["art"],
    },
    {
      sectionName: "Ética",
      subjects: ["ethics"],
    },
    {
      sectionName: "Taekwondo",
      subjects: ["taekwondo"],
    },
    {
      sectionName: "Religión",
      subjects: ["religion"],
    },
    {
      sectionName: "Matemáticas",
      subjects: ["math"],
    },
    {
      sectionName: "Tecnología",
      subjects: ["tech"],
    },
    {
      sectionName: "Optativas",
      subjects: ["sexual", "project"],
    },
  ],
};
