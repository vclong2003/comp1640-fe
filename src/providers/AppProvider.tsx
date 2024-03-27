import "../assets/css/global.css";
import "react-big-calendar/lib/css/react-big-calendar.css";
import "react-quill/dist/quill.snow.css"; // Css for rich text editor

import { useEffect } from "react";
import { APP_TITLE } from "../config/app.config";
import { BrowserRouter } from "react-router-dom";
import { Provider } from "react-redux";
import store from "../store";
import UserProvider from "./UserProvider";

interface IAppProviderProps {
  children: JSX.Element;
}

export default function AppProvider({
  children,
}: IAppProviderProps): JSX.Element {
  useEffect(() => {
    document.title = APP_TITLE;
  }, []);

  return (
    <BrowserRouter>
      <Provider store={store}>
        <UserProvider>{children}</UserProvider>
      </Provider>
    </BrowserRouter>
  );
}
