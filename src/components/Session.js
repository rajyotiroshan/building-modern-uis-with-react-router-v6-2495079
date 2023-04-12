import { getSession } from "../api";
import { useParams } from "react-router";

export default function Session() {
  // Replace the placeholder catId and sessionId variables with a React Router Hook
  const { catId, sessionId } = useParams();

  const { name, desc, speaker } = getSession({ sessionId, catId });

  return (
    <>

    </>
  );
}
