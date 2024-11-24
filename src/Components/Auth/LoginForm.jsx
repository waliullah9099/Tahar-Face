import { useForm } from "react-hook-form";
import Field from "../Common/Field";

export default function LoginForm() {
  const {
    regsiter,
    handleSubmit,
    formState: { errors },
  } = useForm();

  const formSubmit = (formData) => {
    console.log(formData);
  };

  return (
    <form
      onSubmit={handleSubmit(formSubmit)}
      className="border-b border-[#3F3F3F] pb-10 lg:pb-[60px]"
    >
      <Field label="Email">
        <input
          className={`auth-input ${
            errors.email ? "border-red-500" : "border-gray-200"
          }`}
          {...regsiter("email", { required: "Email is required" })}
          type="email"
          name="email"
          id="email"
        />
      </Field>

      <Field label="Password">
        <input
          className={`auth-input ${
            errors.email ? "border-red-500" : "border-gray-200"
          }`}
          {...regsiter("password", {
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
