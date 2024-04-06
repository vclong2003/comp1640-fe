// Convert object to form data
export const objectToFormData = (obj: { [key: string]: unknown }) => {
  const formData = new FormData();
  Object.keys(obj).forEach((key) => {
    if (obj[key] instanceof Array) {
      (obj[key] as unknown[]).forEach((item) => {
        formData.append(key, item as Blob);
      });
      return;
    }
    formData.append(key, obj[key] as Blob);
  });
  return formData;
};
