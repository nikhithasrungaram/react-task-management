import { useState } from "react";
import { getTasks, saveTasks } from "../utils/storage";

export default function TaskForm() {
  const [task, setTask] = useState("");

  const addTask = () => {
    if (!task) return;
    const tasks = getTasks();
    saveTasks([...tasks, { text: task, completed: false }]);
    setTask("");
    window.location.reload();
  };

  return (
    <div>
      <input value={task} onChange={(e) => setTask(e.target.value)} placeholder="New task" />
      <button onClick={addTask}>Add</button>
    </div>
  );
}
