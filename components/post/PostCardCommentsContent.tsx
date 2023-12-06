import { Prisma } from "@prisma/client";
import React from "react";
import { Card, CardContent, CardHeader } from "../ui/card";

import dynamic from "next/dynamic";

const DynamicPostCardCommentHeader = dynamic(
  () => import("./PostCardCommentHeader"),
);

type PostCardCommentContentProps = {
  props: {
    comment: Array<
      Prisma.CommentGetPayload<{
        include: { author: { select: { name: true; image: true } } };
      }>
    > | null;
  };
};

const PostCardCommentContent = ({ props }: PostCardCommentContentProps) => {
  return (
    <div className="flex flex-col gap-2">
      {props?.comment?.map((prop) => {
        return (
          <Card key={prop.id}>
            <CardHeader>
              <DynamicPostCardCommentHeader
                props={{
                  name: prop.author.name!,
                  image: prop.author.image!,
                  createdAt: prop.createdAt!,
                }}
              />
            </CardHeader>
            <CardContent>
              <p className="whitespace-pre-wrap text-sm">{prop.comment}</p>
            </CardContent>
          </Card>
        );
      })}
    </div>
  );
};

export default PostCardCommentContent;
