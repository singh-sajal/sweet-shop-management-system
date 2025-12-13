import { useState } from "react";
import API from "../api";
import { useNavigate } from "react-router-dom";

export default function Login() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const navigate = useNavigate();

  const submit = (e) => {
  e.preventDefault();
  if (!email || !password) {
    alert("Enter any email and password");
    return;
  }

  // FRONTEND-ONLY demo: store fake token
  localStorage.setItem("token", "dummy-token");

  alert("Logged in successfully!");
  navigate("/dashboard");
};

  return (
    <form onSubmit={submit} className="card">
      <h2>Login</h2>
      <input placeholder="Email" onChange={e => setEmail(e.target.value)} />
      <input type="password" placeholder="Password" onChange={e => setPassword(e.target.value)} />
      <button>Login</button>
    </form>
  );
}
