import type { FunctionalComponent } from "preact";
import RememberIcon from "../Icons/Remember";

const RememberFigure: FunctionalComponent = () => {
  return (
    <figure className="p-4 bg-gradient-to-br from-blue-100 to-blue-200 border-1 border-blue-200 rounded-lg">
      <div className="flex items-start gap-3">
        <div className="text-white text-2xl size-6 bg-blue-500 rounded-full grid place-items-center shrink-0">
          <RememberIcon />
        </div>
        <div>
          <h3 className="font-semibold text-blue-900 mb-1">Recuerda</h3>
          <p className="text-sm text-blue-800 leading-relaxed">
            Puedes editar el nombre y número del acudiente de este estudiante.{" "}
            <br />
            Los cambios se guardarán automáticamente.
          </p>
        </div>
      </div>
    </figure>
  );
};

export default RememberFigure;
