import { useForm } from "react-hook-form";
import { useNavigate } from "react-router-dom";
import Field from "../Common/Field";

export default function LoginForm() {
  const navigate = useNavigate();
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();

  const formSubmit = (formData) => {
    console.log(formData);
    navigate("/");
  };

  return (
    <form
      onSubmit={handleSubmit(formSubmit)}
      className="border-b border-[#3F3F3F] pb-10 lg:pb-[60px]"
    >
      <Field label="Email" error={errors.email}>
        <input
          className={`auth-input ${
            errors.email ? "border-red-500" : "border-gray-200"
          }`}
          {...register("email", { required: "Email is required" })}
          type="email"
          name="email"
          id="email"
        />
      </Field>

      <Field label="Password" error={errors.password}>
        <input
          className={`auth-input ${
            errors.email ? "border-red-500" : "border-gray-200"
          }`}
          {...register("password", {
            required: "Password is required",
            minLength: {
              value: 8,
              message: "Password at least must be 8 charactor",
            },
          })}
          type="password"
          name="password"
          id="password"
        />
      </Field>

      <Field>
        <button
          className="auth-input bg-lwsGreen font-bold text-deepDark transition-all hover:opacity-90"
          type="submit"
        >
          Login
        </button>
      </Field>
    </form>
  );
}
