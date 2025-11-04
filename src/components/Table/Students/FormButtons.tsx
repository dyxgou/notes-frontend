import type { FunctionalComponent } from "preact";
import AcademicIcon from "@/components/Table/Icons/Academic";
import CrossIcon from "@/components/Table/Icons/Cross";
import { useContext } from "preact/hooks";
import { Period } from "@/components/Table/Grades/GradesTable";

type FormButtonProps = {
  hasChanged: boolean;
  id: number;
};

const FormButtons: FunctionalComponent<FormButtonProps> = ({
  id,
  hasChanged,
}) => {
  const period = useContext(Period);
  return (
    <footer className="mt-5">
      <a
        href={`/report/${period}/${id}`}
        className="py-3 mb-4 flex items-center justify-center gap-3 rounded-xl bg-[#10b981] text-white font-semibold"
      >
        <AcademicIcon />
        Ver Boletín de Calificaciones
      </a>

      <nav className="flex items-center gap-3 mb-4">
        <button className="flex flex-1/3 py-3 rounded-xl items-center justify-center gap-3 bg-zinc-500 text-white font-semibold">
          <CrossIcon />
          Cancelar
        </button>

        <button
          type="submit"
          disabled={!hasChanged}
          className="flex-2/3 cursor-pointer py-3 rounded-xl bg-blue-500 text-white font-semibold disabled:bg-gray-400 disabled:cursor-not-allowed disabled:opacity-70"
        >
          Guardar Datos
        </button>
      </nav>
    </footer>
  );
};

export default FormButtons;
