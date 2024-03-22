import { useEffect, useState } from "react";
import { useDispatch } from "react-redux";
import { AppDispatch } from "../store";
import { getCurrentUser } from "../store/slices/user";
import Splash from "../pages/Splash/Splash";

interface IInitialLoadProviderProps {
  children: JSX.Element;
}

const InitialLoadProvider = ({ children }: IInitialLoadProviderProps) => {
  const dispatch = useDispatch<AppDispatch>();
  const [loading, setLoading] = useState(true);
  useEffect(() => {
    dispatch(getCurrentUser()).finally(() => setLoading(false));
  }, []);

  return loading ? <Splash /> : children;
};
export default InitialLoadProvider;
