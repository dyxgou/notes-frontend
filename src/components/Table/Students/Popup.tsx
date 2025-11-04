import type { StudentProps } from "./Student";
import { Fragment, type FunctionalComponent } from "preact";
import Arrow from "@/components/Table/Icons/Arrow";
import { useRef } from "preact/hooks";
import Dialog from "./Dialog";

const Popup: FunctionalComponent<StudentProps> = ({ ...student }) => {
  const dialogRef = useRef<HTMLDialogElement>(null);

  return (
    <Fragment>
      <button
        className="p-2 text-black hover:text-blue-600 text-sm bg-white transition-colors duration-300 hover:bg-gray-100 font-bold rounded-lg cursor-pointer"
        onClick={() => dialogRef.current && dialogRef.current.showModal()}
      >
        <Arrow />
      </button>

      <Dialog dialogRef={dialogRef} {...student} />
    </Fragment>
  );
};

export default Popup;
