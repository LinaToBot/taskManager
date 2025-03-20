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
    <div className="mb-4">
      <label className="mr-2 font-semibold">Filtrar por estado:</label>
      <select
        value={status}
        onChange={handleFilterChange}
        className="border p-2"
      >
        <option value="">Todos</option>
        <option value="pending">Pendiente</option>
        <option value="completed">Completada</option>
      </select>
    </div>
  );
};

export default TaskFilter;
