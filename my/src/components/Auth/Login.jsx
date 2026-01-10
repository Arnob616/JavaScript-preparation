import React from "react";
import { useState } from "react";
const Login = ({ handleLogin }) => {
  const [email, setemail] = useState("");
  const [password, setPassword] = useState("");
  function submitHandler(e) {
    e.preventDefault();
    handleLogin(email, password);
    setemail("");
    setPassword("");
  }
  return (
    <div className="flex items-center justify-center h-screen  w-screen bg-black">
      <div className="border-2 border-green-300 px-12 py-18">
        <form
          onSubmit={(e) => {
            submitHandler(e);
          }}
          className="flex flex-col"
        >
          <input
            required
            className="outline-none bg-transparent border-3 border-green-300 rounded-full px-4 py-3 text-gray-400"
            type="email"
            placeholder="Enter your email"
            onChange={(e) => {
              setemail(e.target.value);
            }}
          />
          <input
            required
            className="outline-none bg-transparent border-3 border-green-300 rounded-full px-4 py-3 text-gray-400 mt-8"
            type="password"
            placeholder="Enter your password"
            onChange={(e) => {
              setPassword(e.target.value);
            }}
          />
          <button
            type="submit"
            className="mt-5 bg-green-500 hover:bg-green-600 text-white text-xl px-4 py-3 rounded-full transition duration-200 "
          >
            Log In
          </button>
        </form>
      </div>
    </div>
  );
};

export default Login;
