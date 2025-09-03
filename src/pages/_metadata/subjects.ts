export type SubjectKind =
  | "math"
  | "ethics"
  | "religion"
  | "tech"
  | "art"
  | "physics"
  | "chemistry"
  | "philosophy"
  | "politics"
  | "social"
  | "spanish"
  | "english"
  | "sexual"
  | "project";

export const subjects: Record<SubjectKind, string> = {
  math: "Matemáticas",
  ethics: "Ética",
  religion: "Religión",
  tech: "Informática",
  art: "Arte",
  physics: "Física",
  chemistry: "Química",
  philosophy: "Filosofía",
  politics: "Ciencias Políticas",
  social: "Ciencias Sociales",
  spanish: "Español",
  english: "Inglés",
  sexual: "Educación Sexual",
  project: "Proyecto",
};

export type ValidateParamsArgs = {
  course: number | undefined;
  period: number | undefined;
  subject: string | undefined;
};

type NonUndefined<Obj extends object> = {
  [K in keyof Obj]: NonNullable<Obj[K]>;
};

type ValidateParams = (
  params: ValidateParamsArgs,
) => NonUndefined<ValidateParamsArgs>;

export const validateParams: ValidateParams = ({ course, period, subject }) => {
  if (!course) {
    throw new Error("El curso al que entraste es invalido.");
  }

  if (!period) {
    throw new Error("El periodo al que entraste es invalido");
  }

  if (!subject) {
    throw new Error("La materia a la que entraste es invalida.");
  }

  return {
    course: +course,
    period: +period,
    subject,
  };
};
