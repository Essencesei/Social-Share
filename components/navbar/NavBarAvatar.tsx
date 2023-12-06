"use client";
import React from "react";
import { FaSignOutAlt } from "react-icons/fa";
import { Avatar, AvatarFallback, AvatarImage } from "../ui/avatar";
import { Session } from "next-auth";
import Link from "next/link";
import { LINKS } from "@/lib/navLinks/navLinks";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "../ui/dropdown-menu";
import { signOut } from "next-auth/react";

type NavBarAvatarProps = {
  props: {
    session: Session | null;
  };
};

const NavBarAvatar = ({ props }: NavBarAvatarProps) => {
  return (
    <div className="ml-auto">
      {props.session && (
        <DropdownMenu>
          <DropdownMenuTrigger>
            <Avatar>
              <AvatarFallback>
                {props?.session?.user?.name?.slice(0, 1)}
              </AvatarFallback>
              <AvatarImage src={props?.session?.user?.image!}></AvatarImage>
            </Avatar>
          </DropdownMenuTrigger>
          <DropdownMenuContent>
            <DropdownMenuLabel>Profile</DropdownMenuLabel>
            <DropdownMenuSeparator />
            {LINKS.map((link) => {
              return (
                <Link key={link.title} href={link.href} legacyBehavior passHref>
                  <DropdownMenuItem>{link.title}</DropdownMenuItem>
                </Link>
              );
            })}
            <DropdownMenuItem
              onClick={() => signOut()}
              className="text-destructive"
            >
              Logout
            </DropdownMenuItem>
          </DropdownMenuContent>
        </DropdownMenu>
      )}
    </div>
  );
};

export default NavBarAvatar;
