export interface Task {
  id: string;
  title: string;
  status: "pending" | "completed";
  subtasks?: Task[];
  comments?: string;
}
