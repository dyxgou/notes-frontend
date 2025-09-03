import type Grade from "@/entities/grades";
import useDebounce from "@/hooks/useDebounce";
import { actions } from "astro:actions";
import type { FunctionalComponent } from "preact";
import { useEffect, useState } from "preact/hooks";
import { toast } from "sonner";

const MIN_NAME_LENGTH = 3;

const GradeName: FunctionalComponent<Grade> = ({
  id,
  name,
  is_final_exam: isFinalExam,
}) => {
  const [gradeName, setGradeName] = useState<string>(name);
  const newName = useDebounce<string>(gradeName, 1000);

  useEffect(() => {
    if (newName.length < MIN_NAME_LENGTH) {
      toast.warning("La nota tiene que tener 3 caracteres mínimo.");
      return;
    }

    if (newName === name) {
      return;
    }

    actions.grade
      .changeName({ id, name: newName })
      .then(({ error }) => error && toast.error(error.message));
  }, [newName]);

  return (
    <th
      key={id}
      className={`py-4 text-center text-xs font-medium text-gray-500 uppercase tracking-wider min-w-[120px] border-r border-gray-300 ${isFinalExam && "final-grade"}`}
    >
      <input
        type="text"
        onInput={(e) => setGradeName(e.currentTarget.value)}
        className="bg-transparent border-none outline-none text-center font-sm text-gray-500 uppercase tracking-wider text-xs w-full"
        autocomplete="off"
        value={gradeName}
        minlength={3}
        maxlength={15}
      />
    </th>
  );
};

export default GradeName;
