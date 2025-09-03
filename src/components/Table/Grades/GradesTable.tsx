import { setSubject } from "@/store/subject";
import type { FunctionalComponent } from "preact";
import { useLayoutEffect } from "preact/hooks";
import Header from "./Header.tsx";
import StudentBody from "@/components/Table/Students/StudentBody.tsx";

type GradesTableProps = {
  course: number;
  period: number;
  subjectId: number;
};

const GradesTable: FunctionalComponent<GradesTableProps> = ({
  course,
  period,
  subjectId,
}) => {
  useLayoutEffect(() => {
    setSubject({ course, period, id: subjectId });
  }, []);

  return (
    <table className="w-full table-auto">
      <Header />
      <StudentBody subjectId={subjectId} />
      {/* <caption className="caption-bottom"> */}
      {/*   <section className="w-full h-10 border-t-1 flex items-center justify-evenly border-t-gray-300"> */}
      {/*     <Breadcrumbs colorValue={10} range="10 - 20" /> */}
      {/*     <Breadcrumbs colorValue={20} range="20 - 30" /> */}
      {/*     <Breadcrumbs colorValue={30} range="30 - 40" /> */}
      {/*     <Breadcrumbs colorValue={40} range="40 - 50" /> */}
      {/*   </section> */}
      {/* </caption> */}
    </table>
  );
};

export default GradesTable;
