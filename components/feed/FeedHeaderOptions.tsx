"use client";
import React, { useTransition } from "react";
import { MdOutlineMoreHoriz } from "react-icons/md";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuTrigger,
  DropdownMenuLabel,
  DropdownMenuItem,
} from "../ui/dropdown-menu";
import { deletePost } from "@/lib/actions/deletePost";
import { Loader2 } from "lucide-react";

export type FileKeyType = {
  key: string;
  url: string;
  name: string;
};

type FeedHeaderOptionsProps = {
  props: {
    postId: string;
    key: FileKeyType[];
  };
};

const FeedHeaderOptions = ({ props }: FeedHeaderOptionsProps) => {
  const [isLoading, startTransiton] = useTransition();
  return (
    <span className="ml-auto">
      <DropdownMenu>
        <DropdownMenuTrigger>
          <MdOutlineMoreHoriz className="ml-auto h-7 w-7" />;
        </DropdownMenuTrigger>
        <DropdownMenuContent>
          <DropdownMenuLabel>Options</DropdownMenuLabel>
          <DropdownMenuItem>Edit</DropdownMenuItem>
          <DropdownMenuItem
            className="text-destructive"
            onClick={() => {
              startTransiton(async () => {
                await deletePost(props.postId, props.key);
              });
            }}
          >
            {isLoading && <Loader2 className="h-4 w-4 animate-spin " />} Delete
          </DropdownMenuItem>
        </DropdownMenuContent>
      </DropdownMenu>
    </span>
  );
};

export default FeedHeaderOptions;
