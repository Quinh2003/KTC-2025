import React, { useContext } from "react";
import { useForm, type SubmitHandler } from "react-hook-form";
import * as yup from "yup";
import { yupResolver } from "@hookform/resolvers/yup";
import { UserContext } from "./UserProvider";

interface IUserFormInput {
  name: string;
  email: string;
  age?: number | null;
}

const schema = yup
  .object({
    name: yup
      .string()
      .required("Name is required")
      .min(2, "Minimum 2 characters"),
    email: yup.string().required("Email is required").email("Invalid email"),
    age: yup
      .number()
      .transform((value, originalValue) =>
        originalValue === "" ? null : value
      )
      .nullable()
      .notRequired()
      .positive("Age must be positive"),
  })
  .required();

const UserForm: React.FC = () => {
  const { addUser } = useContext(UserContext)!;
  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm<IUserFormInput>({
    resolver: yupResolver(schema) as any,
  });

  const onSubmit: SubmitHandler<IUserFormInput> = (data) => {
    addUser(data);
    console.log("User added:", data);
    reset();
  };

  return (
    <form
      onSubmit={handleSubmit(onSubmit)}
      className="max-w-md mx-auto p-6 border rounded shadow mb-8"
    >
      {/* Name*/}
      <div className="mb-4">
        <label htmlFor="name" className="block font-semibold mb-1">
          Name
        </label>
        <input
          {...register("name")}
          id="name"
          type="text"
          placeholder="Enter your name"
          className="w-full px-3 py-2 border rounded focus:outline-none focus:ring-2"
        />
        {errors.name && (
          <p className="text-red-500 text-sm mt-1">{errors.name.message}</p>
        )}
      </div>

      {/* Email*/}
      <div className="mb-4">
        <label htmlFor="email" className="block font-semibold mb-1">
          Email
        </label>
        <input
          {...register("email")}
          id="email"
          type="email"
          placeholder="Enter your email"
          className="w-full px-3 py-2 border rounded focus:outline-none focus:ring-2"
        />
        {errors.email && (
          <p className="text-red-500 text-sm mt-1">{errors.email.message}</p>
        )}
      </div>

      {/* Age*/}
      <div className="mb-4">
        <label htmlFor="age" className="block font-semibold mb-1">
          Age (optional)
        </label>
        <input
          {...register("age")}
          id="age"
          type="number"
          placeholder="Enter your age"
          className="w-full px-3 py-2 border rounded focus:outline-none focus:ring-2"
        />
        {errors.age && (
          <p className="text-red-500 text-sm mt-1">{errors.age.message}</p>
        )}
      </div>

      <button
        type="submit"
        className="w-full bg-blue-600 text-white py-2 rounded font-medium hover:bg-blue-700 transition"
      >
        Submit
      </button>
    </form>
  );
};

export default UserForm;
