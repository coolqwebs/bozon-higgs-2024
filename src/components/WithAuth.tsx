import { useAuthStore } from "@/store/auth";
import React, { FC } from "react";
import { Navigate, useLocation } from "react-router-dom";

interface Props {
  children: React.ReactElement;
}

const WithAuth: FC<Props> = ({ children }) => {
  const location = useLocation();
  // const token = localStorage.getItem("accessToken");
  const isAuthenticated = useAuthStore((state) => state.isAuthenticated);

  if (!isAuthenticated) {
    return <Navigate to={"/"} state={{ from: location }} replace={true} />;
  }

  return children;
};

export default WithAuth;
