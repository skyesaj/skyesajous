import React from "react";
import { useHistory } from "react-router-dom";
////////Sign Up
import SignUpForm from "./SignUpForm";

export default function SignUp() {
  const history = useHistory();
  console.log(history);
  return (
    <div>
      <SignUpForm history={history} />
    </div>
  );
}
