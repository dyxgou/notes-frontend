import type Grade from "@/entities/grade";
import useDebounce from "@/hooks/useDebounce";
import { actions } from "astro:actions";
import type { FunctionalComponent } from "preact";
import { useEffect, useState } from "preact/hooks";
import { toast } from "sonner";
import Delete from "./Delete";

const MIN_NAME_LENGTH = 3;

const GradeName: FunctionalComponent<Grade> = ({
  id,
  name,
  subjectId,
  is_final_exam: isFinalExam,
}) => {
  console.log({ id, subjectId });
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
      className={`group py-4 text-gray-500 uppercase tracking-wider min-w-[120px] border-r border-gray-300 ${isFinalExam && "final-grade"}`}
    >
      <div className="flex justify-around px-5 items-center">
        <input
          type="text"
          onInput={(e) => setGradeName(e.currentTarget.value)}
          className="w-full bg-transparent font-medium border-none outline-none font-sm text-gray-500 uppercase tracking-wider text-xs"
          autocomplete="off"
          value={gradeName}
          minlength={3}
          maxlength={15}
        />

        <Delete
          gradeId={id}
          subjectId={subjectId}
          className="transition-transform scale-0 group-hover:scale-100"
        />
      </div>
    </th>
  );
};

export default GradeName;
