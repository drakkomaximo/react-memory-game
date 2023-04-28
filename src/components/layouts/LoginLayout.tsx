import { FC } from "react";
import { Outlet } from "react-router-dom";
import { InfoFooter } from "../ui";

export const LoginLayout: FC = () => {
  return (
    <section className="bg-cyan-500">
      <Outlet />
      <InfoFooter />
    </section>
  );
};
