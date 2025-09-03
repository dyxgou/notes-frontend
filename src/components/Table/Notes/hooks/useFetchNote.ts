import { actions } from "astro:actions";
import { useEffect, useState } from "preact/hooks";
import { toast } from "sonner";

const useFetchNote = (studentId: number, gradeId: number) => {
  const [id, setId] = useState<number>(0);
  const [initialValue, setInitialValue] = useState<number>(10);
  const [value, setValue] = useState<number>(10);

  const fetchNote = async () => {
    const { data, error } = await actions.notes.createAndGet({
      studentId,
      gradeId,
    });

    if (error) {
      toast.error(error.message);
      return;
    }

    setInitialValue(data.value);
    setValue(data.value);
    setId(data.id);
  };

  useEffect(() => {
    fetchNote();
  }, []);

  return { id, initialValue, value, setValue };
};

export default useFetchNote;
