import LoginForm from "@/components/LoginForm";
import { Metadata } from "next";
export const metadata: Metadata = {
  title: "Login",
  description: "This is the login page for Grace Empire Ministry",
};

export default function page() {
  return (
    <div className="w-screen h-screen flex flex-col items-center justify-center bg-gray-300 lg:p-8 md:p-8 sm-p-4">
      <h1 className="text-3xl block text-center font-bold mb-8">
        Welcome To
        <span className="block text-center">Grace Empire Ministry</span>
      </h1>
      <LoginForm />
    </div>
  );
}
