"use client";

import { useState } from "react";
import TaskForm from "@/components/TaskForm";
import TaskList from "@/components/TaskList";
import TaskFilter from "@/components/TaskFilter";
import { Provider } from "react-redux";
import { store } from "@/store";

export default function Dashboard() {
  const [filterStatus, setFilterStatus] = useState<string | undefined>("");

  return (
    <>
      <Provider store={store}>
        <div className="grid grid-rows-[20px_1fr_20px] items-center justify-items-center min-h-screen p-8 pb-20 gap-16 sm:p-20 font-[family-name:var(--font-geist-sans)]">
          <main className="flex flex-col gap-[32px] row-start-2 items-center sm:items-start">
            <h1 className="text-2xl font-bold mb-4">Gestor de Tareas</h1>
            <TaskFilter setFilterStatus={setFilterStatus} />
            <TaskForm />
            <TaskList filterStatus={filterStatus} />
          </main>
        </div>
      </Provider>
    </>
  );
}
