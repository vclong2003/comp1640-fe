// Convert object to form data
export const objectToFormData = (obj: { [key: string]: unknown }) => {
  const formData = new FormData();
  Object.keys(obj).forEach((key) => {
    formData.append(key, obj[key] as Blob);
  });
  return formData;
};
