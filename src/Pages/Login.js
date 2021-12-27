import React from "react";
import { useSelector, useDispatch } from "react-redux";
import { login, logout } from "../store/AuthSlice/AuthSlice";

const Login = () => {
  const { auth } = useSelector((state) => state.auth);
  const dispatch = useDispatch();
  console.log(auth);

  const handleAuth = () => {
      auth === false ? dispatch(login()) : dispatch(logout());
      
  };
  return (
    <div>
      Login
      <button onClick={() => handleAuth()}>
        {auth === false ? "Giris yap" : "Cikis yap"}
      </button>
    </div>
  );
};

export default Login;
