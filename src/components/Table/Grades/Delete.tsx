import { Fragment, type FunctionalComponent } from "preact";
import { useRef } from "preact/hooks";
import CrossIcon from "../Icons/Cross";
import Warning from "../Icons/Warning";
import { actions } from "astro:actions";
import { toast } from "sonner";

type DeleteProps = {
  gradeId: number;
  subjectId: number;
  className?: string;
};

const Delete: FunctionalComponent<DeleteProps> = ({
  gradeId,
  subjectId,
  className,
}) => {
  const dialogRef = useRef<HTMLDialogElement>(null);

  const handleDeleteNote = async (e: Event) => {
    e.preventDefault();

    const { error } = await actions.grade.deleteGrade({ gradeId, subjectId });
    if (error) {
      toast.error(error.message);
      return;
    }

    window.location.reload();
    toast.success("La nota ha sido eliminada correctamente.");
  };

  return (
    <Fragment>
      <button
        onClick={() => dialogRef.current && dialogRef.current.showModal()}
        className={`cursor-pointer hover:text-red-400 ${className}`}
      >
        <CrossIcon />
      </button>

      <dialog
        className="m-auto bg-white rounded-xl w-full max-w-md p-4"
        closedby="any"
        ref={dialogRef}
      >
        <div class="p-6 text-center border-b border-gray-200">
          <Warning />
          <h3 class="text-xl font-bold text-gray-900 mb-2">
            ¿Quieres eliminar esta nota?
          </h3>
          <p class="text-gray-600 text-sm">Esta acción es irreversible.</p>
        </div>

        <div class="p-6 border-t border-gray-200 flex gap-3">
          <button
            onClick={() => dialogRef.current?.close()}
            class="w-1/2 px-6 py-3 cursor-pointer text-sm font-semibold text-gray-700 bg-gray-100 rounded-lg hover:bg-gray-200 transition-all duration-200"
          >
            Cancelar
          </button>

          <button
            onClick={handleDeleteNote}
            class="w-1/2 px-6 py-3 text-sm font-semibold text-white bg-red-600 rounded-lg hover:bg-red-700 transition-colors duration-200"
          >
            Eliminar nota
          </button>
        </div>
      </dialog>
    </Fragment>
  );
};

export default Delete;
