import { FC } from "react";
import { useContext } from "react";
import { Outlet, Navigate } from "react-router-dom";
import { UserContext } from "../../context/user";
import { ROUTES } from "../../utils";
import { FloatButton, MainHeader } from "../ui";

export const MainLayout: FC = () => {
  const { name } = useContext(UserContext);

  if (!name) {
    return <Navigate to={ROUTES.LOGIN} />;
  }

  return (
    <section className="bg-cyan-500 h-full relative">
      <MainHeader />
      <Outlet />
      <FloatButton />
    </section>
  );
};
