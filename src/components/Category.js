import { useParams, NavLink, Outlet } from "react-router-dom";
import { getCategory } from "../api";

export default function Category() {
  const { catId } = useParams();
  const category = getCategory(catId);
  console.log(category);
  return (
    <>
      <h2>{category.name} Sessions</h2>
      <ul className="session-list">
        {category?.sessions.map((session) => (
          <li className="session" to={session.id}>
            <NavLink
              to={session.id}
              className={({ isActive }) => (isActive ? "session-active" : null)}
            >
              <p className="session-name">{session.name}</p>
              <p>
                {session.speaker.name} | {session.speaker.org}
              </p>
            </NavLink>
          </li>
        ))}
      </ul>
      <Outlet />
    </>
  );
}
