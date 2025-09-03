import type { FunctionalComponent } from "preact";
import useColor, { BACKGROUND_HEX_OPACITY } from "./hooks/useColor";
import useFetchAverage, { fetchAverage } from "./hooks/useFetchAverage";
import { useEffect } from "preact/hooks";
import type { Signal } from "@preact/signals";

type AverageProps = {
  studentId: number;
  subjectId: number;
  studentIdSignal: Signal<number>;
};

const Average: FunctionalComponent<AverageProps> = ({
  studentId,
  subjectId,
  studentIdSignal,
}) => {
  const [average, setAverage] = useFetchAverage(studentId, subjectId);
  const color = useColor(average);

  useEffect(() => {
    const unsubscribe = studentIdSignal.subscribe((id) => {
      if (id === studentId) {
        fetchAverage(studentId, subjectId, setAverage);
      }
    });

    return unsubscribe;
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
