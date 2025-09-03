import { type FunctionalComponent } from "preact";
import RememberFigure from "./RememberFigure";
import type { StudentProps } from "./Student";
import FormButtons from "./FormButtons";
import { useState } from "preact/hooks";
import useHasChanged from "@/hooks/useHasChanged";
import type { TargetedEvent } from "preact/compat";
import { actions } from "astro:actions";
import { toast } from "sonner";
import { updateStudentName } from "@/store/students";

const ChangeStudentInfo: FunctionalComponent<StudentProps> = ({
  id,
  name,
  phone,
  index,
}) => {
  const [newName, setNewName] = useState<string>(name);
  const [newPhone, setNewPhone] = useState<string>(phone);

  const hasChangedName = useHasChanged(name, newName);
  const hasChangedPhone = useHasChanged(phone, newPhone);

  const handleUpdateStundetInfo = async (e: TargetedEvent<HTMLFormElement>) => {
    e.preventDefault();

    if (hasChangedName) {
      const { error } = await actions.student.changeName({ id, name: newName });

      if (error) {
        toast.error(error.message);
        return;
      }

      updateStudentName(index, newName);
    }

    if (hasChangedPhone) {
      const { error } = await actions.student.changeParentPhone({
        id,
        parent_phone: newPhone,
      });

      if (error) {
        toast.error(error.message);
        return;
      }
    }

    toast.success(
      "La información del estudiante ha sido actualizada correctamente.",
    );
  };

  return (
    <form class="flex flex-col gap-3 p-6" onSubmit={handleUpdateStundetInfo}>
      <RememberFigure />

      <label for="name" className="block text-sm font-semibold text-gray-700">
        Nombre del Estudiante
      </label>
      <input
        type="text"
        name="name"
        placeholder={newName}
        value={newName}
        onInput={(e) => setNewName(e.currentTarget.value)}
        minlength={4}
        maxlength={30}
        required
        autocomplete="off"
        className="border-1 border-gray-400 w-full px-4 py-3 rounded-lg text-gray-900 placeholder-gray-500 invalid:border-red-500"
      />
      <p className="text-xs text-gray-500 mb-1">
        Mínimo 4 caracteres, máximo 30.
      </p>

      <label
        for="parent_phone"
        className="block text-sm font-semibold text-gray-700"
      >
        Teléfono del Acudiente
      </label>
      <input
        type="tel"
        name="parent_phone"
        placeholder={newPhone}
        onInput={(e) => setNewPhone(e.currentTarget.value)}
        value={newPhone}
        minlength={10}
        maxlength={10}
        required
        autocomplete="off"
        className="border-1 border-gray-400 w-full px-4 py-3 rounded-lg text-gray-900 placeholder-gray-500 invalid:border-red-500"
      />

      <p className="text-xs text-gray-500 mb-1">
        10 dígitos sin espacios ni guiones.
      </p>

      <FormButtons hasChanged={hasChangedName || hasChangedPhone} />
    </form>
  );
};

export default ChangeStudentInfo;
