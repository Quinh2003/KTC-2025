import { useForm } from "react-hook-form";
import { useState } from "react";

interface FormData {
  username: string;
  password: string;
  remember: boolean;
}

export default function LoginPage() {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<FormData>();

  const [showPassword, setShowPassword] = useState(false);

  const onSubmit = (data: FormData) => {
    console.log("Form Data:", data);
    if (data.remember) {
      localStorage.setItem("user", JSON.stringify(data));
    }
  };

  const togglePassword = () => setShowPassword((prev) => !prev);

  return (
    <div className="mb-8">
      <h2 className="text-2xl font-semibold mb-4 text-center text-gray-700">
        Afternoom - Lab 3 - Form Login
      </h2>

      <div className="h-[500px] flex flex-col md:flex-row shadow-lg rounded-lg overflow-hidden">
        {/* Left */}
        <div className="w-full md:w-1/2 h-64 md:h-full relative">
          <img
            src="/img/23.png"
            alt="Login Illustration"
            className="w-full h-full object-cover"
          />
          <div className="absolute top-0 left-0 right-0 p-4 md:p-6">
            <div className="text-left">
              <h1 className="text-xl md:text-3xl font-bold leading-tight text-gray-800">
                Set Your Partner
                <br />
                Recruitment on <span className="text-blue-600">Auto-Pilot</span>
              </h1>
            </div>
          </div>
        </div>

        {/* Right */}
        <div className="w-full md:w-1/2 flex items-center justify-center bg-white px-4 py-8">
          <div className="max-w-sm w-full">
            <div className="text-center mb-6">
              <img
                src="/img/24.jpg"
                alt="Grovia Logo"
                className="w-28 mb-4 mx-auto"
              />
            </div>

            <form
              onSubmit={handleSubmit(onSubmit)}
              className="w-full p-6 bg-white"
            >
              <h2 className="text-2xl font-bold text-red-600 mb-2">Login</h2>
              <strong className="block mb-4">Login to your account</strong>

              <p className="text-sm text-gray-600 mb-4">
                Thank you for getting back to Grovia. Let's access our best
                recommendation contact for you.
              </p>

              {/* Username */}
              <div className="mb-4">
                <label className="block text-sm font-medium text-gray-700 mb-1">
                  Username
                </label>
                <input
                  type="text"
                  placeholder="you@example.com or 0123456789"
                  {...register("username", {
                    required: "Username is required",
                    minLength: { value: 5, message: "Min 5 characters" },
                    pattern: {
                      value: /^(\S+@\S+\.\S+|\d{10,11})$/,
                      message: "Must be a valid email or phone number",
                    },
                  })}
                  className={`w-full px-4 py-2 border rounded-md ${
                    errors.username ? "border-red-500" : "border-gray-300"
                  }`}
                />
                {errors.username && (
                  <p className="text-red-500 text-sm mt-1">
                    {errors.username.message}
                  </p>
                )}
              </div>

              {/* Password */}
              <div className="mb-4">
                <label className="block text-sm font-medium text-gray-700 mb-1">
                  Password
                </label>
                <div className="relative">
                  <input
                    type={showPassword ? "text" : "password"}
                    placeholder="GroviaPass123"
                    {...register("password", {
                      required: "Password is required",
                      minLength: { value: 8, message: "Min 8 characters" },
                      validate: {
                        noSpaces: (value) =>
                          !/\s/.test(value) || "No spaces allowed",
                        hasLetter: (value) =>
                          /[a-zA-Z]/.test(value) ||
                          "Must include at least one letter",
                      },
                    })}
                    className={`w-full px-4 py-2 border rounded-md ${
                      errors.password ? "border-red-500" : "border-gray-300"
                    }`}
                  />
                  <button
                    type="button"
                    onClick={togglePassword}
                    className="absolute right-3 top-2 text-sm text-blue-600"
                  >
                    {showPassword ? "Hide" : "Show"}
                  </button>
                </div>
                {errors.password && (
                  <p className="text-red-500 text-sm mt-1">
                    {errors.password.message}
                  </p>
                )}
              </div>

              {/* Remember + Reset */}
              <div className="flex items-center justify-between mb-4">
                <label className="flex items-center text-sm">
                  <input
                    type="checkbox"
                    {...register("remember")}
                    className="mr-2"
                  />
                  Remember me
                </label>
                <a href="#" className="text-sm text-blue-600 hover:underline">
                  Reset Password?
                </a>
              </div>

              {/* Submit */}
              <button
                type="submit"
                className="w-full bg-red-600 hover:bg-red-700 text-white font-semibold py-2 rounded-md"
              >
                SIGN IN
              </button>

              <p className="text-sm text-center mt-4">
                Don't have an account yet?{" "}
                <a
                  href="/register"
                  className="text-red-600 font-semibold hover:underline"
                >
                  Join Grovia Now!
                </a>
              </p>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
}
