"use client";

import TaskForm from "@/components/TaskForm";
import TaskList from "@/components/TaskList";

export default function Dashboard() {
  return (
    <>
      <h1 className="text-2xl font-bold mb-4">Gestor de Tareas</h1>
      <TaskForm />
      <TaskList />
    </>
  );
}
