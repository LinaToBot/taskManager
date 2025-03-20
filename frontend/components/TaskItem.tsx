// "use client";

// import { Task } from "@/utils/types";
// import { AppDispatch } from "@/store";
// import { changeTaskStatus, deleteTaskById } from "@/store/taskActions";
// import { useDispatch } from "react-redux";

// interface TaskItemProps {
//   task: Task;
// }

// const TaskItem: React.FC<TaskItemProps> = ({ task }) => {
//   const dispatch = useDispatch<AppDispatch>();

//   return (
//     <div className="flex flex-col sm:flex-row justify-between items-center p-4 border rounded-lg shadow-md bg-gray-800 w-full max-w-sm">
//       <span className="text-lg font-semibold text-gray-800 dark:text-white text-center sm:text-left break-words break-all pr-4">
//         {task.title}
//       </span>

//       <div className="flex gap-2 mt-2 sm:mt-0">
//         <button
//           onClick={() =>
//             dispatch(
//               changeTaskStatus({
//                 id: task.id,
//                 status: task.status === "pending" ? "completed" : "pending",
//               })
//             )
//           }
//           className={`p-2 rounded-lg ${
//             task.status === "pending"
//               ? "bg-yellow-500 hover:bg-yellow-600"
//               : "bg-green-200 hover:bg-green-300"
//           } text-white transition duration-200`}
//         >
//           {task.status === "pending" ? "⚪" : "🟢"}
//         </button>

//         <button
//           onClick={() => dispatch(deleteTaskById(task.id))}
//           className="p-2 bg-gray-500 hover:bg-gray-700 text-white rounded-lg transition duration-200"
//         >
//           🗑️
//         </button>
//       </div>
//     </div>
//   );
// };

// export default TaskItem;

"use client";

import { Task } from "@/utils/types";
import { AppDispatch } from "@/store";
import {
  updateTask,
  changeTaskStatus,
  deleteTaskById,
} from "@/store/taskActions";
import { useDispatch } from "react-redux";
import { useState } from "react";

interface TaskItemProps {
  task: Task;
}

const TaskItem: React.FC<TaskItemProps> = ({ task }) => {
  const dispatch = useDispatch<AppDispatch>();
  const [isEditing, setIsEditing] = useState(false);
  const [newTitle, setNewTitle] = useState(task.title);

  const handleEdit = () => {
    if (isEditing && newTitle.trim()) {
      dispatch(updateTask({ id: task.id, title: newTitle }));
    }
    setIsEditing(!isEditing);
  };

  return (
    <div className="flex flex-col sm:flex-row justify-between items-center p-4 border rounded-lg shadow-md bg-gray-800 w-full max-w-sm">
      {isEditing ? (
        <input
          type="text"
          value={newTitle}
          onChange={(e) => setNewTitle(e.target.value)}
          className="text-lg font-semibold text-gray-800 dark:text-white text-center sm:text-left break-words break-all pr-4 bg-gray-700 text-white border border-gray-500 p-1 rounded w-full"
        />
      ) : (
        <span className="text-lg font-semibold text-gray-800 dark:text-white text-center sm:text-left break-words break-all pr-4">
          {task.title}
        </span>
      )}

      <div className="flex gap-2 mt-2 sm:mt-0">
        <button
          onClick={handleEdit}
          className="p-2 bg-purple-300 hover:bg-purple-500 text-white rounded-lg transition duration-200"
        >
          {isEditing ? "💾" : "✏️"}
        </button>

        <button
          onClick={() =>
            dispatch(
              changeTaskStatus({
                id: task.id,
                status: task.status === "pending" ? "completed" : "pending",
              })
            )
          }
          className={`p-2 rounded-lg ${
            task.status === "pending"
              ? "bg-yellow-500 hover:bg-yellow-600"
              : "bg-green-200 hover:bg-green-300"
          } text-white transition duration-200`}
        >
          {task.status === "pending" ? "⚪" : "🟢"}
        </button>

        <button
          onClick={() => dispatch(deleteTaskById(task.id))}
          className="p-2 bg-gray-500 hover:bg-gray-700 text-white rounded-lg transition duration-200"
        >
          🗑️
        </button>
      </div>
    </div>
  );
};

export default TaskItem;
