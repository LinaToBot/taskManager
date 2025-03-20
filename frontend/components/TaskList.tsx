"use client";

import { useDispatch, useSelector } from "react-redux";
import { useEffect } from "react";
import { AppDispatch, RootState } from "@/store";
import { fetchTasks } from "@/store/taskActions";
import { Task } from "@/utils/types";
import TaskItem from "@/components/TaskItem";

const TaskList = () => {
  const tasks = useSelector((state: RootState) => state.tasks.tasks);
  const dispatch = useDispatch<AppDispatch>();

  useEffect(() => {
    dispatch(fetchTasks());
  }, [dispatch]);

  return (
    <div className="mt-4">
      {tasks.map((task: Task) => (
        <TaskItem key={task.id} task={task} />
      ))}
    </div>
  );
};

export default TaskList;
