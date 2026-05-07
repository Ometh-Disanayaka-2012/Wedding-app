import { useState } from "react";

interface Task {
  id: string;
  title: string;
  completed: boolean;
}

export default function Tasks() {
  const [tasks, setTasks] = useState<Task[]>([]);
  const [taskTitle, setTaskTitle] = useState("");

  const addTask = () => {
    if (!taskTitle.trim()) return;

    const newTask: Task = {
      id: Date.now().toString(),
      title: taskTitle,
      completed: false,
    };

    setTasks([...tasks, newTask]);
    setTaskTitle("");
  };

  const toggleTask = (id: string) => {
    setTasks(
      tasks.map((task) =>
        task.id === id
          ? { ...task, completed: !task.completed }
          : task
      )
    );
  };

  const deleteTask = (id: string) => {
    setTasks(tasks.filter((task) => task.id !== id));
  };

  return (
    <div>
      <h1 className="text-2xl font-bold mb-4">Tasks</h1>

      <div className="flex gap-2 mb-4">
        <input
          type="text"
          placeholder="Enter task..."
          value={taskTitle}
          onChange={(e) => setTaskTitle(e.target.value)}
          className="flex-1 p-3 rounded-xl border outline-none bg-white"
        />

        <button
          onClick={addTask}
          className="bg-blue-500 text-white px-4 py-2 rounded-xl shadow"
        >
          Add
        </button>
      </div>

      <div className="grid gap-3">
        {tasks.map((task) => (
          <div
            key={task.id}
            className="bg-white p-4 rounded-2xl shadow flex justify-between items-center"
          >
            <div className="flex items-center gap-3">
              <input
                type="checkbox"
                checked={task.completed}
                onChange={() => toggleTask(task.id)}
              />

              <p
                className={
                  task.completed
                    ? "line-through text-gray-400"
                    : "text-black"
                }
              >
                {task.title}
              </p>
            </div>

            <button
              onClick={() => deleteTask(task.id)}
              className="bg-red-500 text-white px-3 py-1 rounded-lg"
            >
              Delete
            </button>
          </div>
        ))}
      </div>
    </div>
  );
}