import { useAppSelector } from "@/store/store";
import { FC } from "react";
import { Navigate, useLocation } from "react-router-dom";

interface Props {
  children: React.ReactElement;
}

const WithAuth: FC<Props> = ({ children }) => {
  const location = useLocation();
  const accessToken = localStorage.getItem("accessToken");
  const isAuth = useAppSelector((state) => state.auth.isAuth);

  if (!isAuth && accessToken) {
    return <Navigate to={"/"} state={{ from: location }} replace={true} />;
  }

  return children;
};

export default WithAuth;
