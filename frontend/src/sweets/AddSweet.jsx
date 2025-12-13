import { useState } from "react";
import { useNavigate } from "react-router-dom";
import Navbar from "../components/Navbar";

export default function AddSweet({ sweets, setSweetsList }) {
  const [sweet, setSweet] = useState({});
  const navigate = useNavigate();

  const submit = (e) => {
    e.preventDefault();
    if (!sweet.name || !sweet.category || !sweet.price || !sweet.quantity) {
      alert("Please fill all fields");
      return;
    }
    const newSweet = { ...sweet, id: Date.now() };
    setSweetsList([...sweets, newSweet]);
    alert("Sweet added!");
    navigate("/dashboard");
  };

  return (
    <>
      <Navbar />
      <form onSubmit={submit} className="card">
        <h2>Add Sweet</h2>
        <input placeholder="Name" onChange={e => setSweet({ ...sweet, name: e.target.value })} />
        <input placeholder="Category" onChange={e => setSweet({ ...sweet, category: e.target.value })} />
        <input type="number" placeholder="Price" onChange={e => setSweet({ ...sweet, price: Number(e.target.value) })} />
        <input type="number" placeholder="Quantity" onChange={e => setSweet({ ...sweet, quantity: Number(e.target.value) })} />
        <button>Add</button>
      </form>
    </>
  );
}
