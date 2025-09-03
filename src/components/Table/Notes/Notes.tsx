import { $grades } from "@/store/grades";
import { useStore } from "@nanostores/preact";
import { Fragment, type FunctionalComponent } from "preact";
import NoteValue from "./NoteValue";
import type { Signal } from "@preact/signals";

type NotesProps = {
  studentId: number;
  studentIdSignal: Signal<number>;
};

const Notes: FunctionalComponent<NotesProps> = ({
  studentId,
  studentIdSignal,
}) => {
  const grades = useStore($grades);

  return (
    <Fragment>
      {grades.map(({ id }) => (
        <NoteValue
          studentIdSignal={studentIdSignal}
          gradeId={id}
          studentId={studentId}
        />
      ))}
    </Fragment>
  );
};

export default Notes;
