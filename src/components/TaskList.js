import { getTasks, saveTasks } from "../utils/storage";

export default function TaskList() {
  const tasks = getTasks();

  const toggle = (i) => {
    tasks[i].completed = !tasks[i].completed;
    saveTasks(tasks);
    window.location.reload();
  };

  const remove = (i) => {
    tasks.splice(i, 1);
    saveTasks(tasks);
    window.location.reload();
  };

  return (
    <ul>
      {tasks.map((t, i) => (
        <li key={i}>
          <span
            style={{ textDecoration: t.completed ? "line-through" : "" }}
            onClick={() => toggle(i)}
          >
            {t.text}
          </span>
          <button onClick={() => remove(i)}>❌</button>
        </li>
      ))}
    </ul>
  );
}
