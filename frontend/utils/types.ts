export interface Task {
  id: string;
  title: string;
  status: "pending" | "completed";
  subtask?: string;
  comments?: string;
}
