import { actions } from "astro:actions";
import {
  useEffect,
  useState,
  type Dispatch,
  type StateUpdater,
} from "preact/hooks";
import { toast } from "sonner";

export const fetchAverage = async (
  studentId: number,
  subjectId: number,
  setAverage: Dispatch<StateUpdater<number>>,
) => {
  const { data, error } = await actions.student.getAverage({
    studentId,
    subjectId,
  });

  if (error) {
    toast.error(error.message);
    return;
  }

  setAverage(data.average);
};

const useFetchAverage = (
  studentId: number,
  subjectId: number,
): [number, Dispatch<StateUpdater<number>>] => {
  const [average, setAverage] = useState<number>(10);

  useEffect(() => {
    fetchAverage(studentId, subjectId, setAverage);
  }, []);

  return [average, setAverage];
};

export default useFetchAverage;
