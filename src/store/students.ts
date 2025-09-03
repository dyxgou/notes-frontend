import type Student from "@/entities/student";
import { actions } from "astro:actions";
import { atom, task } from "nanostores";
import { $subject, getSubjectCourse, isValidSubject } from "./subject";
import { toast } from "sonner";

export const $students = atom<Student[]>([]);

$subject.listen(() => {
  const course = getSubjectCourse();

  if (!isValidSubject() || !isStudentsEmpty()) {
    return;
  }

  task(async () => {
    const { data, error } = await actions.student.getByCourse({ course });

    if (error) {
      toast.error(`No se han encontrado los estudiantes del grado ${course}`);
      return;
    }

    setStudents(data);
  });
});

export function isStudentsEmpty() {
  return $students.value.length === 0;
}

function setStudents(newStudents: Student[]) {
  $students.set(newStudents);
}

export function addStudent(newStudent: Student) {
  $students.set([...$students.get(), newStudent]);
}

export function getStudents() {
  return $students.get();
}

export function updateStudentName(index: number, newName: string) {
  $students.value[index].name = newName;
  $students.notify();
}
