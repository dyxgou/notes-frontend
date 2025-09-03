import { addStudent } from "@/store/students";
import { actions, isInputError } from "astro:actions";
import { toast } from "sonner";

const formId = "add-student-form";

document.addEventListener(
  "astro:page-load",
  () => {
    const form = document.getElementById(formId) as HTMLFormElement;

    form.addEventListener("submit", async (e) => {
      e.preventDefault();

      const formData = new FormData(form);

      const { data, error } = await actions.student.create(formData);

      if (error) {
        if (isInputError(error)) {
          toast.error("Los datos del estudiante son incorrectos.");
        } else {
          toast.error(error.message);
        }

        return;
      }

      form.reset();
      addStudent(data);
      toast.success("El estudiante ha sido creado correctamente.");
    });
  },
  { once: true },
);
