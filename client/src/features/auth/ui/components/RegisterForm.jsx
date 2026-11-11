import React from "react";
import { Link } from "react-router";
import useAuth from "../../hooks/useAuth";

const RegisterForm = () => {
  const { register, handleSubmit,  errors, isLoading, registerForm , error} =
    useAuth();

  return (
    <main className="fixed inset-0 h-dvh w-full overflow-hidden bg-[#f5f1e9] p-2 font-sans text-[#171614] sm:p-4 lg:p-6">
      <div className="mx-auto grid h-full w-full max-w-[1500px] grid-cols-1 overflow-hidden bg-[#f8f5ee] lg:grid-cols-2">
        {/* Left Fashion Image */}
        <section className="relative hidden min-h-0 overflow-hidden lg:block">
          <img
            src="https://images.unsplash.com/photo-1634133118553-1e6e18299886?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=NHwxMjA3fDA%3D"
            alt="Male fashion model in neutral luxury clothing"
            className="absolute inset-0 h-full w-full object-cover object-center"
          />

          <div className="pointer-events-none absolute inset-0 bg-[#c8b89e]/15" />

          <div className="pointer-events-none absolute inset-0 bg-gradient-to-t from-[#211a12]/65 via-transparent to-[#eee5d7]/10" />

          <div className="absolute bottom-8 left-7 right-7 text-[#fffaf1] sm:bottom-12 sm:left-10 lg:bottom-14 lg:left-12">
            <p className="mb-4 text-[10px] font-medium uppercase tracking-[0.3em] text-white/80">
              The Fashio Experience
            </p>

            <h1 className="max-w-lg font-serif text-5xl leading-[1.06] tracking-[-0.045em] xl:text-7xl">
              Style that
              <br />
              stays with you.
            </h1>

            <p className="mt-5 max-w-xs font-serif text-lg leading-relaxed text-white/90">
              Timeless pieces for a more intentional wardrobe.
            </p>

            <div className="mt-7 h-px w-14 bg-white/60" />

            <p className="mt-4 text-[10px] uppercase tracking-[0.22em] text-white/75">
              Discover your signature style
            </p>
          </div>
        </section>

        {/* Right Registration Panel */}
        <section className="flex min-h-0 items-center justify-center overflow-hidden px-5 py-4 sm:px-10 lg:px-12 xl:px-16">
          <div className="w-full max-w-[430px]">
            <div className="mb-7 text-center sm:mb-9">
              <p className="font-serif text-5xl tracking-[-0.055em] sm:text-6xl">
                fashio
              </p>
            </div>

            <div className="mb-6">
              <p className="mb-2.5 text-[10px] font-medium uppercase tracking-[0.25em] text-[#77736c]">
                Join the collection
              </p>

              <h2 className="font-serif text-3xl leading-tight tracking-[-0.04em] sm:text-[42px]">
                Create your account
              </h2>

              <p className="mt-2 text-sm leading-6 text-[#77736c]">
                Discover timeless style, curated just for you.
              </p>
            </div>

            <form onSubmit={handleSubmit(registerForm)} className="space-y-4">
              <div>
                <label
                  htmlFor="register-name"
                  className="mb-2 block text-xs font-medium"
                >
                  Full name
                </label>

                <input
                  {...register("name", {
                    required: "Name is required",
                    minLength: {
                      value: 2,
                      message: "Name must be atleast 2 characters ",
                    },
                    maxLength: {
                      value: 50,
                      message: "Name must be at most 50 characters",
                    },
                  })}
                  id="register-name"
                  type="text"
                  placeholder="Enter your full name"
                  className="h-11 w-full border border-[#dcd6cc] bg-transparent px-4 text-sm outline-none transition placeholder:text-[#99948a] focus:border-[#272522]"
                />
                {errors.name && (
                  <p className="text-red-500 text-sm mt-1">
                    {errors.name.message}
                  </p>
                )}
              </div>

              <div>
                <label
                  htmlFor="register-email"
                  className="mb-2 block text-xs font-medium"
                >
                  Email address
                </label>

                <input
                  {...register("email", {
                    required: "Email is required",
                    pattern: {
                      value: /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/,
                      message: "Enter a valaid email",
                    },
                  })}
                  id="register-email"
                  type="email"
                  placeholder="Enter your email"
                  className="h-11 w-full border border-[#dcd6cc] bg-transparent px-4 text-sm outline-none transition placeholder:text-[#99948a] focus:border-[#272522]"
                />
                {errors.email && (
                  <p className="text-red-500 text-sm mt-1">
                    {errors.email.message}
                  </p>
                )}
              </div>

              <div>
                <label
                  htmlFor="register-password"
                  className="mb-2 block text-xs font-medium"
                >
                  Password
                </label>

                <input
                  {...register("password", {
                    required: "Password is required",
                    minLength: {
                      value: 6,
                      message: "Password must be atlest 6 characters",
                    },
                  })}
                  id="register-password"
                  type="password"
                  placeholder="Create a password"
                  className="h-11 w-full border border-[#dcd6cc] bg-transparent px-4 text-sm outline-none transition placeholder:text-[#99948a] focus:border-[#272522]"
                />
                {errors.password && (
                  <p className="text-red-500 text-sm mt-1">
                    {errors.password.message}
                  </p>
                )}
              </div>
              {error && (
                <p className="text-red-600 text-sm bg-red-50 px-4 py-3 rounded-lg">
                  {error}
                </p>
              )}
              <button
                disabled={isLoading}
                type="submit"
                className="group flex h-11 w-full items-center justify-center gap-3 bg-[#171614] px-5 text-sm text-white transition-colors duration-300 hover:bg-[#37342f]"
              >
                {isLoading ? "Creating...." : "Create Account"}
                <span className="text-lg transition-transform group-hover:translate-x-1">
                  →
                </span>
              </button>
            </form>

            <div className="my-5 flex items-center gap-4 sm:my-6">
              <div className="h-px flex-1 bg-[#dcd6cc]" />

              <span className="whitespace-nowrap text-[9px] uppercase tracking-[0.2em] text-[#77736c]">
                Or continue with
              </span>

              <div className="h-px flex-1 bg-[#dcd6cc]" />
            </div>

            <div className="grid grid-cols-2 gap-3">
              <button
                type="button"
                className="flex h-10 items-center justify-center gap-2 border border-[#dcd6cc] bg-transparent text-xs transition hover:border-[#171614]"
              >
                <span className="text-base font-bold text-[#4285f4]">G</span>
                Google
              </button>

              <button
                type="button"
                className="flex h-10 items-center justify-center gap-2 border border-[#dcd6cc] bg-transparent text-xs transition hover:border-[#171614]"
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

            <p className="mt-6 text-center text-xs text-[#77736c] sm:mt-7">
              Already have an account?{" "}
              <Link
                to="/auth/login"
                className="ml-1 font-medium text-[#171614] underline underline-offset-4"
              >
                login
              </Link>
            </p>

            <p className="mt-5 text-center text-[10px] leading-5 text-[#99948a]">
              By creating an account, you agree to our{" "}
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

export default RegisterForm;
