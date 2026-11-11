import React from "react";
import { Link } from "react-router";
import useAuth from "../../hooks/useAuth";

const LoginForm = () => {
  const {
    register,
    handleSubmit,
    errors,
    isLoading,
    loginForm,
    error: apiError,
  } = useAuth();

  return (
    <main className="fixed inset-0 h-dvh w-full overflow-hidden bg-[#f5f1e9] p-2 font-sans text-[#171614] sm:p-4 lg:p-6">
      <div className="mx-auto grid h-full w-full max-w-[1500px] grid-cols-1 overflow-hidden bg-[#f8f5ee] lg:grid-cols-2">
        {/* Left Fashion Image */}
        <section className="relative hidden min-h-0 overflow-hidden lg:block">
          <img
            src="https://plus.unsplash.com/premium_photo-1669688174622-0393f5c6baa2?q=80&w=764&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=NHwxMjA3fDA%3D"
            alt="Male fashion model for Fashio luxury menswear"
            className="absolute inset-0 h-full w-full object-cover object-center"
          />

          <div className="pointer-events-none absolute inset-0 bg-[#c8b89e]/20" />
          <div className="pointer-events-none absolute inset-0 bg-gradient-to-t from-[#211a12]/70 via-transparent to-[#eee5d7]/10" />

          <div className="absolute bottom-8 left-7 right-7 text-[#fffaf1] sm:bottom-12 sm:left-10 lg:bottom-14 lg:left-12">
            <p className="mb-4 text-[10px] font-medium uppercase tracking-[0.3em] text-white/80">
              Welcome Back to Fashio
            </p>

            <h1 className="max-w-lg font-serif text-5xl leading-[1.06] tracking-[-0.045em] xl:text-7xl">
              Elegance
              <br />
              never fades.
            </h1>

            <p className="mt-5 max-w-xs font-serif text-lg leading-relaxed text-white/90">
              Refined essentials. Timeless confidence. Your style, your story.
            </p>

            <div className="mt-7 h-px w-14 bg-white/60" />

            <p className="mt-4 text-[10px] uppercase tracking-[0.22em] text-white/75">
              Designed for the modern gentleman
            </p>
          </div>
        </section>

        {/* Right Login Panel */}
        <section className="flex min-h-0 items-center justify-center overflow-hidden px-5 py-4 sm:px-10 lg:px-12 xl:px-16">
          <div className="w-full max-w-[430px]">
            {/* Brand Logo */}
            <div className="mb-8 text-center sm:mb-10">
              <p className="font-serif text-5xl tracking-[-0.055em] sm:text-6xl">
                fashio
              </p>

              <p className="mt-2 text-[9px] uppercase tracking-[0.35em] text-[#77736c]">
                The Art of Dressing Well
              </p>
            </div>

            {/* Heading */}
            <div className="mb-7">
              <p className="mb-2.5 text-[10px] font-medium uppercase tracking-[0.25em] text-[#77736c]">
                Your wardrobe awaits
              </p>

              <h2 className="font-serif text-3xl leading-tight tracking-[-0.04em] sm:text-[42px]">
                Welcome back.
              </h2>

              <p className="mt-2 text-sm leading-6 text-[#77736c]">
                Sign in to continue your style journey.
              </p>
            </div>

            {/* Login Form */}
            <form onSubmit={handleSubmit(loginForm)} className="space-y-5">
              {/* Email */}
              <div>
                <label
                  htmlFor="login-email"
                  className="mb-2 block text-xs font-medium"
                >
                  Email address
                </label>

                <input
                  id="login-email"
                  type="email"
                  placeholder="Enter your email"
                  autoComplete="email"
                  {...register("email", {
                    required: "Email is required",
                    pattern: {
                      value: /^[^\s@]+@[^\s@]+\.[^\s@]+$/,
                      message: "Please enter a valid email address",
                    },
                  })}
                  className="h-12 w-full border border-[#dcd6cc] bg-transparent px-4 text-sm outline-none transition placeholder:text-[#99948a] focus:border-[#272522]"
                />

                {errors.email && (
                  <p className="mt-1 text-xs text-red-600">
                    {errors.email.message}
                  </p>
                )}
              </div>

              {/* Password */}
              <div>
                <div className="mb-2 flex items-center justify-between gap-3">
                  <label
                    htmlFor="login-password"
                    className="block text-xs font-medium"
                  >
                    Password
                  </label>

                  <span className="cursor-pointer text-[11px] text-[#77736c] underline underline-offset-4 transition hover:text-[#171614]">
                    Forgot password?
                  </span>
                </div>

                <input
                  id="login-password"
                  type="password"
                  placeholder="Enter your password"
                  autoComplete="current-password"
                  {...register("password", {
                    required: "Password is required",
                    minLength: {
                      value: 6,
                      message: "Password must be at least 6 characters",
                    },
                  })}
                  className="h-12 w-full border border-[#dcd6cc] bg-transparent px-4 text-sm outline-none transition placeholder:text-[#99948a] focus:border-[#272522]"
                />

                {errors.password && (
                  <p className="mt-1 text-xs text-red-600">
                    {errors.password.message}
                  </p>
                )}
              </div>

              {/* Remember Me */}
              <label className="flex cursor-pointer items-center gap-2.5 text-xs text-[#77736c]">
                <input
                  type="checkbox"
                  className="h-3.5 w-3.5 accent-[#171614]"
                />
                Keep me signed in
              </label>

              {/* API Error */}
              {apiError && (
                <p className="text-xs text-red-600">
                  {apiError}
                </p>
              )}

              {/* Login Button */}
              <button
                type="submit"
                disabled={isLoading}
                className="group flex h-12 w-full items-center justify-center gap-3 bg-[#171614] px-5 text-sm text-white transition-colors duration-300 hover:bg-[#37342f] disabled:opacity-60"
              >
                {isLoading ? "Signing In..." : "Sign In"}
                <span className="text-lg transition-transform group-hover:translate-x-1">
                  →
                </span>
              </button>
            </form>

            {/* Divider */}
            <div className="my-6 flex items-center gap-4">
              <div className="h-px flex-1 bg-[#dcd6cc]" />

              <span className="whitespace-nowrap text-[9px] uppercase tracking-[0.2em] text-[#77736c]">
                Or continue with
              </span>

              <div className="h-px flex-1 bg-[#dcd6cc]" />
            </div>

            {/* Social Login Buttons */}
            <div className="grid grid-cols-2 gap-3">
              <button
                type="button"
                className="flex h-11 items-center justify-center gap-2 border border-[#dcd6cc] bg-transparent text-xs transition hover:border-[#171614]"
              >
                <span className="text-base font-bold text-[#4285f4]">G</span>
                Google
              </button>

              <button
                type="button"
                className="flex h-11 items-center justify-center gap-2 border border-[#dcd6cc] bg-transparent text-xs transition hover:border-[#171614]"
              >
                <svg
                  viewBox="0 0 24 24"
                  className="h-4 w-4 fill-current"
                  aria-hidden="true"
                >
                  <path d="M16.37 12.28c.02 2.1 1.84 2.8 1.86 2.81-.02.05-.29 1.01-.96 2-.58.86-1.19 1.72-2.14 1.74-.93.02-1.23-.56-2.3-.56-1.06 0-1.4.54-2.27.58-.91.03-1.6-.93-2.18-1.79-1.19-1.73-2.1-4.88-.88-7.01a3.36 3.36 0 0 1 2.84-1.72c.89-.02 1.73.6 2.28.6.54 0 1.56-.74 2.63-.63.45.02 1.72.18 2.54 1.37-.07.05-1.52.89-1.5 2.61ZM14.64 6.9a3.24 3.24 0 0 0 .76-2.32 3.3 3.3 0 0 0-2.14 1.1 3.08 3.08 0 0 0-.78 2.25 2.77 2.77 0 0 0 2.16-1.03Z" />
                </svg>
                Apple
              </button>
            </div>

            {/* Register Prompt */}
            <p className="mt-7 text-center text-xs text-[#77736c]">
              New to Fashio?
              <Link
                to="/auth/register"
                className="ml-1 font-medium text-[#171614] underline underline-offset-4"
              >
                Create an account
              </Link>
            </p>

            {/* Terms */}
            <p className="mt-6 text-center text-[10px] leading-5 text-[#99948a]">
              By continuing, you agree to our{" "}
              <a href="/terms" className="underline underline-offset-2">
                Terms
              </a>{" "}
              and{" "}
              <a href="/privacy" className="underline underline-offset-2">
                Privacy Policy
              </a>
              .
            </p>
          </div>
        </section>
      </div>
    </main>
  );
};

export default LoginForm;
