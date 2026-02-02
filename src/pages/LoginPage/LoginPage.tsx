import { Link } from "react-router-dom"
import { useForm } from "react-hook-form"
import { z } from "zod"
import { zodResolver } from "@hookform/resolvers/zod"
import { FaEye, FaEyeSlash } from "react-icons/fa"
import { useState } from "react"

const schema = z.object({
  email: z.string().email("Invalid email"),
  password: z.string().min(6, "Password must be at least 6 characters"),
})

type FormData = z.infer<typeof schema>

const LoginPage = () => {
  const [showPassword, setShowpassword] = useState(false)

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
    <div className="primary-color flex flex-col items-center  justify-center m-auto min-h-screen">
      <div className="w-60 md:w-100">
        <img src="/images/logo.png" alt="logo" loading="lazy" />
      </div>
      {/* Form Login */}

      <h1 className="text-[#EDEDED] text-3xl md:text-5xl font-semibold">
        Login
      </h1>

      <div className="my-10 text-white">
        <form onSubmit={handleSubmit(onSubmit)}>
          <div className="mb-6 flex flex-col">
            <label htmlFor="email" className="mb-3 opacity-70 text-sm">
              Email
            </label>
            <input
              {...register("email")}
              id="email"
              type="email"
              className="py-2 px-5 w-70 md:w-90 rounded-[5px] focus:outline-none border border-[#46484F] bg-[#1E2027]"
            />

            {errors.email && (
              <p className="text-[#ef4444]">{errors.email.message}</p>
            )}
          </div>

          <div className="mb-6 flex flex-col">
            <label htmlFor="password" className="mb-3 opacity-70 text-sm">
              Password
            </label>

            <div className="relative">
              <input
                {...register("password")}
                id="password"
                type={showPassword ? "text" : "password"}
                className="py-2 px-5 w-70 md:w-90 rounded-[5px] focus:outline-none border border-[#46484F] bg-[#1E2027] pr-12"
              />

              <button
                type="button"
                onClick={() => setShowpassword((prev) => !prev)}
                className="absolute right-3 top-1/2 -translate-y-1/2 text-[#DC751A] hover:opacity-80 transition"
              >
                {showPassword ? <FaEyeSlash size={18} /> : <FaEye size={18} />}
              </button>
            </div>

            {errors.password && (
              <p className="text-[#ef4444]">{errors.password.message}</p>
            )}
          </div>

          <button
            disabled={!isValid}
            type="submit"
            className={`w-full block  py-2 rounded-sm text-xl cursor-pointer ${
              isValid ? "bg-[#DC751A]" : "bg-[#dc751ad9]"
            }`}
          >
            Login
          </button>
        </form>

        <div className="mt-10 flex justify-between items-center">
          <Link className="underline text[#ededed]" to="">
            Forget Password?
          </Link>
          <Link className="underline text-[#D29648]" to="register">
            Register
          </Link>
        </div>
      </div>
    </div>
  )
}

export default LoginPage
