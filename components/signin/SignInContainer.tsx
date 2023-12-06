import React from "react";
import SigninButton from "./SignInButton";
import { Separator } from "../ui/separator";
import { signIn } from "next-auth/react";

const SignInContainer = () => {
  return (
    <section className="flex">
      <div className="flex-1" />
      <div className="flex h-screen flex-1 flex-col items-center justify-center">
        <Separator className="m-4 w-[250px]" />
        <SigninButton />
      </div>
    </section>
  );
};

export default SignInContainer;
