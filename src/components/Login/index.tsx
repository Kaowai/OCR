// pages/signin.tsx
"use client";
import Link from "next/link";
import AuthLayout from "../Layout/AuthLayout";
import AnimatedPage from "../Shared/AnimatedPage";
import { Input } from "../ui/input";
import { Button } from "@/components/ui/button";
import { useRouter } from "next/navigation";

export default function SignIn() {
  const router = useRouter();
  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    router.push("/project");
  };
  return (
    <AuthLayout>
      <AnimatedPage>
        <h2 className="text-2xl font-semibold mb-2">Sign in</h2>
        <p className="text-sm mb-8">
          Don’t have an account?{" "}
          <Link href="/signup" className="text-blue-600 hover:underline">
            Sign up
          </Link>
        </p>

        <form onSubmit={handleSubmit} className="space-y-4">
          <div>
            <label className="block text-sm mb-1 font-semibold">Email</label>
            <Input
              type="email"
              placeholder="Enter Email"
              className="w-full bg-white"
            />
          </div>
          <div>
            <label className="block text-sm mb-1 font-semibold">Password</label>
            <Input
              type="password"
              placeholder="Enter Password"
              className="w-full bg-white"
            />
          </div>
          <Button
            type="submit"
            className="w-full bg-blue-600 text-white py-2 rounded-md hover:bg-blue-700 transition"
          >
            Sign in
          </Button>
        </form>

        <div className="mt-4 text-sm text-center">
          <Link href="#" className="text-blue-600 hover:underline">
            Forgot your password?
          </Link>
        </div>
      </AnimatedPage>
    </AuthLayout>
  );
}
