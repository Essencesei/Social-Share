"use client";
import React, { ComponentProps } from "react";
import { Button } from "../ui/button";
import { FaGoogle } from "react-icons/fa6";
import { signIn } from "next-auth/react";

const SigninButton = () => {
  return (
    <Button
      className="flex gap-2 p-6"
      onClick={() => signIn("google", { callbackUrl: "/feed" })}
    >
      <FaGoogle />
      Sign in with Google
    </Button>
  );
};

export default SigninButton;
