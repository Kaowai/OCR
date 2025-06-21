// pages/signup.tsx
"use client";

import Link from "next/link";
import AuthLayout from "../Layout/AuthLayout";
import AnimatedPage from "../Shared/AnimatedPage";
import { Input } from "../ui/input";
import { Button } from "@/components/ui/button";

export default function SignUp() {
  return (
    <AuthLayout>
      <AnimatedPage>
        <h2 className="text-2xl font-semibold mb-2">Sign up</h2>
        <p className="text-sm mb-8">
          Already have an account?{" "}
          <Link href="/login" className="text-blue-600 hover:underline">
            Sign in
          </Link>
        </p>

        <form className="space-y-4">
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
          <div>
            <label className="block text-sm mb-1 font-semibold">
              Confirm Password
            </label>
            <Input
              type="password"
              placeholder="Confirm Password"
              className="w-full bg-white"
            />
          </div>
          <Button
            type="submit"
            className="w-full bg-blue-600 text-white py-2 rounded-md hover:bg-blue-700 transition"
          >
            Sign up
          </Button>
        </form>
      </AnimatedPage>
    </AuthLayout>
  );
}
