import { useState } from "react";
import type { Expense } from "../types";

export default function Budget() {
  const [expenses, setExpenses] = useState<Expense[]>([]);

  const addExpense = () => {
    const title = prompt("Title");
    const amount = Number(prompt("Amount"));

    if (!title || isNaN(amount)) return;

    setExpenses([
      ...expenses,
      { id: Date.now().toString(), title, amount },
    ]);
  };

  const total = expenses.reduce((sum, e) => sum + e.amount, 0);

  return (
    <div>
      <button
        onClick={addExpense}
        className="mb-4 bg-blue-500 text-white px-4 py-2 rounded-xl shadow"
      >
        + Add Expense
      </button>

      <div className="grid gap-3">
        {expenses.map(e => (
          <div
            key={e.id}
            className="bg-white p-4 rounded-2xl shadow flex justify-between"
          >
            <span>{e.title}</span>
            <span className="font-semibold">Rs. {e.amount}</span>
          </div>
        ))}
      </div>

      <div className="mt-4 bg-white p-4 rounded-2xl shadow text-right">
        <h2 className="text-lg font-bold">Total: Rs. {total}</h2>
      </div>
    </div>
  );
}