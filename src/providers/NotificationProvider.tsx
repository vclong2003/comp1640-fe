import { ReactNode } from "react";
import { ToastContainer } from "react-toastify";

interface INotificationProviderProps {
  children: ReactNode;
}
export default function NotificationProvider({
  children,
}: INotificationProviderProps) {
  return (
    <>
      <ToastContainer
        stacked
        position="top-right"
        autoClose={4000}
        hideProgressBar={false}
        newestOnTop={false}
        closeOnClick
        rtl={false}
        pauseOnFocusLoss
        draggable
        pauseOnHover
        theme="light"
      />
      {children}
    </>
  );
}
