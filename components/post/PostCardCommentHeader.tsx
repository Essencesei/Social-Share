import React from "react";
import { Avatar, AvatarFallback, AvatarImage } from "../ui/avatar";

type PostCardCommentHeaderProps = {
  props: {
    name: string;
    image: string;
    createdAt: Date;
  };
};

const PostCardCommentHeader = ({ props }: PostCardCommentHeaderProps) => {
  return (
    <div className="flex flex-row items-center gap-2">
      <Avatar>
        <AvatarFallback>{props.name?.slice(0, 1)}</AvatarFallback>
        <AvatarImage src={props.image!}></AvatarImage>
      </Avatar>
      <span>
        <p className="flex items-center gap-2 text-sm">{props.name}</p>
        <p className="text-xs font-semibold text-gray-400">
          {props.createdAt.toDateString()}
        </p>
      </span>
    </div>
  );
};

export default PostCardCommentHeader;
