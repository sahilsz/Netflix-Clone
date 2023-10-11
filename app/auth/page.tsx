"use client";

import Input from "@/components/Input";
import { useCallback, useState } from "react";

export default function AuthPage() {
  const [email, setEmail] = useState("");
  const [name, setName] = useState("");
  const [password, setPassword] = useState("");

  const [varient, setVarient] = useState("login");

  const toggleVarient = useCallback(() => {
    setVarient((currentVarient) =>
      currentVarient === "login" ? "register" : "login"
    );
  }, []);

  return (
    <div className="relative h-full w-full bg-[url('/images/hero.jpg')] bg-no-rep bg-fixed bg-center bg-cover">
      <div className="bg-black w-full h-full lg:bg-opacity-50">
        <nav className="px-12 py-5">
          <img src="/images/logo.png" className="h-12" alt="logo" />
        </nav>
        <div className="flex justify-center">
          <div className="bg-black bg-opacity-70 px-16 py-16 self-cente mt-2 lg:w-2/5 lg:max-w-md rounded-md w-full">
            <h2 className="text-white text-4xl mb-8 font-semibold">
              {varient === "login" ? "Sign in" : "Register"}
            </h2>
            <div className="flex flex-col gap-4">
              {varient === "register" && (
                <Input
                  id="username"
                  type="text"
                  value={name}
                  label="Username"
                  onChange={(ev: any) => setName(ev.target.value)}
                />
              )}

              <Input
                id="email"
                type="email"
                value={email}
                label="Email"
                onChange={(ev: any) => setEmail(ev.target.value)}
              />
              <Input
                id="password"
                type="password"
                value={password}
                label="Password"
                onChange={(ev: any) => setPassword(ev.target.value)}
              />
            </div>
            <button className="bg-red-600 py-3 w-full mt-10 text-white rounded-md transition hover:bg-red-700">
              {varient === "login" ? "Login" : "Sign up"}
            </button>
            <p className="text-neutral-500 mt-12 text-sm">
              {varient === "login"
                ? "First time using Netflix?"
                : "Already have an account?"}
              <span
                className="text-white ml-1 hover:underline cursor-pointer"
                onClick={toggleVarient}
              >
                {varient === "login" ? "Create an account" : "Login"}
              </span>
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}
