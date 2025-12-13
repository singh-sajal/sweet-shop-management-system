export default function SweetCard({ sweet, setSweets }) {
  const purchase = () => {
    if (sweet.quantity === 0) return;
    setSweets(prev =>
      prev.map(s =>
        s.id === sweet.id ? { ...s, quantity: s.quantity - 1 } : s
      )
    );
  };

  return (
    <div className="card">
      <h3>{sweet.name}</h3>
      <p>Category: {sweet.category}</p>
      <p>Price: ₹{sweet.price}</p>
      <p>Stock: {sweet.quantity}</p>
      <button onClick={purchase} disabled={sweet.quantity === 0}>
        {sweet.quantity === 0 ? "Out of Stock" : "Purchase"}
      </button>
    </div>
  );
}
