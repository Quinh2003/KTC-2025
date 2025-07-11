import { useEffect } from "react";
import { yupResolver } from "@hookform/resolvers/yup";
import * as yup from "yup";
import { useForm, type SubmitHandler } from "react-hook-form";
import { getTaskById, updateTask, type UpdateTaskInput } from "../services";
import { useNavigate, useParams } from "react-router";

interface IFormInput extends UpdateTaskInput {}

const schema: yup.ObjectSchema<IFormInput> = yup.object({
  title: yup.string().required().min(3).max(100),
  start_date: yup
    .string()
    .required()
    .matches(/^\d{4}-\d{2}-\d{2}$/, "Invalid date format"),
  due_date: yup
    .string()
    .optional()
    .matches(/^\d{4}-\d{2}-\d{2}$/, "Invalid date format")
    .test("due_date-after-start_date", "Due date must be after start date", function (value) {
      if (!value) return true;
      const { start_date } = this.parent;
      return new Date(value) >= new Date(start_date);
    }),
  description: yup.string().optional().max(500),
  status: yup.mixed<"to_do" | "in_progress" | "done">().required(),
  priority: yup.mixed<"low" | "medium" | "high">().required(),
  assignee_id: yup.number().optional().min(1).typeError("Must be a number"),
});

export default function UpdateTaskPage() {
  const navigate = useNavigate();
  const { id } = useParams();

  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm<IFormInput>({
    resolver: yupResolver(schema),
    defaultValues: {
      title: "",
      start_date: "",
      due_date: "",
      description: "",
      status: "to_do",
      priority: "medium",
      assignee_id: undefined,
    },
    mode: "onChange",
  });

  useEffect(() => {
    const fetchTask = async () => {
      try {
        const task = await getTaskById(id ? parseInt(id) : 0);
        reset({
          title: task.title,
          start_date: task.start_date?.split("T")[0] || "",
          due_date: task.due_date?.split("T")[0] || "",
          description: task.description || "",
          status: task.status,
          priority: task.priority,
          assignee_id: task.assignee_id || undefined,
        });
      } catch (error) {
        console.error("Error fetching task:", error);
      }
    };
    fetchTask();
  }, [id, reset]);

  const onSubmit: SubmitHandler<IFormInput> = async (data) => {
    const payload: UpdateTaskInput = {
      ...data,
      assignee_id: data.assignee_id ? Number(data.assignee_id) : undefined,
    };

    try {
      await updateTask(id ? parseInt(id) : 0, payload);
      navigate("/tasks");
    } catch (error) {
      console.error("Error updating task:", error);
      alert("Failed to update task. Please try again.");
    }
  };

  return (
    <div className="max-w-2xl mx-auto bg-white p-6 mt-8 rounded-lg shadow">
      <h2 className="text-2xl font-semibold text-blue-600 mb-6 text-center">Update Task</h2>
      <form onSubmit={handleSubmit(onSubmit)} className="space-y-5">
        {/* Title */}
        <div>
          <label htmlFor="title" className="block font-medium mb-1">Title</label>
          <input
            {...register("title")}
            type="text"
            id="title"
            className={`w-full border px-3 py-2 rounded-md ${errors.title ? "border-red-500" : "border-gray-300"}`}
          />
          {errors.title && <p className="text-red-600 text-sm">{errors.title.message}</p>}
        </div>

        {/* Description */}
        <div>
          <label htmlFor="description" className="block font-medium mb-1">Description</label>
          <textarea
            {...register("description")}
            id="description"
            rows={3}
            className={`w-full border px-3 py-2 rounded-md ${errors.description ? "border-red-500" : "border-gray-300"}`}
          />
          {errors.description && <p className="text-red-600 text-sm">{errors.description.message}</p>}
        </div>

        {/* Start Date */}
        <div>
          <label htmlFor="start_date" className="block font-medium mb-1">Start Date</label>
          <input
            {...register("start_date")}
            type="date"
            id="start_date"
            className={`w-full border px-3 py-2 rounded-md ${errors.start_date ? "border-red-500" : "border-gray-300"}`}
          />
          {errors.start_date && <p className="text-red-600 text-sm">{errors.start_date.message}</p>}
        </div>

        {/* Due Date */}
        <div>
          <label htmlFor="due_date" className="block font-medium mb-1">Due Date</label>
          <input
            {...register("due_date")}
            type="date"
            id="due_date"
            className={`w-full border px-3 py-2 rounded-md ${errors.due_date ? "border-red-500" : "border-gray-300"}`}
          />
          {errors.due_date && <p className="text-red-600 text-sm">{errors.due_date.message}</p>}
        </div>

        {/* Status */}
        <div>
          <label htmlFor="status" className="block font-medium mb-1">Status</label>
          <select
            {...register("status")}
            id="status"
            className={`w-full border px-3 py-2 rounded-md ${errors.status ? "border-red-500" : "border-gray-300"}`}
          >
            <option value="to_do">To Do</option>
            <option value="in_progress">In Progress</option>
            <option value="done">Done</option>
          </select>
          {errors.status && <p className="text-red-600 text-sm">{errors.status.message}</p>}
        </div>

        {/* Priority */}
        <div>
          <label htmlFor="priority" className="block font-medium mb-1">Priority</label>
          <select
            {...register("priority")}
            id="priority"
            className={`w-full border px-3 py-2 rounded-md ${errors.priority ? "border-red-500" : "border-gray-300"}`}
          >
            <option value="low">Low</option>
            <option value="medium">Medium</option>
            <option value="high">High</option>
          </select>
          {errors.priority && <p className="text-red-600 text-sm">{errors.priority.message}</p>}
        </div>

        {/* Assignee ID */}
        <div>
          <label htmlFor="assignee_id" className="block font-medium mb-1">Assignee ID</label>
          <input
            {...register("assignee_id")}
            type="number"
            id="assignee_id"
            className={`w-full border px-3 py-2 rounded-md ${errors.assignee_id ? "border-red-500" : "border-gray-300"}`}
          />
          {errors.assignee_id && <p className="text-red-600 text-sm">{errors.assignee_id.message}</p>}
        </div>

        {/* Submit */}
        <div>
          <button
            type="submit"
            className="w-full bg-blue-600 text-white font-medium py-2 px-4 rounded-md hover:bg-blue-700 transition"
          >
            Update Task
          </button>
        </div>
      </form>
    </div>
  );
}
