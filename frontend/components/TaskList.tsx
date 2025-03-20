"use client";

import { useDispatch, useSelector } from "react-redux";
import { useEffect } from "react";
import { AppDispatch, RootState } from "@/store";
import { fetchTasks } from "@/store/taskActions";
import { Task } from "@/utils/types";
import TaskItem from "@/components/TaskItem";

interface TaskListProps {
  filterStatus?: string;
}

const TaskList: React.FC<TaskListProps> = ({ filterStatus }) => {
  const tasks = useSelector((state: RootState) => state.tasks.tasks);
  const dispatch = useDispatch<AppDispatch>();

  useEffect(() => {
    if (filterStatus !== undefined) {
      dispatch(fetchTasks(filterStatus));
    }
  }, [dispatch, filterStatus]);

  const filteredTasks = filterStatus
    ? tasks.filter((task: Task) => task.status === filterStatus)
    : tasks;

  return (
    <div className="mt-4 w-full space-y-4">
      {filteredTasks.map((task: Task) => (
        <TaskItem key={task.id} task={task} />
      ))}
    </div>
  );
};

export default TaskList;
