import { useForm } from "react-hook-form";
import { Search, Filter } from "lucide-react";

interface IFormInput {
  status: string;
  priority: string;
}

type Props = {
  onSearch?: (filters: IFormInput) => void;
};

export default function SearchTasks({ onSearch }: Props) {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<IFormInput>({
    defaultValues: {
      status: "",
      priority: "",
    },
    mode: "onChange",
  });

  const onSubmit = (data: IFormInput) => {
    if (onSearch) {
      onSearch(data);
    }
  };

  return (
    <form
      onSubmit={handleSubmit(onSubmit)}
      className="bg-white p-6 rounded-2xl shadow-xl grid grid-cols-1 sm:grid-cols-3 gap-6"
    >
      {/* Status Dropdown */}
      <div>
        <label
          htmlFor="status"
          className="flex items-center text-gray-700 text-sm font-semibold mb-2"
        >
          <Filter className="w-4 h-4 mr-2 text-blue-500" />
          Status
        </label>
        <select
          {...register("status")}
          id="status"
          className="w-full bg-gray-50 border border-gray-300 text-sm rounded-xl px-4 py-2 focus:outline-none focus:ring-2 focus:ring-blue-500"
        >
          <option value="">All Statuses</option>
          <option value="to_do">To Do</option>
          <option value="in_progress">In Progress</option>
          <option value="done">Done</option>
        </select>
        {errors.status && (
          <p className="text-red-500 text-xs mt-1">{errors.status.message}</p>
        )}
      </div>

      {/* Priority Dropdown */}
      <div>
        <label
          htmlFor="priority"
          className="flex items-center text-gray-700 text-sm font-semibold mb-2"
        >
          <Filter className="w-4 h-4 mr-2 text-orange-500" />
          Priority
        </label>
        <select
          {...register("priority")}
          id="priority"
          className="w-full bg-gray-50 border border-gray-300 text-sm rounded-xl px-4 py-2 focus:outline-none focus:ring-2 focus:ring-orange-400"
        >
          <option value="">All Priorities</option>
          <option value="low">Low</option>
          <option value="medium">Medium</option>
          <option value="high">High</option>
        </select>
        {errors.priority && (
          <p className="text-red-500 text-xs mt-1">{errors.priority.message}</p>
        )}
      </div>

      {/* Submit Button */}
      <div className="flex items-end">
        <button
          type="submit"
          className="w-full bg-gradient-to-r from-blue-600 to-blue-500 hover:from-blue-700 hover:to-blue-600 text-white font-semibold text-sm py-2.5 px-4 rounded-xl flex items-center justify-center gap-2 transition duration-200 shadow-sm hover:shadow-md"
        >
          <Search className="w-4 h-4" />
          <span>Search</span>
        </button>
      </div>
    </form>
  );
}
