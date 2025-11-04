import useDebounce from "@/hooks/useDebounce";
import { actions } from "astro:actions";
import { useEffect } from "preact/hooks";
import { toast } from "sonner";
import { type NoteChangesSignal } from "@/components/Table/Students/StudentBody";

type UpdateNoteParams = {
  id: number;
  initialValue: number;
  value: number;
  studentId: number;
  noteChangesSignal: NoteChangesSignal;
};

const useUpdateNote = ({
  id,
  initialValue,
  value,
  studentId,
  noteChangesSignal,
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
      noteChangesSignal.value = { studentId, noteId: id };
    }
  }, [newValue]);
};

export default useUpdateNote;
