import type { FunctionalComponent } from "preact";
import useColor, { BACKGROUND_HEX_OPACITY } from "./hooks/useColor";
import useUpdateNote from "./hooks/useUpdateNote";
import useFetchNote from "./hooks/useFetchNote";
import type { TargetedEvent } from "preact/compat";
import { type StudentSignal } from "@/components/Table/Students/StudentBody";

type NoteValueProps = {
  studentId: number;
  gradeId: number;
  studentSignal: StudentSignal;
};

const NoteValue: FunctionalComponent<NoteValueProps> = ({
  studentId,
  gradeId,
  studentSignal,
}) => {
  const { value, setValue, id, initialValue } = useFetchNote(
    studentId,
    gradeId,
  );

  const color = useColor(value);

  useUpdateNote({ id, initialValue, value, studentId, studentSignal });

  const handleNoteChange = (e: TargetedEvent<HTMLInputElement>) => {
    e.preventDefault();

    const value = parseInt(e.currentTarget.value);
    if (isNaN(value)) {
      return;
    }

    setValue(value);
  };

  return (
    <td key={id} className="p-4 text-center border-r-1 border-r-gray-300">
      <input
        type="number"
        value={value}
        onInput={handleNoteChange}
        minlength={2}
        style={{
          borderColor: color,
          backgroundColor: color + BACKGROUND_HEX_OPACITY,
        }}
        inputmode="numeric"
        maxlength={2}
        required
        className="w-16 px-2 py-1 text-sm text-center border-2 rounded focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"
      />
    </td>
  );
};

export default NoteValue;
