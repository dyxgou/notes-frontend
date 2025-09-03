import { atom } from "nanostores";

type SubjectInfo = {
  id: number;
  course: number;
  period: number;
};

const INVALID_ID = 0;
const NO_SUBJECT: SubjectInfo = {
  id: INVALID_ID,
  course: -1,
  period: 0,
};

export const $subject = atom<SubjectInfo>(NO_SUBJECT);

export function isValidSubject() {
  return $subject.get().id != INVALID_ID;
}

export function setSubject(newSubject: SubjectInfo) {
  $subject.set(newSubject);
}

export function getSubjectPeriod() {
  return $subject.get().period;
}

export function getSubjectCourse() {
  return $subject.get().course;
}

export function getSubjectId() {
  return $subject.get().id;
}
