import { createAsyncThunk } from "@reduxjs/toolkit";
import { setTasks, addTask, updateTaskStatus, removeTask } from "./taskSlice";

const API_URL = "http://127.0.0.1:27017/pln";

export const fetchTask = createAsyncThunk(
  "tasks/fetchTask",
  async (_, { dispatch }) => {
    return fetch(API_URL)
      .then((response) => {
        if (!response.ok) {
          throw new Error("Error al obtener tareas");
        }
        return response.json();
      })
      .then((data) => {
        dispatch(setTasks(data));
      })
      .catch((error) => {
        console.error("Error:", error);
      });
  }
);

export const createNewTask = createAsyncThunk(
  "tasks/createTask",
  async (title: string, { dispatch }) => {
    return fetch(API_URL, {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ title }),
    })
      .then((response) => {
        if (!response.ok) {
          throw new Error("Error al crear tarea");
        }
        return response.json();
      })
      .then((data) => {
        dispatch(addTask(data));
      })
      .catch((error) => {
        console.error("Error:", error);
      });
  }
);

export const changeTaskStatus = createAsyncThunk(
  "tasks/updateTask",
  async (
    { id, status }: { id: string; status: "pending" | "completed" },
    { dispatch }
  ) => {
    return fetch(`${API_URL}/${id}`, {
      method: "PUT",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ status }),
    })
      .then((response) => {
        if (!response.ok) {
          throw new Error("Error al actualizar tarea");
        }
        return response.json();
      })
      .then(() => {
        dispatch(updateTaskStatus({ id, status }));
      })
      .catch((error) => {
        console.error("Error:", error);
      });
  }
);

export const deleteTaskById = createAsyncThunk(
  "tasks/deleteTask",
  async (id: string, { dispatch }) => {
    return fetch(`${API_URL}/${id}`, {
      method: "DELETE",
    })
      .then((response) => {
        if (!response.ok) {
          throw new Error("Error al eliminar tarea");
        }
        return response.json();
      })
      .then(() => {
        dispatch(removeTask(id));
      })
      .catch((error) => {
        console.error("Error:", error);
      });
  }
);
