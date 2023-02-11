import React, { useCallback, useRef } from "react";
import { useNavigate, Link } from "react-router-dom";

import { usePocket } from "../contexts/PocketContext";

export const SignUp = () => {
  const emailRef = useRef();
  const passwordRef = useRef();
  const { register } = usePocket();
  const navigate = useNavigate();

  const handleOnSubmit = useCallback(
    async (evt) => {
      evt?.preventDefault();
      await register(emailRef.current.value, passwordRef.current.value);
      navigate("/sign-in");
    },
    [register]
  );

  return (
    <section>
      <h2>Sign Up</h2>
      <form onSubmit={handleOnSubmit}>
        <input placeholder="Email" type="email" ref={emailRef} />
        <input placeholder="Password" type="password" ref={passwordRef} />
        <button type="submit">Create</button>
        <Link to="/sign-in">Go to Sign In</Link>
      </form>
    </section>
  );
};
