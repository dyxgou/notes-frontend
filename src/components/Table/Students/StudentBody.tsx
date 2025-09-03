import { $students } from "@/store/students";
import { useStore } from "@nanostores/preact";
import { type FunctionComponent } from "preact";
import Student from "./Student";
import Notes from "@/components/Table/Notes/Notes";
import Average from "@/components/Table/Notes/Average";
import { useSignal } from "@preact/signals";

type StudentBodyProps = {
  subjectId: number;
};

const StudentBody: FunctionComponent<StudentBodyProps> = ({ subjectId }) => {
  const studentIdSignal = useSignal(0);
  const students = useStore($students);

  return (
    <tbody className="bg-white divide-y divide-gray-300">
      {students.map(({ id, name, parent_phone }, index) => (
        <tr className="hover:bg-gray-100 transition-colors duration-150">
          <Student id={id} name={name} index={index} phone={parent_phone} />

          <Notes studentIdSignal={studentIdSignal} studentId={id} />

          <Average
            studentIdSignal={studentIdSignal}
            studentId={id}
            subjectId={subjectId}
          />
        </tr>
      ))}
    </tbody>
  );
};

export default StudentBody;
