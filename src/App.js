import React, { useContext } from "react";
import LoginForm from "./components/LoginForm";
import TaskForm from "./components/TaskForm";
import TaskList from "./components/TaskList";
import { AuthContext, AuthProvider } from "./contexts/AuthContext";
import "./App.css";

function AppContent() {
  const { user, logout } = useContext(AuthContext);

  if (!user) return <LoginForm />;

  return (
    <div className="app-container">
      <h2>Task Management App</h2>
      <p>Welcome, {user}</p>
      <button onClick={logout}>Logout</button>
      <TaskForm />
      <TaskList />
    </div>
  );
}

export default function App() {
  return (
    <AuthProvider>
      <AppContent />
    </AuthProvider>
  );
}
