import { useLocation } from "react-router";
export default function Confirmation() {
  const { state } = useLocation();
  return (
    <div className="container">
      <h1>Thank You!</h1>
      <p>
        You're now registered for Red30 Tech.
        {state && (
          <span>
            {" "}
            We have sent more information to <b>{state.email}</b>.
          </span>
        )}
      </p>
    </div>
  );
}
