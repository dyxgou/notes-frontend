import type { FunctionalComponent } from "preact";
import useColor, { BACKGROUND_HEX_OPACITY } from "./hooks/useColor";
import useFetchAverage, { fetchAverage } from "./hooks/useFetchAverage";
import { useEffect } from "preact/hooks";
import { type NoteChangesSignal } from "../Students/StudentBody";

type AverageProps = {
  studentId: number;
  subjectId: number;
  noteChangesSignal: NoteChangesSignal;
};

const Average: FunctionalComponent<AverageProps> = ({
  studentId,
  subjectId,
  noteChangesSignal,
}) => {
  const [average, setAverage] = useFetchAverage(studentId, subjectId);
  const color = useColor(average);

  useEffect(() => {
    const unsubscribeNoteChanges = noteChangesSignal.subscribe((noteChange) => {
      if (noteChange.studentId === studentId) {
        fetchAverage(studentId, subjectId, setAverage);
      }
    });

    // const unsubscribeGrades = $grades.subscribe(() => {
    //   console.log("Cambio");
    //   fetchAverage(studentId, subjectId, setAverage);
    // });

    return () => {
      unsubscribeNoteChanges();
      // unsubscribeGrades();
    };
  }, []);

  return (
    <td className="p-4 text-center">
      <span
        style={{
          borderColor: color,
          backgroundColor: color + BACKGROUND_HEX_OPACITY,
        }}
        className="w-16 px-4 py-1 text-sm text-center border-2 rounded focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"
      >
        {average}
      </span>
    </td>
  );
};

export default Average;
