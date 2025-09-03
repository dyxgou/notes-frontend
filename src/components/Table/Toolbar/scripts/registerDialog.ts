export const addGradeIds = {
  open: "open-add-grade",
  close: "close-add-grade",
  dialog: "add-grade-dialog",
} as const;

export const addStudentIds = {
  open: "open-add-student",
  close: "close-add-student",
  dialog: "add-student-dialog",
} as const;

const registerDialog = (
  openBtnId: string,
  closeBtnId: string,
  dialogId: string,
) => {
  const openBtn = document.getElementById(openBtnId) as HTMLButtonElement;
  const closeBtn = document.getElementById(closeBtnId) as HTMLButtonElement;
  const dialog = document.getElementById(dialogId) as HTMLDialogElement;

  if (!openBtn || !closeBtn || !dialog) {
    return;
  }

  openBtn.addEventListener("click", (e) => {
    e.preventDefault();

    dialog.showModal();
  });

  closeBtn.addEventListener("click", (e) => {
    e.preventDefault();

    dialog.close();
  });
};

export default registerDialog;
