"use client";

import { useState } from "react";
import TaskForm from "@/components/TaskForm";
import TaskList from "@/components/TaskList";
import TaskFilter from "@/components/TaskFilter";

export default function Dashboard() {
  const [filterStatus, setFilterStatus] = useState<string | undefined>("");

  return (
    <>
      <h1 className="text-2xl font-bold mb-4">Gestor de Tareas</h1>
      <TaskFilter setFilterStatus={setFilterStatus} />
      <TaskForm />
      <TaskList filterStatus={filterStatus} />
    </>
  );
}
