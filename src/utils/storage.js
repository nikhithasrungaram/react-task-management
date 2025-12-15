
// get users
export const getUsers = () => {
  const data = localStorage.getItem("users");
  return data ? JSON.parse(data) : [];
};

// save users
export const saveUsers = (users) => {
  localStorage.setItem("users", JSON.stringify(users));
};

// get tasks 
export const getTasks = () => {
  const data = localStorage.getItem("tasks");
  return data ? JSON.parse(data) : [];
};

// save tasks 
export const saveTasks = (tasks) => {
  localStorage.setItem("tasks", JSON.stringify(tasks));
};

// initialize 
export const initializeData = () => {
  if (!localStorage.getItem("users")) {
    const defaultUsers = [
      { id: 1, username: "admin", password: "admin123", role: "admin" },
      { id: 2, username: "user1", password: "user123", role: "user" }
    ];
    saveUsers(defaultUsers);
  }

  if (!localStorage.getItem("tasks")) {
    saveTasks([]);
  }
};

