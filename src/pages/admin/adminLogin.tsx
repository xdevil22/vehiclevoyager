import { useForm } from "react-hook-form";
import { useNavigate } from "react-router-dom";

type FormData = {
  email: string;
  password: string;
};

const AdminLogin = () => {
  const navigate = useNavigate();
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<FormData>();

  const onSubmit = (data: FormData) => {
    const { email, password } = data;

    if (email === "admin@example.com" && password === "admin1234") {
      sessionStorage.setItem("adminAccess", "granted");
      navigate("/admin");
    } else {
      alert("Incorrect credentials");
    }
  };

  return (
    <div className="flex flex-col items-center justify-center h-screen bg-gray-100">
      <div className="bg-white shadow-md rounded p-6 w-full max-w-sm">
        <h2 className="text-xl font-bold mb-4">Admin Login</h2>

        <form onSubmit={handleSubmit(onSubmit)} className="space-y-4">
          {/* Email */}
          <div>
            <input
              type="email"
              placeholder="Enter Admin Email"
              className="border border-gray-300 p-2 w-full rounded"
              {...register("email", {
                required: "Email is required",
                pattern: {
                  value: /^[\w-.]+@([\w-]+\.)+[\w-]{2,4}$/,
                  message: "Invalid email format",
                },
              })}
            />
            {errors.email && (
              <p className="text-red-500 text-sm mt-1">
                {errors.email.message}
              </p>
            )}
          </div>

          {/* Password */}
          <div>
            <input
              type="password"
              placeholder="Enter Admin Password"
              className="border border-gray-300 p-2 w-full rounded"
              {...register("password", {
                required: "Password is required",
                minLength: {
                  value: 6,
                  message: "Password must be at least 6 characters",
                },
              })}
            />
            {errors.password && (
              <p className="text-red-500 text-sm mt-1">
                {errors.password.message}
              </p>
            )}
          </div>

          <button
            type="submit"
            className="bg-black text-white w-full py-2 rounded"
          >
            Login
          </button>
        </form>
      </div>
    </div>
  );
};

export default AdminLogin;
