import { useContext, useEffect, useState } from "react";
import { useNavigate } from "react-router";
import { Edit, Trash } from "lucide-react";
import AuthContext from "../context";
import { getTasks, deleteTask } from "../services";
import type { Task } from "../types";
import SearchTasks from "../components/SearchTasks";

export default function OurTasksPage() {
  useContext(AuthContext);
  const navigate = useNavigate();

  const [tasks, setTasks] = useState<Task[]>([]);
  const [filters, setFilters] = useState<{ status?: string; priority?: string }>({});

  useEffect(() => {
    const fetchTasks = async () => {
      try {
        const data = await getTasks();
        setTasks(data);
      } catch (error) {
        console.error("Error fetching tasks:", error);
      }
    };
    fetchTasks();
  }, []);

  const handleOnEdit = (taskId: number) => {
    navigate(`/update-task/${taskId}`);
  };

  const handleOnDelete = async (taskId: number) => {
    if (!window.confirm("Are you sure you want to delete this task?")) return;
    try {
      await deleteTask(taskId);
      setTasks((prev) => prev.filter((task) => task.id !== taskId));
    } catch (error: any) {
      console.error("Error deleting task:", error);
      alert(error.message || "Failed to delete task");
    }
  };

  const handleOnSearch = (filters: { status?: string; priority?: string }) => {
    setFilters(filters);
  };

  const filteredTasks = tasks.filter((task) => {
    if (filters.status && task.status !== filters.status) return false;
    if (filters.priority && task.priority !== filters.priority) return false;
    return true;
  });

  return (
    <div className="max-w-7xl mx-auto px-6 py-8">
      <h2 className="text-3xl font-bold text-blue-700 mb-6 tracking-tight border-b pb-2 border-blue-300">
        All Tasks
      </h2>

      <div className="mb-8">
        <SearchTasks onSearch={handleOnSearch} />
      </div>

      <div className="overflow-x-auto bg-white rounded-xl shadow-lg ring-1 ring-gray-200">
        <table className="min-w-full divide-y divide-gray-200 text-sm text-gray-800">
          <thead className="bg-blue-50 text-blue-800 uppercase text-xs font-bold">
            <tr className="text-center">
              <th className="px-6 py-4">ID</th>
              <th className="px-6 py-4 text-left">Title</th>
              <th className="px-6 py-4 text-left">Description</th>
              <th className="px-6 py-4">Status</th>
              <th className="px-6 py-4">Priority</th>
              <th className="px-6 py-4">Due Date</th>
              <th className="px-6 py-4">Assignee</th>
              <th className="px-6 py-4">Actions</th>
            </tr>
          </thead>
          <tbody className="divide-y divide-gray-100 text-center">
            {filteredTasks.length === 0 ? (
              <tr>
                <td colSpan={8} className="py-6 text-gray-500 italic">
                  No tasks found with current filters.
                </td>
              </tr>
            ) : (
              filteredTasks.map((task) => (
                <tr key={task.id} className="hover:bg-gray-50 transition duration-200">
                  <td className="px-6 py-4 font-medium">{task.id}</td>
                  <td className="px-6 py-4 text-left font-semibold text-gray-700">
                    {task.title}
                  </td>
                  <td className="px-6 py-4 text-left text-gray-600">
                    {task.description || "-"}
                  </td>
                  <td className="px-6 py-4">
                    <span
                      className={`inline-block px-3 py-1 rounded-full text-xs font-semibold capitalize ${
                        task.status === "to_do"
                          ? "bg-yellow-100 text-yellow-700"
                          : task.status === "in_progress"
                          ? "bg-blue-100 text-blue-700"
                          : "bg-green-100 text-green-700"
                      }`}
                    >
                      {task.status.replace("_", " ")}
                    </span>
                  </td>
                  <td className="px-6 py-4">
                    <span
                      className={`inline-block px-3 py-1 rounded-full text-xs font-semibold capitalize ${
                        task.priority === "high"
                          ? "bg-red-100 text-red-700"
                          : task.priority === "medium"
                          ? "bg-yellow-100 text-yellow-700"
                          : "bg-gray-100 text-gray-700"
                      }`}
                    >
                      {task.priority}
                    </span>
                  </td>
                  <td className="px-6 py-4">
                    {task.due_date
                      ? new Date(task.due_date).toLocaleDateString()
                      : "-"}
                  </td>
                  <td className="px-6 py-4">{task.assignee_id || "-"}</td>
                  <td className="px-6 py-4">
                    <div className="flex justify-center gap-4">
                      <button
                        onClick={() => handleOnEdit(task.id as number)}
                        className="flex items-center gap-1 text-blue-600 hover:text-blue-800 transition"
                      >
                        <Edit size={16} />
                        <span>Edit</span>
                      </button>
                      <button
                        onClick={() => handleOnDelete(task.id as number)}
                        className="flex items-center gap-1 text-red-600 hover:text-red-800 transition"
                      >
                        <Trash size={16} />
                        <span>Delete</span>
                      </button>
                    </div>
                  </td>
                </tr>
              ))
            )}
          </tbody>
        </table>
      </div>
    </div>
  );
}
