import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import useAuthStore from "../store.js";
import CardWrapper  from "../components/Card";
import InputField from "../components/InputField";
import SubmitButton  from "../components/Button";
import "../styles/login.css"

export default function LoginPage() {
  const [username, setUsername] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");
  const navigate = useNavigate();
  const setUser = useAuthStore((state) => state.setUser);

  const handleLogin = (event) => {
    event.preventDefault();

    let userRole = "";
    if (username === "student101" && email==="student@gmail") userRole = "student";
    else if (username === "faculty105" && email==="faculty@gmail") userRole = "faculty";
    else if (username === "admin202" && email==="admin@gmail") userRole = "admin";

    if (username && email && password) {
      if (userRole) {
        setUser({ username, email, role: userRole });

        if (userRole === "student") navigate("/student-dashboard");
        else if (userRole === "faculty") navigate("/faculty-dashboard");
        else if (userRole === "admin") navigate("/admin-dashboard");
      } else {
        setError("Check your credentials. Use a valid role-based username.");
      }
    } else {
      setError("Please fill in all fields.");
    }
  };

  return (
    <CardWrapper>
      <h2 style={{ textAlign: "center" }}>Login</h2>
      <form onSubmit={handleLogin} style={{ display: "flex", flexDirection: "column" }}>
        <InputField type="text" placeholder="Username" value={username} onChange={(e) => setUsername(e.target.value)} />
        <InputField type="email" placeholder="Email" value={email} onChange={(e) => setEmail(e.target.value)} />
        <InputField type="password" placeholder="Password" value={password} onChange={(e) => setPassword(e.target.value)} />
        <SubmitButton text="Submit" />
        {error && <p style={{ color: "red", fontSize: "14px", marginTop: "10px" }}>{error}</p>}
      </form>
    </CardWrapper>
  );
}
