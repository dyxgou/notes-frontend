import { $grades } from "@/store/grades";
import { useStore } from "@nanostores/preact";
import { Fragment, type FunctionalComponent } from "preact";
import NoteValue from "./NoteValue";
import { type StudentSignal } from "@/components/Table/Students/StudentBody";

type NotesProps = {
  studentId: number;
  studentSignal: StudentSignal;
};

const Notes: FunctionalComponent<NotesProps> = ({
  studentId,
  studentSignal,
}) => {
  const grades = useStore($grades);

  return (
    <Fragment>
      {grades.map(({ id }) => (
        <NoteValue
          studentSignal={studentSignal}
          gradeId={id}
          studentId={studentId}
        />
      ))}
    </Fragment>
  );
};

export default Notes;
