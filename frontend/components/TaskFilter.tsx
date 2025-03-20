"use client";

import { useState } from "react";
// import { useDispatch } from "react-redux";
// import { fetchTasks } from "@/store/taskActions";

interface TaskSearchProps {
  setFilterStatus: (status: string | undefined) => void;
}

const TaskFilter: React.FC<TaskSearchProps> = ({ setFilterStatus }) => {
  const [status, setStatus] = useState<string | undefined>(undefined);

  const handleFilterChange = (event: React.ChangeEvent<HTMLSelectElement>) => {
    const selectedStatus = event.target.value || undefined || "";
    setStatus(selectedStatus);
    setFilterStatus(selectedStatus);
  };

  return (
    <div className="mb-4 flex flex-col sm:flex-row justify-center  sm:items-center gap-2  w-full">
      <label className="text-[1.8rem] sm:text-[1.5rem] font-semibold whitespace-nowrap">
        Filtrar por estado:
      </label>
      <select
        value={status}
        onChange={handleFilterChange}
        className="border p-2 rounded w-full sm:w-auto text-sm sm:text-base bg-black text-white"
      >
        <option value="" className="bg-black text-white">
          Todos
        </option>
        <option value="pending" className="bg-black text-white">
          Pendiente
        </option>
        <option value="completed" className="bg-black text-white ">
          Completada
        </option>
      </select>
    </div>
  );
};

export default TaskFilter;
