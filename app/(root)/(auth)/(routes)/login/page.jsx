"use client";

import Image from "next/image";
import { logo } from "@/public/assets";
import { useState } from "react";
import { useRouter } from "next/navigation";
import { signIn } from "next-auth/react";

const Login = () => {
  const router = useRouter();
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      const response = await signIn("credentials", {
        email,
        password,
        redirect: false,
      });
      console.log(response);

      if (response.error) {
        setError("Invalid email or password");
        setTimeout(() => setError(""), 2000);
        return;
      }
      router.push("/dashboard");
      console.log("login successfull");
    } catch (error) {
      console.log("NEXT_AUTH Error :::" + error);
    }
  };

  return (
    <section>
      <div className="flex flex-col items-center justify-center px-6 py-28 mx-auto md:h-screen lg:py-0">
        <div>
          <a
            href="/"
            className="flex items-center mb-6  text-2xl font-semibold text-white"
          >
            <Image className="w-8 h-8 mr-2" src={logo} alt="logo" />
            Pasc Hub
          </a>
        </div>
        <div className="w-full rounded-lg shadow border md:mt-0 sm:max-w-md xl:p-0 bg-[#1c1c24] border-gray-700">
          <div className="p-6 space-y-4 md:space-y-6 sm:p-8">
            <h1 className="text-xl font-bold leading-tight tracking-tight text-gray-900 md:text-2xl dark:text-white">
              Sign in to your account
            </h1>

            <form className="space-y-4 md:space-y-6">
              <div>
                <label
                  htmlFor="username"
                  className="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
                >
                  Your email
                </label>
                <input
                  type="email"
                  name="email"
                  id="email"
                  placeholder="name@example.com"
                  autoComplete="email"
                  onChange={(e) => {
                    setEmail(e.target.value);
                  }}
                  required
                  className="bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                />
              </div>
              <div>
                <label
                  htmlFor="password"
                  className="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
                >
                  Password
                </label>
                <input
                  type="password"
                  name="password"
                  id="password"
                  placeholder="••••••••"
                  autoComplete="current-password"
                  onChange={(e) => {
                    setPassword(e.target.value);
                  }}
                  required
                  className="bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                />
              </div>
              <div className="flex items-center justify-between">
                <a
                  href="#"
                  className="text-sm font-medium text-primary-600 hover:underline dark:text-primary-500"
                >
                  Forgot password?
                </a>
              </div>
              {error && (
                <div className="flex alert alert-error h-1">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    className="stroke-current shrink-0 h-6 w-6"
                    fill="none"
                    viewBox="0 0 24 24"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth="2"
                      d="M10 14l2-2m0 0l2-2m-2 2l-2-2m2 2l2 2m7-2a9 9 0 11-18 0 9 9 0 0118 0z"
                    />
                  </svg>
                  <span>{error}</span>
                </div>
              )}
              <div className="flex gap-1 mr-5 md:mr-0">
                <button
                  type="button"
                  onClick={() => {
                    router.push("/");
                  }}
                  className="flex items-center px-5 py-2 text-sm text-white transition-colors duration-200 bg-[#1c1c24] border rounded-lg gap-x-2 sm:w-auto"
                >
                  HOME
                </button>
                <button
                  type="button"
                  onClick={handleSubmit}
                  className="btn bg-[#4acd8d] hover:bg-green-500 min-w-[75%] text-white focus:ring-4 focus:outline-none  font-medium rounded-lg text-sm px-5 py-2.5 text-center"
                >
                  Sign in
                </button>
              </div>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
};
export default Login;
