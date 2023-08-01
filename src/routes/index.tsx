import { Routes, Route } from "react-router-dom";
import { Home } from "../pages/Home";
import { Details } from "../pages/Details";
export const Router = () => {
  return (
    <Routes>
      <Route path="/" Component={Home} />
      <Route path="comanda/:cemp/:mesa" Component={Details} />
    </Routes>
  );
};
