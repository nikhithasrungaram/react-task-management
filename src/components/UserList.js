
import { useDrop } from "react-dnd";

const UserItem = ({ user, tasks, setTasks }) => {
  const [, drop] = useDrop(() => ({
    accept: "TASK",
    drop: (item) => {
      const updated = tasks.map((t) =>
        t.id === item.id ? { ...t, assignedTo: user.id } : t
      );
      setTasks(updated);
    }
  }));

  return (
    <div
      ref={drop}
      style={{ border: "1px solid black", padding: "10px", margin: "5px" }}
    >
      {user.username}
    </div>
  );
};

const UserList = ({ users, tasks, setTasks }) => {
  return (
    <div>
      <h3>Users</h3>
      {users
        .filter((u) => u.role === "user")
        .map((u) => (
          <UserItem key={u.id} user={u} tasks={tasks} setTasks={setTasks} />
        ))}
    </div>
  );
};

export default UserList;

