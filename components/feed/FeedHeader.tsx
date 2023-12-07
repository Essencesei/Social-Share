import React from "react";
import { Avatar, AvatarFallback, AvatarImage } from "../ui/avatar";
import { Prisma } from "@prisma/client";
import FeedHeaderOptions from "./FeedHeaderOptions";
import FeedHeaderPrivacy from "./FeedHeaderPrivacy";

type FeedHeaderProps = {
  props: Prisma.PostGetPayload<{
    select: {
      createdAt: true;
      id: true;
      author: { select: { name: true; image: true } };
      video: true;
      image: true;
      isPrivate: true;
    };
  }>;
};

const FeedHeader = ({ props }: FeedHeaderProps) => {
  const keys = [
    JSON.parse(props.image as string),
    JSON.parse(props.video as string),
  ];

  return (
    <div className="flex items-center gap-4">
      <Avatar>
        <AvatarFallback>{props?.author?.name?.slice(0, 1)}</AvatarFallback>
        <AvatarImage src={props?.author?.image!}></AvatarImage>
      </Avatar>
      <span>
        <p className="flex items-center gap-2">
          {props.author.name}
          <FeedHeaderPrivacy props={{ isPrivate: props.isPrivate }} />
        </p>
        <p className="text-xs font-semibold text-gray-400">
          {props.createdAt.toDateString()}
        </p>
      </span>

      <FeedHeaderOptions
        props={{
          postId: props.id,
          key: keys,
        }}
      />
    </div>
  );
};

export default FeedHeader;
