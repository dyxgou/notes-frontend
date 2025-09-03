import useDebounce from "@/hooks/useDebounce";
import type { Signal } from "@preact/signals";
import { actions } from "astro:actions";
import { useEffect } from "preact/hooks";
import { toast } from "sonner";

type UpdateNoteParams = {
  id: number;
  initialValue: number;
  value: number;
  studentId: number;
  studentIdSignal: Signal<number>;
};

const useUpdateNote = ({
  id,
  initialValue,
  value,
  studentId,
  studentIdSignal,
}: UpdateNoteParams) => {
  if (id === 0) {
    return;
  }

  const newValue = useDebounce(value, 500);

  useEffect(() => {
    if (isNaN(newValue)) {
      toast.warning("El valor de la nota es invalido.");
      return;
    }
    if (newValue > 50) {
      toast.warning("El máximo valor de una nota es 50.");
      return;
    }
    if (newValue < 10) {
      toast.warning("El mínimo valor de una nota es 10.");
      return;
    }

    const changeValue = async () => {
      const { error } = await actions.notes.changeValue({ id, value });

      if (error) {
        toast.error(error.name);
      }
    };

    if (initialValue !== newValue) {
      changeValue();
      studentIdSignal.value = studentId;
    }
  }, [newValue]);
};

export default useUpdateNote;
