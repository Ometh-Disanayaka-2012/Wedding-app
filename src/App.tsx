import { useState } from "react";
import Dashboard from "./pages/Dashboard";
import Guests from "./pages/Guests";
import Budget from "./pages/Budget";

export default function App() {
  const [page, setPage] = useState("dashboard");

  return (
    <div className="min-h-screen bg-gray-100 p-6">
      <div className="max-w-4xl mx-auto">
        <h1 className="text-3xl font-bold mb-6 text-center">
          💍 Wedding Planner
        </h1>

        <div className="flex gap-3 justify-center mb-6">
          {["dashboard", "guests", "budget"].map(p => (
            <button
              key={p}
              onClick={() => setPage(p)}
              className={`px-4 py-2 rounded-xl shadow ${
                page === p
                  ? "bg-blue-500 text-white"
                  : "bg-white hover:bg-gray-200"
              }`}
            >
              {p}
            </button>
          ))}
        </div>

        {page === "dashboard" && <Dashboard />}
        {page === "guests" && <Guests />}
        {page === "budget" && <Budget />}
      </div>
    </div>
  );
}