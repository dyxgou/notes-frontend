import { addGrade } from "@/store/grades";
import { actions, isInputError } from "astro:actions";
import { toast } from "sonner";

const formId = "add-grade-form";
const finalExamAttr = "final_exam";

document.addEventListener(
  "astro:page-load",
  () => {
    const form = document.getElementById(formId) as HTMLFormElement;

    form.addEventListener("submit", async (e) => {
      e.preventDefault();

      const formData = new FormData(form);

      const isFinalExam = formData.get(finalExamAttr);

      if (isFinalExam) {
        formData.set("isFinalExam", "true");
      } else {
        formData.set("isFinalExam", "false");
      }

      const { data, error } = await actions.grade.create(formData);

      if (error) {
        if (isInputError(error)) {
          toast.error("Los datos de la nota son invalidos.");
        } else {
          toast.error(error.message);
        }

        return;
      }

      form.reset();
      toast.success("La nota ha sido creada correctamente.");

      addGrade(data);
    });
  },
  { once: true },
);
