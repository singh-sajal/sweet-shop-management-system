import SweetCard from "./SweetCard";
import Navbar from "../components/Navbar";

export default function SweetList({ sweets, setSweets }) {
  return (
    <>
      <Navbar />
      <div>
        <h1>Sweet Shop 🍬</h1>
        <div className="grid">
          {sweets.map(s => (
            <SweetCard key={s.id} sweet={s} setSweets={setSweets} />
          ))}
        </div>
      </div>
    </>
  );
}
