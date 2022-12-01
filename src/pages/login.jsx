import React, { useState } from "react";
import { useHistory } from 'react-router-dom';
import axios from "axios";
import Cookies from "universal-cookie";
const cookies = new Cookies();

export function Login() {
  const history = useHistory();
  // initial state
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const handleSubmit = (e) => {
    // prevent the form from refreshing the whole page
    e.preventDefault();

    // set configurations
    const configuration = {
      method: "post",
      url: "/user/login",
      data: {
        email,
        password,
      },
    };

    // make the API call
    axios(configuration)
      .then((result) => {
        // set the cookie
        cookies.set("TOKEN", result.data.token, {
          path: "/",
        });
        // redirect user to the auth page
        history.push('/dashboard');
      })
  };

  return (
    <div className="flex flex-row justify-center items-center h-screen w-screen">
      <form onSubmit={(e) => handleSubmit(e)} className="">
        <input
          type="email"
          name="email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          placeholder="Email"
        />

        <input
          type="password"
          name="password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          placeholder="Password"
        />

        <button
          type="submit"
          onClick={(e) => handleSubmit(e)}
        >
          Enter
        </button>

      </form>
    </div>
  );
}