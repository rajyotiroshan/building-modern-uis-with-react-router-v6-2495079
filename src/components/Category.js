import { useParams } from "react-router";
import { getCategory } from "../api";

export default function Category() {
  const { catid } = useParams();
  const category = getCategory(catid);
  console.log(category);
  return (
    <>
      <h2>{category.name} Sessions</h2>
      <ul className="session-list">
        {category?.sessions.map((session) => (
          <li className="session">
            <p className="session-name">{session.name}</p>
            <p>
              {session.speaker.name} | {session.speaker.org}
            </p>
          </li>
        ))}
      </ul>
    </>
  );
}
