import { $students } from "@/store/students";
import { useStore } from "@nanostores/preact";
import { type FunctionComponent } from "preact";
import Student from "./Student";
import Notes from "@/components/Table/Notes/Notes";
import Average from "@/components/Table/Notes/Average";
import { Signal, useSignal } from "@preact/signals";

type StudentBodyProps = {
  subjectId: number;
};

export type StudentSignal = Signal<{
  studentId: number;
  noteId: number;
}>;

const StudentBody: FunctionComponent<StudentBodyProps> = ({ subjectId }) => {
  const studentSignal: StudentSignal = useSignal({ studentId: 0, noteId: 0 });
  const students = useStore($students);

  return (
    <tbody className="bg-white divide-y divide-gray-300">
      {students.map(({ id, name, parent_phone }, index) => (
        <tr className="hover:bg-gray-100 transition-colors duration-150">
          <Student id={id} name={name} index={index} phone={parent_phone} />

          <Notes studentSignal={studentSignal} studentId={id} />

          <Average
            studentSignal={studentSignal}
            studentId={id}
            subjectId={subjectId}
          />
        </tr>
      ))}
    </tbody>
  );
};

export default StudentBody;
