import { getSession } from "../api";

export default function Session() {
  // Replace the placeholder catId and sessionId variables with a React Router Hook
  const catId = "3d-printing-and-design";
  const sessionId = "3d-printing-metal";

  const { name, desc, speaker } = getSession({ catId, sessionId });

  return (
    <>

    </>
  );
}
