import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom";
import Login from "./auth/Login";
import Register from "./auth/Register";
import SweetList from "./sweets/SweetList";
import AddSweet from "./sweets/AddSweet";
import { useState } from "react";

export default function App() {
  // shared state for all sweets
  const [sweetsList, setSweetsList] = useState([
    { id: 1, name: "Chocolate Cake", category: "Cake", price: 250, quantity: 5 },
    { id: 2, name: "Gulab Jamun", category: "Indian Sweet", price: 50, quantity: 10 },
    { id: 3, name: "Candy Cane", category: "Candy", price: 20, quantity: 0 },
  ]);

  const PrivateRoute = ({ children }) =>
    localStorage.getItem("token") ? children : <Navigate to="/login" replace />;

  return (
    <BrowserRouter>
      <Routes>
        <Route path="*" element={<Navigate to="/login" replace />} />
        <Route path="/login" element={<Login />} />
        <Route path="/register" element={<Register />} />
        <Route
          path="/dashboard"
          element={
            <PrivateRoute>
              <SweetList sweets={sweetsList} setSweets={setSweetsList} />
            </PrivateRoute>
          }
        />
        <Route
          path="/add"
          element={
            <PrivateRoute>
              <AddSweet sweets={sweetsList} setSweetsList={setSweetsList} />
            </PrivateRoute>
          }
        />
      </Routes>
    </BrowserRouter>
  );
}
