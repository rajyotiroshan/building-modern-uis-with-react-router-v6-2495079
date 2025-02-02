import { useLocation } from "react-router";
export default function Confirmation() {
  const { state } = useLocation();
  return (
    <div className="container">
      <h1>Thank You!</h1>
      <p>
        Thank You <b>Mr. {state.name}</b> for registering for Red30 Tech.
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
