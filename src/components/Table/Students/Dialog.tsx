import type { FunctionalComponent, RefObject } from "preact";
import CrossIcon from "@/components/Table/Icons/Cross";
import Person from "../Icons/Person";
import ChangeStudentInfo from "./ChangeStudentInfo";
import type { StudentProps } from "./Student";

type DialogProps = StudentProps & {
  dialogRef: RefObject<HTMLDialogElement>;
};

const Dialog: FunctionalComponent<DialogProps> = ({
  dialogRef,
  ...student
}) => {
  return (
    <dialog
      className="m-auto bg-white rounded-xl w-full max-w-md"
      closedby="any"
      ref={dialogRef}
    >
      <div className="flex items-center justify-between p-6 border-b-1 border-b-gray-300">
        <div className="flex items-center gap-3">
          <div className="size-10 text-white bg-gradient-to-br from-blue-500 to-blue-600 rounded-lg grid place-items-center">
            <Person />
          </div>
          <div>
            <h3 className="text-xl font-bold text-gray-900">
              Información del Estudiante
            </h3>
            <p className="text-sm text-gray-500">
              Editar los datos del estudiante
            </p>
          </div>
        </div>
        <button
          class="text-gray-400 hover:text-gray-600"
          onClick={() => dialogRef.current!.close()}
        >
          <CrossIcon />
        </button>
      </div>

      <ChangeStudentInfo {...student} />
    </dialog>
  );
};

export default Dialog;
