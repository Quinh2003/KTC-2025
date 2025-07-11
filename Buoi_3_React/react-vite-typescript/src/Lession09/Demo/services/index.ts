const baseUrl = "https://server.aptech.io";

const defaultHeaders = {
  "Content-Type": "application/json",
  Accept: "application/json",
  Authorization: `Bearer ${localStorage.getItem("access_token") || ""}`,
};

export type CreateTaskInput = {
  title: string;
  start_date: string;
  due_date?: string;
  description?: string;
  status: "to_do" | "in_progress" | "done";
  priority: "low" | "medium" | "high";
  assignee_id?: number;
};

export type UpdateTaskInput = CreateTaskInput;

export const login = async (username: string, password: string) => {
  const response = await fetch(`${baseUrl}/auth/login`, {
    method: "POST",
    headers: defaultHeaders,
    body: JSON.stringify({ username, password }),
  });
  return response.json();
};

export const getTasks = async () => {
  const response = await fetch(`${baseUrl}/workspaces/tasks`, {
    headers: defaultHeaders,
  });
  return response.json();
};

export const getTaskById = async (id: number) => {
  const response = await fetch(`${baseUrl}/workspaces/tasks/${id}`, {
    headers: defaultHeaders,
  });
  return response.json();
};

export const createTask = async (task: CreateTaskInput) => {
  const response = await fetch(`${baseUrl}/workspaces/tasks`, {
    method: "POST",
    headers: defaultHeaders,
    body: JSON.stringify(task),
  });
  return response.json();
};

export const updateTask = async (id: number, task: UpdateTaskInput) => {
  const response = await fetch(`${baseUrl}/workspaces/tasks/${id}`, {
    method: "PATCH",
    headers: defaultHeaders,
    body: JSON.stringify(task),
  });
  return response.json();
};

export const getTasksByAssignee = async (assigneeId: number) => {
  const response = await fetch(`${baseUrl}/workspaces/tasks/assignee/${assigneeId}`, {
    headers: defaultHeaders,
  });
  return response.json();
};

export const deleteTask = async (id: number) => {
  const response = await fetch(`${baseUrl}/workspaces/tasks/${id}`, {
    method: "DELETE",
    headers: defaultHeaders,
  });

  if (!response.ok) {
    let errorMessage = "Failed to delete task";
    try {
      const errorData = await response.json();
      errorMessage = errorData.message || errorMessage;
    } catch (e) {}
    console.error("DELETE Error:", response.status, errorMessage);
    throw new Error(errorMessage);
  }

  return true;
};
