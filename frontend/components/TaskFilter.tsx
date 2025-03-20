"use client";

import { useState } from "react";

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
    <div className="mb-4 flex flex-col sm:flex-row justify-center sm:items-center sm:space-x-10 sm:gap-0 gap-2 w-full">
      <label className="text-[1.8rem] sm:text-[1.5rem] font-semibold whitespace-nowrap">
        Filtrar por estado:
      </label>
      <select
        value={status}
        onChange={handleFilterChange}
        className="border p-2 rounded w-full sm:w-auto text-sm sm:text-base bg-gray-800 text-white"
      >
        <option value="" className="bg-gray-800 text-white">
          Todos
        </option>
        <option value="pending" className="bg-gray-800 text-white">
          Pendiente
        </option>
        <option value="completed" className="bg-gray-800 text-white ">
          Completada
        </option>
      </select>
    </div>
  );
};

export default TaskFilter;
