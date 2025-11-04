import { $grades } from "@/store/grades";
import type { FunctionalComponent } from "preact";
import { useEffect, useState } from "preact/hooks";

const GradeName: FunctionalComponent = () => {
  const [name, setName] = useState<string>(`Semana 1`);

  useEffect(() => {
    const unsubscribe = $grades.subscribe((grades) => {
      setName(`Semana ${grades.length + 1}`);
    });

    return unsubscribe;
  });

  return (
    <input
      type="text"
      name="name"
      value={name}
      onInput={(e) => setName(e.currentTarget.value)}
      required
      minlength={3}
      maxlength={15}
      class="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"
      placeholder="Introduce el nombre de la nota"
    />
  );
};

export default GradeName;
