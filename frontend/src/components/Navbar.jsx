import { useNavigate } from "react-router-dom";

export default function Navbar() {
  const navigate = useNavigate();

  const logout = () => {
    localStorage.removeItem("token"); // clear login token
    navigate("/login"); // redirect to login
  };

  return (
    <nav style={{ marginBottom: "20px" }}>
      <button onClick={() => navigate("/dashboard")}>Dashboard</button>
      <button onClick={() => navigate("/add")}>Add Sweet</button>
      <button onClick={logout}>Logout</button>
    </nav>
  );
}
