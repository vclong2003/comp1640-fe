import "../assets/css/global.css";
import "quill/dist/quill.core.css";

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
