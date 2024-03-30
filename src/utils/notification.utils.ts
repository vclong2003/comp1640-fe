import { toast } from "react-toastify";

export const notifyError = (message: string) => {
  toast.error(message);
  return;
};

export const notifySuccess = (message: string) => {
  toast.success(message);
  return;
};

export const notifyWarning = (message: string) => {
  toast.warning(message);
  return;
};

export const notifyInfo = (message: string) => {
  toast.info(message);
  return;
};
