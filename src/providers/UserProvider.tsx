import { ReactNode, useEffect, useState } from "react";
import { useDispatch } from "react-redux";
import { AppDispatch } from "../store";
import Splash from "../pages/Splash/Splash";
import { getCurrentUser } from "../store/user/userActions";

interface IInitialLoadProviderProps {
  children: ReactNode;
}

export default function UserProvider({ children }: IInitialLoadProviderProps) {
  const dispatch = useDispatch<AppDispatch>();

  const [loading, setLoading] = useState(true);

  useEffect(() => {
    dispatch(getCurrentUser()).finally(() => setLoading(false));
  }, [dispatch]);

  return loading ? <Splash /> : children;
}
