"use client";

import React from "react";
import { Input } from "./ui/input";
import { Button } from "./ui/button";

import { FormEvent, useState } from "react";
import { useRouter } from "next/navigation";
import Spinner from "./Spinner";

const BASE_URL = process.env.NEXT_PUBLIC_BASE_URL;

export default function LoginForm() {
  const router = useRouter();
  const [loading, setLoading] = useState(false);
  const handleSubmit = async (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();

    const from =
      new URLSearchParams(window.location.search).get("from") || "/dashboard";

    setLoading(true);

    try {
      const formData = new FormData(event.currentTarget);

      const login: LoginProps = {
        email: formData.get("email") as string,
        password: formData.get("password") as string,
      };

      const response = await fetch(`${BASE_URL}/api/v1/users/login`, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(login),
        // credentials: "include",
      });

      const data: UserResponseProps = await response.json();

      if (data.status === "success") {
        await fetch("/api/set-cookie/", {
          method: "POST",
          headers: { "Content-Type": "application/json" },
          body: JSON.stringify({
            token: data.token,
          }),
        });

        const from =
          new URLSearchParams(window.location.search).get("from") ||
          (data.data.user.role === "admin" ? "/dashboard" : "/attendance");

        router.push(from);
      }
    } catch (error) {
      console.error(error);
    } finally {
      setLoading(false);
    }
  };
  return (
    <form
      onSubmit={handleSubmit}
      className="flex flex-col items-center justify-center px-4 py-8 bg-gray-400 lg:min-w-[30rem] lg:w-[30rem] w-full"
    >
      <img
        src="GEM LOGO TRANSPARENT BACKGROUND-01.png"
        alt="church-logo"
        className="h-[10rem] w-auto"
      />

      <Input
        className="bg-white mb-4"
        type="email"
        id="email"
        name="email"
        placeholder="example@mail.com"
        required
      />
      <Input
        className="bg-white mb-6"
        type="password"
        id="password"
        name="password"
        placeholder="password12345"
        required
      />
      <Button
        className="w-full bg-[#7E00CC] hover:bg-[#9D00FF] text-lg font-semibold"
        type="submit"
      >
        {loading && <Spinner variant="small" />}
        {loading ? "Loging..." : "Login"}
      </Button>
    </form>
  );
}
