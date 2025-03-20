"use client";

import { useState } from "react";
import { createNewTask } from "@/store/taskActions";
import { AppDispatch } from "@/store";
import { useDispatch } from "react-redux";

const TaskForm = () => {
  const [title, setTitle] = useState("");
  const dispatch = useDispatch<AppDispatch>();

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!title.trim()) return;

    dispatch(createNewTask(title));
    setTitle("");
  };

  return (
    <form onSubmit={handleSubmit} className="flex gap-2">
      <input
        type="text"
        placeholder="Nueva tarea..."
        value={title}
        onChange={(e) => setTitle(e.target.value)}
        className="border p-2 flex-1"
      />
      <button type="submit" className="bg-blue-500 text-white px-4 py-2">
        Agregar
      </button>
    </form>
  );
};

export default TaskForm;
