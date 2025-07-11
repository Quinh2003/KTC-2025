import { yupResolver } from "@hookform/resolvers/yup";
import * as yup from "yup";
import { useForm, type SubmitHandler } from "react-hook-form";
import { createTask, type CreateTaskInput } from "../services";
import { useNavigate } from "react-router";

interface IFormInput extends CreateTaskInput {}

const schema: yup.ObjectSchema<IFormInput> = yup.object({
  title: yup.string().required("Title is required").min(3).max(100),
  start_date: yup
    .string()
    .required("Start date is required")
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

export default function CreateTaskPage() {
  const navigate = useNavigate();

  const {
    register,
    handleSubmit,
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

  const onSubmit: SubmitHandler<IFormInput> = async (data) => {
    const payload: CreateTaskInput = {
      ...data,
      assignee_id: data.assignee_id ? Number(data.assignee_id) : undefined,
    };

    try {
      await createTask(payload);
      navigate("/tasks");
    } catch (error) {
      console.error("Error creating task:", error);
      alert("Failed to create task. Please try again.");
    }
  };

  return (
    <div className="max-w-4xl mx-auto mt-10 bg-white rounded-2xl shadow-lg p-10">
      <h2 className="text-3xl font-bold text-blue-700 mb-8 border-b pb-3">Create a New Task</h2>
      <form onSubmit={handleSubmit(onSubmit)} className="space-y-6">
        {/* Field Group */}
        {[
          {
            label: "Title",
            type: "text",
            id: "title",
            placeholder: "Enter task title",
            registerKey: "title",
          },
          {
            label: "Description",
            type: "textarea",
            id: "description",
            placeholder: "Enter task description",
            registerKey: "description",
          },
          {
            label: "Start Date",
            type: "date",
            id: "start_date",
            registerKey: "start_date",
          },
          {
            label: "Due Date",
            type: "date",
            id: "due_date",
            registerKey: "due_date",
          },
          {
            label: "Assignee ID",
            type: "number",
            id: "assignee_id",
            placeholder: "Enter assignee ID",
            registerKey: "assignee_id",
          },
        ].map((field) => (
          <div key={field.id}>
            <label htmlFor={field.id} className="block text-sm font-medium text-gray-700 mb-1">
              {field.label}
            </label>
            {field.type === "textarea" ? (
              <textarea
                {...register(field.registerKey as keyof IFormInput)}
                id={field.id}
                rows={3}
                placeholder={field.placeholder}
                className={`w-full px-4 py-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 ${
                  errors[field.registerKey as keyof IFormInput] ? "border-red-500" : "border-gray-300"
                }`}
              />
            ) : (
              <input
                {...register(field.registerKey as keyof IFormInput)}
                type={field.type}
                id={field.id}
                placeholder={field.placeholder}
                className={`w-full px-4 py-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 ${
                  errors[field.registerKey as keyof IFormInput] ? "border-red-500" : "border-gray-300"
                }`}
              />
            )}
            {errors[field.registerKey as keyof IFormInput] && (
              <p className="text-red-600 text-sm mt-1">
                {errors[field.registerKey as keyof IFormInput]?.message as string}
              </p>
            )}
          </div>
        ))}

        {/* Select Fields */}
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
          {/* Status */}
          <div>
            <label htmlFor="status" className="block text-sm font-medium text-gray-700 mb-1">
              Status
            </label>
            <select
              {...register("status")}
              id="status"
              className={`w-full px-4 py-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 ${
                errors.status ? "border-red-500" : "border-gray-300"
              }`}
            >
              <option value="to_do">To Do</option>
              <option value="in_progress">In Progress</option>
              <option value="done">Done</option>
            </select>
            {errors.status && <p className="text-red-600 text-sm mt-1">{errors.status.message}</p>}
          </div>

          {/* Priority */}
          <div>
            <label htmlFor="priority" className="block text-sm font-medium text-gray-700 mb-1">
              Priority
            </label>
            <select
              {...register("priority")}
              id="priority"
              className={`w-full px-4 py-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 ${
                errors.priority ? "border-red-500" : "border-gray-300"
              }`}
            >
              <option value="low">Low</option>
              <option value="medium">Medium</option>
              <option value="high">High</option>
            </select>
            {errors.priority && <p className="text-red-600 text-sm mt-1">{errors.priority.message}</p>}
          </div>
        </div>

        {/* Submit Button */}
        <div className="pt-4">
          <button
            type="submit"
            className="w-full bg-blue-600 hover:bg-blue-700 text-white font-semibold py-2 rounded-lg shadow transition duration-200"
          >
            Create Task
          </button>
        </div>
      </form>
    </div>
  );
}
