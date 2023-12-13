"use server";
export async function createBoard(formData: FormData) {
  const rawFormData = {
    title: formData.get("board-title"),
  };
  console.log("formdata :", rawFormData);
  // mutate data
  // revalidate cache
}
