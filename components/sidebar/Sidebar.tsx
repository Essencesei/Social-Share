import React from "react";
import SidebarProfileImage from "./SidebarProfileImage";
import { getServerSession } from "next-auth";
import { authOptions } from "@/lib/nextauth/authOptions";
import { Separator } from "../ui/separator";
import SidebarLinks from "./SidebarLinks";
import { Card, CardContent, CardFooter, CardHeader } from "../ui/card";

const Sidebar = async () => {
  const session = await getServerSession(authOptions);
  return (
    <Card className="fixed top-16 m-2 flex h-full flex-col">
      <CardContent>
        <SidebarProfileImage props={{ session: session! }} />
      </CardContent>
      <Separator />
      <CardContent className="mb-auto">
        <SidebarLinks props={{ session: session! }} />
      </CardContent>
      <Separator />
      <CardContent className="mt-auto">asdf</CardContent>
    </Card>
  );
};

export default Sidebar;
