"use client";

import { Task } from "@/utils/types";
import { AppDispatch } from "@/store";
import { changeTaskStatus, deleteTaskById } from "@/store/taskActions";
import { useDispatch } from "react-redux";

interface TaskItemProps {
  task: Task;
}

const TaskItem: React.FC<TaskItemProps> = ({ task }) => {
  const dispatch = useDispatch<AppDispatch>();

  return (
    <div className="flex justify-between p-2 border">
      <span>{task.title}</span>
      <div>
        {/* Botón para cambiar el estado de la tarea */}
        <button
          onClick={() =>
            dispatch(
              changeTaskStatus({
                id: task.id,
                status: task.status === "pending" ? "completed" : "pending",
              })
            )
          }
        >
          {task.status === "pending" ? "✔️" : "❌"}
        </button>

        {/* Botón para eliminar la tarea */}
        <button onClick={() => dispatch(deleteTaskById(task.id))}>🗑️</button>
      </div>
    </div>
  );
};

export default TaskItem;
