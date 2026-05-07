import { useEffect, useState } from "react";
import Dashboard from "./pages/Dashboard";
import Guests from "./pages/Guests";
import Budget from "./pages/Budget";
import Tasks from "./pages/Tasks";

export default function App() {
  const [page, setPage] = useState<
    "dashboard" | "guests" | "budget" | "tasks"
  >("dashboard");

  const [data, setData] = useState([]);

  // 👉 ADD HERE (after state)
  useEffect(() => {
    const saved = localStorage.getItem("weddingData");
    if (saved) {
      setData(JSON.parse(saved));
    }
  }, []);

  useEffect(() => {
    localStorage.setItem("weddingData", JSON.stringify(data));
  }, [data]);

  return (
    <div className="min-h-screen bg-gray-100 p-6">
      <div className="max-w-4xl mx-auto">
        <h1 className="text-3xl font-bold mb-6 text-center">
          💍 Wedding Planner
        </h1>

        <div className="flex gap-3 justify-center mb-6">
          {["dashboard", "guests", "budget", "tasks"].map((p) => (
            <button
              key={p}
              onClick={() => setPage(p as any)}
              className={`px-4 py-2 rounded-xl shadow capitalize ${
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
        {page === "tasks" && <Tasks />}
      </div>
    </div>
  );
}