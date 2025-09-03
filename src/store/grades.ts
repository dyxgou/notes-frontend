import type Grade from "@/entities/grade";
import { atom, task } from "nanostores";
import { $subject, getSubjectId, isValidSubject } from "./subject";
import { actions } from "astro:actions";
import { toast } from "sonner";

export const $grades = atom<Grade[]>([]);

$subject.listen(() => {
  const subjectId = getSubjectId();

  if (!isValidSubject()) {
    console.error("Es invalida la materia");
    return;
  }

  task(async () => {
    const { data, error } = await actions.grade.getAllGrades({
      subjectId,
    });

    if (error) {
      toast.error("No se han encontrado las notas de esta materia.");
      return;
    }

    setAllGrades(data);
  });
});

export function gradesLength() {
  return $grades.value.length;
}

function setAllGrades(newGrades: Grade[]) {
  $grades.set(newGrades);
}

export function addGrade(newGrade: Grade) {
  $grades.set([...$grades.get(), newGrade]);
}
