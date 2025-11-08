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
  } else if (course === 9) {
    return subjectReports["pre-militar"];
  } else if (course >= 10 && course <= 11) {
    return subjectReports["militar"];
  }

  throw new Error("El curso es invalido.");
};

export const subjectReports: Record<ReportKind, Report[]> = {
  primary: [
    {
      sectionName: "Ciencias Naturales",
      subjects: ["biology"],
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
      sectionName: "Humanidades",
      subjects: ["spanish", "english"],
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
      sectionName: "Cátedra de Paz",
      subjects: ["peace"],
    },
  ],
  basic: [
    {
      sectionName: "Ciencias Naturales",
      subjects: ["biology"],
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
      sectionName: "Humanidades",
      subjects: ["spanish", "english"],
    },
    {
      sectionName: "Matemáticas",
      subjects: ["math", "geometry"],
    },
    {
      sectionName: "Tecnología",
      subjects: ["tech"],
    },
    {
      sectionName: "Optativas",
      subjects: ["reading", "sexual", "project"],
    },
    {
      sectionName: "Orientación Militar",
      subjects: ["militar"],
    },
  ],
  "pre-militar": [
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
      sectionName: "Humanidades",
      subjects: ["spanish", "english"],
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
  militar: [
    {
      sectionName: "Ciencias Naturales",
      subjects: ["physics", "chemistry"],
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
      sectionName: "Humanidades",
      subjects: ["spanish", "english"],
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
