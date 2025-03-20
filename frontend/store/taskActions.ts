import { createAsyncThunk } from "@reduxjs/toolkit";
import { setTasks, addTask, updateTaskStatus, removeTask } from "./taskSlice";

const API_URL =
  process.env.NEXT_PUBLIC_URL_TASK || "http://localhost:5000/api/tasks";

// ✅ Función para obtener el token de `localStorage` sin causar errores en SSR
const getAuthToken = () =>
  typeof window !== "undefined" ? localStorage.getItem("authToken") : null;

// 🔹 Obtener tareas
export const fetchTasks = createAsyncThunk(
  "tasks/fetchTasks",
  async (status: string | undefined, { dispatch, rejectWithValue }) => {
    try {
      console.log("📡 Fetching tasks from:", API_URL);

      const url = status ? `${API_URL}?status=${status}` : API_URL;

      const token = getAuthToken();
      const response = await fetch(url, {
        method: "GET",
        headers: {
          "Content-Type": "application/json",
          Authorization: `Bearer ${token}`,
        },
      });

      if (!response.ok) {
        throw new Error(
          `Error HTTP ${response.status}: ${response.statusText}`
        );
      }

      const data = await response.json();

      if (!data || data.length === 0) {
        console.warn("⚠️ No se encontraron tareas.");
        return rejectWithValue("No hay tareas disponibles.");
      }

      dispatch(setTasks(data));
      return data;
    } catch (error: unknown) {
      console.error("❌ Error al obtener tareas:", error);
      return rejectWithValue(
        error instanceof Error
          ? error.message
          : "Error desconocido al obtener tareas."
      );
    }
  }
);

// 🔹 Crear una nueva tarea
export const createNewTask = createAsyncThunk(
  "tasks/createTask",
  async (title: string, { dispatch, rejectWithValue }) => {
    try {
      const token = getAuthToken();
      const response = await fetch(API_URL, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          Authorization: `Bearer ${token}`,
        },
        body: JSON.stringify({ title }),
      });

      if (!response.ok) {
        throw new Error("Error al crear tarea");
      }

      const data = await response.json();
      dispatch(addTask(data));
      return data;
    } catch (error) {
      console.error("❌ Error al crear tarea:", error);
      return rejectWithValue(
        error instanceof Error
          ? error.message
          : "Error desconocido al crear tarea."
      );
    }
  }
);

// 🔹 Cambiar estado de una tarea
export const changeTaskStatus = createAsyncThunk(
  "tasks/updateTask",
  async (
    { id, status }: { id: string; status: "pending" | "completed" },
    { dispatch, rejectWithValue }
  ) => {
    try {
      const token = getAuthToken();
      const response = await fetch(`${API_URL}/${id}`, {
        method: "PUT",
        headers: {
          "Content-Type": "application/json",
          Authorization: `Bearer ${token}`,
        },
        body: JSON.stringify({ status }),
      });

      if (!response.ok) {
        throw new Error("Error al actualizar tarea");
      }

      dispatch(updateTaskStatus({ id, status }));
      return await response.json();
    } catch (error) {
      console.error("❌ Error al actualizar tarea:", error);
      return rejectWithValue(
        error instanceof Error
          ? error.message
          : "Error desconocido al actualizar tarea."
      );
    }
  }
);

// 🔹 Eliminar tarea
export const deleteTaskById = createAsyncThunk(
  "tasks/deleteTask",
  async (id: string, { dispatch, rejectWithValue }) => {
    try {
      const token = getAuthToken();
      const response = await fetch(`${API_URL}/${id}`, {
        method: "DELETE",
        headers: {
          Authorization: `Bearer ${token}`,
        },
      });

      if (!response.ok) {
        throw new Error("Error al eliminar tarea");
      }

      dispatch(removeTask(id));
      return await response.json();
    } catch (error) {
      console.error("❌ Error al eliminar tarea:", error);
      return rejectWithValue(
        error instanceof Error
          ? error.message
          : "Error desconocido al eliminar tarea."
      );
    }
  }
);
