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
  | "project"
  | "biology"
  | "geometry"
  | "taekwondo"
  | "reading"
  | "militar"
  | "trigonometric"
  | "peace";

export const subjects: Record<SubjectKind, string> = {
  math: "Matemáticas",
  geometry: "Geometría",
  trigonometric: "Trigonometría",
  physics: "Física",
  chemistry: "Química",
  biology: "Biología",
  philosophy: "Filosofía",
  politics: "Ciencias Políticas",
  social: "Ciencias Sociales",
  spanish: "Español",
  english: "Inglés",
  ethics: "Ética",
  religion: "Religión",
  tech: "Informática",
  art: "Arte",
  sexual: "Educación Sexual",
  project: "Proyecto",
  taekwondo: "Taekwondo",
  reading: "Lectura Crítica",
  militar: "Formación Militar",
  peace: "Cátedra de Paz",
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

  const invalidSubject = Object.keys(subjects).findIndex((s) => s === subject);
  const INVALID_INDEX = -1;

  if (invalidSubject === INVALID_INDEX) {
    throw new Error("La materia es invalida.");
  }

  return {
    course: +course,
    period: +period,
    subject,
  };
};
