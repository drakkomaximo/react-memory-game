import { FC } from "react";
import { useContext } from "react";
import { Outlet, Navigate } from "react-router-dom";
import { UserContext } from "../../context/user";
import { ROUTES } from "../../utils";

export const MainLayout: FC = () => {
  const { name } = useContext(UserContext);

  if (!name) {
    console.log(name)
    return <Navigate to={ROUTES.LOGIN} />;
  }

  console.log(name)

  return <Outlet />;
};
