import React from "react";
import NavBarLinks from "./NavBarLinks";
import NavBarAvatar from "./NavBarAvatar";
import { getServerSession } from "next-auth";
import { authOptions } from "@/lib/nextauth/authOptions";
import NavBarLogo from "./NavBarLogo";

const Navbar = async () => {
  const session = await getServerSession(authOptions);
  return (
    <nav className="fixed z-50 flex w-full items-center bg-inherit p-2 shadow-md ">
      <NavBarLogo />
      <NavBarLinks />
      <NavBarAvatar props={{ session: session! }} />
    </nav>
  );
};

export default Navbar;
