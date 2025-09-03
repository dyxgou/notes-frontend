import type { FunctionalComponent } from "preact";
import Popup from "./Popup";

export type StudentProps = {
  id: number;
  name: string;
  phone: string;
  index: number;
};

const Student: FunctionalComponent<StudentProps> = (student) => {
  return (
    <td
      key={student.id}
      className="sticky left-0 top-0 z-10 flex items-center gap-1 bg-white px-6 py-4 border-r border-gray-300 hover:bg-gray-50"
    >
      <span className="w-full">{student.name}</span>

      <Popup {...student} />
    </td>
  );
};

export default Student;
