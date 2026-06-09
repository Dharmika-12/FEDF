import React, { useState } from "react";
import Login from "./components/Login";
import Message from "./components/Message";

function App() {
  const [data, setData] = useState({
    username: "",
    password: "",
  });

  const [status, setStatus] = useState("");

  const handleChange = (e) => {
    setData({
      ...data,
      [e.target.name]: e.target.value,
    });
  };

  const handleLogin = () => {
    if (data.username === "admin" && data.password === "admin") {
      setStatus("Login Success");
    } else {
      setStatus("Login Failed");
    }
  };

  return (
    <div>
      <Login
        username={data.username}
        password={data.password}
        handleChange={handleChange}
        handleLogin={handleLogin}
      />

      <Message status={status} />
    </div>
  );
}

export default App;