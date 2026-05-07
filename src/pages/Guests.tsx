import { useEffect, useState } from "react";
import type { Guest } from "../types";

export default function Guests() {
  const [guests, setGuests] = useState<Guest[]>([]);

  // LOAD saved guests
  useEffect(() => {
    const savedGuests = localStorage.getItem("guests");

    if (savedGuests) {
      setGuests(JSON.parse(savedGuests));
    }
  }, []);

  // SAVE guests automatically
  useEffect(() => {
    localStorage.setItem("guests", JSON.stringify(guests));
  }, [guests]);

  const addGuest = () => {
    const name = prompt("Enter name");
    if (!name) return;

    setGuests([
      ...guests,
      {
        id: Date.now().toString(),
        name,
        rsvp: "pending",
      },
    ]);
  };

  const updateRSVP = (id: string, rsvp: Guest["rsvp"]) => {
    setGuests(
      guests.map((g) =>
        g.id === id ? { ...g, rsvp } : g
      )
    );
  };

  return (
    <div>
      <button
        onClick={addGuest}
        className="mb-4 bg-blue-500 text-white px-4 py-2 rounded-xl shadow"
      >
        + Add Guest
      </button>

      <div className="grid gap-3">
        {guests.map((g) => (
          <div
            key={g.id}
            className="bg-white p-4 rounded-2xl shadow flex justify-between items-center"
          >
            <div>
              <p className="font-semibold">{g.name}</p>
              <p className="text-sm text-gray-500">{g.rsvp}</p>
            </div>

            <div className="flex gap-2">
              <button
                onClick={() => updateRSVP(g.id, "going")}
                className="px-3 py-1 bg-green-500 text-white rounded-lg"
              >
                ✔
              </button>

              <button
                onClick={() => updateRSVP(g.id, "not_going")}
                className="px-3 py-1 bg-red-500 text-white rounded-lg"
              >
                ✖
              </button>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}