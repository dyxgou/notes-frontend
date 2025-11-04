import { $grades } from "@/store/grades";
import { useStore } from "@nanostores/preact";
import { Fragment, type FunctionalComponent } from "preact";
import NoteValue from "./NoteValue";
import { type NoteChangesSignal } from "@/components/Table/Students/StudentBody";

type NotesProps = {
  studentId: number;
  noteChangesSignal: NoteChangesSignal;
};

const Notes: FunctionalComponent<NotesProps> = ({
  studentId,
  noteChangesSignal,
}) => {
  const grades = useStore($grades);

  return (
    <Fragment>
      {grades.map(({ id }) => (
        <NoteValue
          noteChangesSignal={noteChangesSignal}
          gradeId={id}
          studentId={studentId}
        />
      ))}
    </Fragment>
  );
};

export default Notes;
