export default function Dashboard() {
  return (
    <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
      <div className="bg-white p-4 rounded-2xl shadow">
        <h2 className="font-semibold">Guests</h2>
        <p className="text-gray-500">Manage your guest list</p>
      </div>

      <div className="bg-white p-4 rounded-2xl shadow">
        <h2 className="font-semibold">Budget</h2>
        <p className="text-gray-500">Track expenses</p>
      </div>

      <div className="bg-white p-4 rounded-2xl shadow">
        <h2 className="font-semibold">Tasks</h2>
        <p className="text-gray-500">Coming soon</p>
      </div>
    </div>
  );
}