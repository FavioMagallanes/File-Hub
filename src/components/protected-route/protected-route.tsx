import React, { FC } from "react";
import { Navigate } from "react-router-dom";

interface ProtectedRouteProps {
  children: React.ReactNode;
}

export const ProtectedRoute: FC<ProtectedRouteProps> = ({ children }) => {
  const isAuth = true;
  if (!isAuth) {
    return <Navigate to="/login" />;
  }
  return children;
};
