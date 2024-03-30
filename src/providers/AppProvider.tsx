import "@assets/css/global.css"; // Global css
import "react-big-calendar/lib/css/react-big-calendar.css"; // Css for calendar component
import "react-quill/dist/quill.snow.css"; // Css for rich text editor
import "react-toastify/dist/ReactToastify.css"; // Css for toast notification

import { ReactNode, useEffect } from "react";
import { APP_TITLE } from "@config/app.config";
import { BrowserRouter } from "react-router-dom";
import { Provider } from "react-redux";
import store from "@store/index";

interface IAppProviderProps {
  children: ReactNode;
}

export default function AppProvider({ children }: IAppProviderProps) {
  useEffect(() => {
    document.title = APP_TITLE;
  }, []);

  return (
    <BrowserRouter>
      <Provider store={store}>{children}</Provider>
    </BrowserRouter>
  );
}
