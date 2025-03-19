import { createSlice, PayloadAction } from "@reduxjs/toolkit";

interface Task {
  id: string;
  title: string;
  status: "pending" | "completed";
}

const initialState: { tasks: Task[] } = {
  tasks: [],
};

const taskSlice = createSlice({
  name: "tasks",
  initialState,
  reducers: {
    setTasks: (state, action: PayloadAction<Task[]>) => {
      state.tasks = action.payload;
    },
    addTask: (state, action: PayloadAction<Task>) => {
      state.tasks.push(action.payload);
    },
    updateTaskStatus: (
      state,
      action: PayloadAction<{ id: string; status: "pending" | "completed" }>
    ) => {
      const task = state.tasks.find((t) => t.id === action.payload.id);
      if (!task) return;
      task.status = action.payload.status;
    },
    removeTask: (state, action: PayloadAction<string>) => {
      state.tasks = state.tasks.filter((task) => task.id !== action.payload);
    },
  },
});

export const { setTasks, addTask, updateTaskStatus, removeTask } =
  taskSlice.actions;
export default taskSlice.reducer;
