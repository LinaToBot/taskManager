"use client";

import { useState } from "react";
import { useRouter } from "next/navigation";
import TaskForm from "@/components/TaskForm";
import TaskList from "@/components/TaskList";
import TaskFilter from "@/components/TaskFilter";
import { Provider } from "react-redux";
import { store } from "@/store";
import { removeAuthToken } from "@/utils/auth";

export default function Dashboard() {
  const [filterStatus, setFilterStatus] = useState<string | undefined>("");
  const router = useRouter();

  const handleLogout = () => {
    removeAuthToken();
    router.push("/login");
  };

  return (
    <Provider store={store}>
      <div className="grid grid-rows-[20px_1fr_20px] items-center justify-items-center min-h-screen p-8 pb-20 gap-16 sm:p-20 font-[family-name:var(--font-geist-sans)]">
        <main className="flex flex-col gap-[32px] row-start-2 items-center sm:items-start">
          <div className="relative w-full flex justify-between items-center">
            <h1 className="text-[2.5rem] font-bold mb-4 text-center w-full">
              Gestor de Tareas
            </h1>
            <button
              onClick={handleLogout}
              className="absolute -top-7 right-0 text-center text-white px-2 py-0 rounded-full hover:bg-red-700"
            >
              X
            </button>
          </div>
          <TaskFilter setFilterStatus={setFilterStatus} />
          <TaskForm />
          <TaskList filterStatus={filterStatus} />
        </main>
      </div>
    </Provider>
  );
}
