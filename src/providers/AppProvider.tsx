import React, { useEffect } from "react";
import { APP_TITLE } from "../config/appTitle";
import { BrowserRouter } from "react-router-dom";
import { Provider } from "react-redux";
import store from "../store";

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
      <Provider store={store}>{children}</Provider>
    </BrowserRouter>
  );
}
