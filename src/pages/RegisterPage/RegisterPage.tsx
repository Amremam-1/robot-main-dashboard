import { Link } from "react-router-dom"
import { useForm } from "react-hook-form"
import { z } from "zod"
import { zodResolver } from "@hookform/resolvers/zod"
import { FaEye, FaEyeSlash } from "react-icons/fa"
import { useState } from "react"

const schema = z
  .object({
    firstName: z.string().min(3, "First name is required"),
    lastName: z.string().min(3, "Last name is required"),
    email: z.string().email("Invalid email"),
    phone: z
      .string()
      .min(10, "Invalid phone number")
      .regex(/^[0-9]+$/, "Phone must contain only numbers"),
    password: z.string().min(6, "Password must be at least 6 characters"),
    confirmPassword: z.string(),
  })
  .refine((data) => data.password === data.confirmPassword, {
    message: "Passwords do not match",
    path: ["confirmPassword"],
  })

type FormData = z.infer<typeof schema>

const RegisterPage = () => {
  const [showPassword, setShowPassword] = useState(false)
  const [showConfirmPassword, setShowConfirmPassword] = useState(false)

  const {
    register,
    handleSubmit,
    formState: { errors, isValid },
    reset,
  } = useForm<FormData>({
    resolver: zodResolver(schema),
    mode: "onChange",
  })

  const onSubmit = (data: FormData) => {
    console.log(data)
    reset()
  }

  return (
    <div className="primary-color flex flex-col items-center justify-center min-h-screen">
      <div className="w-60 md:w-100 mb-6">
        <img src="/images/logo.png" alt="logo" loading="lazy" />
      </div>

      <h1 className="text-[#EDEDED] text-3xl md:text-5xl font-semibold">
        Register
      </h1>

      <div className="my-10 px-5 md:px-0 text-color w-full max-w-md">
        <form onSubmit={handleSubmit(onSubmit)}>
          {/* First & Last Name */}
          <div className="flex flex-col md:flex-row gap-4 mb-6">
            <div className="flex flex-col w-full">
              <label className="mb-2 opacity-70 text-sm">First Name</label>
              <input
                {...register("firstName")}
                className="py-2 px-4 rounded-[5px] focus:outline-none border border-[#46484F] bg-[#1E2027]"
              />
              {errors.firstName && (
                <p className="text-[#ef4444] text-sm">
                  {errors.firstName.message}
                </p>
              )}
            </div>

            <div className="flex flex-col w-full">
              <label className="mb-2 opacity-70 text-sm">Last Name</label>
              <input
                {...register("lastName")}
                className="py-2 px-4 rounded-[5px] focus:outline-none border border-[#46484F] bg-[#1E2027]"
              />
              {errors.lastName && (
                <p className="text-[#ef4444] text-sm">
                  {errors.lastName.message}
                </p>
              )}
            </div>
          </div>

          {/* Email */}
          <div className="mb-6 flex flex-col">
            <label className="mb-2 opacity-70 text-sm">Email</label>
            <input
              {...register("email")}
              type="email"
              className="py-2 px-4 rounded-[5px] focus:outline-none border border-[#46484F] bg-[#1E2027]"
            />
            {errors.email && (
              <p className="text-[#ef4444] text-sm">{errors.email.message}</p>
            )}
          </div>

          {/* Phone */}
          <div className="mb-6 flex flex-col">
            <label className="mb-2 opacity-70 text-sm">Mobile Number</label>
            <input
              {...register("phone")}
              type="tel"
              className="py-2 px-4 rounded-[5px] focus:outline-none border border-[#46484F] bg-[#1E2027]"
            />
            {errors.phone && (
              <p className="text-[#ef4444] text-sm">{errors.phone.message}</p>
            )}
          </div>

          {/* Password */}
          <div className="mb-6 flex flex-col">
            <label className="mb-2 opacity-70 text-sm">Password</label>
            <div className="relative">
              <input
                {...register("password")}
                type={showPassword ? "text" : "password"}
                className="py-2 px-4 w-full rounded-[5px] focus:outline-none border border-[#46484F] bg-[#1E2027] pr-12"
              />
              <button
                type="button"
                onClick={() => setShowPassword((p) => !p)}
                className="absolute right-3 top-1/2 -translate-y-1/2 text-[#DC751A]"
              >
                {showPassword ? <FaEyeSlash /> : <FaEye />}
              </button>
            </div>
            {errors.password && (
              <p className="text-[#ef4444] text-sm">
                {errors.password.message}
              </p>
            )}
          </div>

          {/* Confirm Password */}
          <div className="mb-8 flex flex-col">
            <label className="mb-2 opacity-70 text-sm">Confirm Password</label>
            <div className="relative">
              <input
                {...register("confirmPassword")}
                type={showConfirmPassword ? "text" : "password"}
                className="py-2 px-4 w-full rounded-[5px] focus:outline-none border border-[#46484F] bg-[#1E2027] pr-12"
              />
              <button
                type="button"
                onClick={() => setShowConfirmPassword((p) => !p)}
                className="absolute right-3 top-1/2 -translate-y-1/2 text-[#DC751A]"
              >
                {showConfirmPassword ? <FaEyeSlash /> : <FaEye />}
              </button>
            </div>
            {errors.confirmPassword && (
              <p className="text-[#ef4444] text-sm">
                {errors.confirmPassword.message}
              </p>
            )}
          </div>

          <button
            disabled={!isValid}
            type="submit"
            className={`w-full py-2 rounded-sm text-xl cursor-pointer ${
              isValid ? "bg-[#DC751A]" : "bg-[#dc751ad9]"
            }`}
          >
            Register
          </button>
        </form>

        <div className="mt-8 text-center">
          <Link to="/" className="underline text-[#D29648]">
            Already have an account? Login
          </Link>
        </div>
      </div>
    </div>
  )
}

export default RegisterPage
