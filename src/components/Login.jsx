import React, { useState } from "react";
import css from "./Login.module.css";
import { useDispatch, useSelector } from "react-redux";
import { loginUser } from "../store/reducers/userSlice";
import { useNavigate } from "react-router-dom";
import { toast } from "react-toastify";

const Login = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [firstname, setFirstname] = useState("");
  const [lastname, setLastname] = useState("");
  const [changeForm, setChangeForm] = useState(false);

  const { loading, error } = useSelector((state) => state.user)

  const LoginHandler = (e) => {
    e.preventDefault();
    let credentials = {
      email,
      password,
    };

    dispatch(loginUser(credentials)).then((result) => {
      if (result.error) {
        console.log(result.error.message);
      } else {
        // console.log("Logged in successfully");
        setEmail("")
        setPassword("")
        navigate("/")
      }
    });
  };

  const RegisterHandler = (e) => {
    e.prevenDefault();
  };

  if (error) {
    toast.error(error)
  }

  return (
    <div className={css.formMain}>
      <div className={css.formDiv}>
        {changeForm ? (
          <form
            onSubmit={LoginHandler}
            className={`${css.forms} ${css.loginForm}`}
          >
            <h2 className={css.formHeading}>Login yourself here</h2>
            <input
              type="email"
              placeholder="Email"
              className={css.emailInput}
              onChange={(e) => setEmail(e.target.value)}
              value={email}
              autoComplete="true"
            />
            <input
              type="password"
              placeholder="Password"
              className={css.passwordInput}
              onChange={(e) => setPassword(e.target.value)}
              value={password}
            />
            <h5 className={css.addLines}>
              Don't have an account?{" "}
              <span
                className={css.changeFormBtn}
                onClick={() => setChangeForm(!changeForm)}
              >
                Register now
              </span>
            </h5>
            { loading ? <button className={css.submitBtn}>Loading...</button> : <button className={css.submitBtn}>Login</button>}
          </form>
        ) : (
          <form
            onSubmit={RegisterHandler}
            className={`${css.forms} ${css.registerForm}`}
          >
            <h2 className={css.formHeading}>Register yourself here</h2>
            <div className={css.name}>
              <input
                type="text"
                placeholder="First Name"
                className={css.nameInput}
                onChange={(e) => setFirstname(e.target.value)}
                value={firstname}
              />
              <input
                type="text"
                placeholder="Last Name"
                className={css.nameInput}
                onChange={(e) => setLastname(e.target.value)}
                value={lastname}
              />
            </div>
            <input
              type="email"
              placeholder="Email"
              className={css.emailInput}
              onChange={(e) => setEmail(e.target.value)}
              value={email}
            />
            <input
              type="password"
              placeholder="Password"
              className={css.passwordInput}
              onChange={(e) => setPassword(e.target.value)}
              value={password}
            />
            <h5 className={css.addLines}>
              Already have an account?{" "}
              <span
                className={css.changeFormBtn}
                onClick={() => setChangeForm(!changeForm)}
              >
                Login now
              </span>
            </h5>
            <button className={css.submitBtn}>Register</button>
          </form>
        )}
      </div>
    </div>
  );
};

export default Login;
