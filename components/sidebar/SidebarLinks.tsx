import React from "react";
import { Card, CardContent, CardFooter, CardHeader } from "../ui/card";
import { Avatar, AvatarFallback, AvatarImage } from "../ui/avatar";
import { Session } from "next-auth";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuLabel,
} from "../ui/dropdown-menu";
import Link from "next/link";
import { LINKS } from "@/lib/navLinks/navLinks";

type SidebarLinksProps = {
  props: {
    session: Session;
  };
};

const SidebarLinks = ({ props }: SidebarLinksProps) => {
  return (
    <div className="mt-4 flex flex-col">
      {LINKS.map((link) => {
        return (
          <Link
            className="w-full rounded-md p-1 text-sm hover:bg-secondary"
            key={link.title}
            href={link.href}
          >
            {link.title}
          </Link>
        );
      })}
    </div>
  );
};

export default SidebarLinks;
