import { useRoutes } from "react-router-dom";
import { Home } from "../Pages/Home";
import { NotFound } from "../Pages/NotFound";

export const AppRoutes = () => {
  let routes = useRoutes([
    { path: "/", element: <Home /> },
    { path: "/*", element: <NotFound /> },
  ]);

  return routes;
};
