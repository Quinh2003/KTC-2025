import { useContext, useEffect, useState } from "react";
import { useNavigate } from "react-router";
import AuthContext from "../context";
import { getTasksByAssignee, deleteTask } from "../services";
import type { Task } from "../types";
import { Edit, Trash } from "lucide-react";

export default function MyTasksPage() {
  const { user } = useContext(AuthContext);
  const [tasks, setTasks] = useState<Task[]>([]);
  const navigate = useNavigate();

  useEffect(() => {
    const fetchTasks = async () => {
      if (!user) return;
      try {
        const fetchedTasks = await getTasksByAssignee(user.id);
        setTasks(fetchedTasks);
      } catch (error) {
        console.error("Error fetching tasks:", error);
      }
    };

    fetchTasks();
  }, [user]);

  const handleOnEdit = (taskId: number) => {
    navigate(`/update-task/${taskId}`);
  };

  const handleOnDelete = async (taskId: number) => {
    const confirmDelete = window.confirm("Are you sure you want to delete this task?");
    if (!confirmDelete) return;

    try {
      await deleteTask(taskId);
      setTasks(tasks.filter((task) => task.id !== taskId));
    } catch (error) {
      console.error("Error deleting task:", error);
      alert("Failed to delete task");
    }
  };

  const renderStatusBadge = (status: string) => {
    const styles: Record<string, string> = {
      to_do: "bg-yellow-100 text-yellow-700",
      in_progress: "bg-blue-100 text-blue-700",
      done: "bg-green-100 text-green-700",
    };
    return (
      <span
        className={`px-2 py-1 rounded-full text-xs font-semibold capitalize ${styles[status] || "bg-gray-100 text-gray-600"}`}
      >
        {status.replace("_", " ")}
      </span>
    );
  };

  return (
    <div className="max-w-6xl mx-auto p-6">
      <h1 className="text-3xl font-bold text-blue-700 mb-6">My Assigned Tasks</h1>

      {tasks.length === 0 ? (
        <div className="text-gray-500 text-center py-10">
          <p className="text-lg">You have no tasks assigned.</p>
        </div>
      ) : (
        <div className="overflow-x-auto shadow-lg rounded-lg">
          <table className="min-w-full bg-white border border-gray-200">
            <thead className="bg-blue-50 text-sm text-blue-800 font-semibold uppercase">
              <tr>
                <th className="px-4 py-3 text-left">ID</th>
                <th className="px-4 py-3 text-left">Title</th>
                <th className="px-4 py-3 text-left">Description</th>
                <th className="px-4 py-3 text-left">Status</th>
                <th className="px-4 py-3 text-left">Assignee</th>
                <th className="px-4 py-3 text-center">Actions</th>
              </tr>
            </thead>
            <tbody className="text-sm text-gray-700">
              {tasks.map((task) => (
                <tr
                  key={task.id}
                  className="border-t hover:bg-gray-50 transition duration-200"
                >
                  <td className="px-4 py-3">{task.id}</td>
                  <td className="px-4 py-3 font-medium">{task.title}</td>
                  <td className="px-4 py-3">{task.description || "-"}</td>
                  <td className="px-4 py-3">{renderStatusBadge(task.status)}</td>
                  <td className="px-4 py-3">{task.assignee_id || "-"}</td>
                  <td className="px-4 py-3">
                    <div className="flex justify-center gap-4">
                      <button
                        onClick={() => handleOnEdit(task.id as number)}
                        className="flex items-center gap-1 text-blue-600 hover:text-blue-800 transition font-medium"
                      >
                        <Edit size={16} />
                        Edit
                      </button>
                      <button
                        onClick={() => handleOnDelete(task.id as number)}
                        className="flex items-center gap-1 text-red-600 hover:text-red-800 transition font-medium"
                      >
                        <Trash size={16} />
                        Delete
                      </button>
                    </div>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      )}
    </div>
  );
}
