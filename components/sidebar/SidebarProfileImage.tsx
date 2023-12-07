import React from "react";
import { Avatar, AvatarFallback, AvatarImage } from "../ui/avatar";
import { Session } from "next-auth";
import { Card, CardContent, CardFooter, CardHeader } from "../ui/card";
import { Badge } from "../ui/badge";
import { Separator } from "../ui/separator";

type SidebarProfileImageProps = {
  props: {
    session: Session;
  };
};

const SidebarProfileImage = ({ props }: SidebarProfileImageProps) => {
  return (
    <>
      {props && (
        <span className="mt-8 flex gap-4">
          <Avatar>
            <AvatarFallback>
              {props?.session?.user?.name?.slice(0, 1)}
            </AvatarFallback>
            <AvatarImage src={props?.session?.user?.image!}></AvatarImage>
          </Avatar>
          <span>
            <p className="line-clamp-1">{props?.session?.user?.name}</p>
            <p className="line-clamp-1 text-xs font-semibold text-gray-400">
              {props?.session?.user?.email}
            </p>
          </span>
        </span>
      )}
    </>
  );
};

export default SidebarProfileImage;
