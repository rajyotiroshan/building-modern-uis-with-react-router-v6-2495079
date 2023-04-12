import { Outlet, NavLink } from "react-router-dom";
import { getCategories } from "../api";

export default function Categories() {
  const categories = getCategories();
  return (
    <div className="container">

    </div>
  );
}
