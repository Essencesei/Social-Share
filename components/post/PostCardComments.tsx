import React, { useContext } from "react";
import { Card, CardContent, CardFooter, CardHeader } from "../ui/card";
import Compose from "../shared/Compose";
import { Session } from "next-auth";
import PostCardCommentsContent from "./PostCardCommentsContent";
import { Prisma } from "@prisma/client";

type PostCardCommentsProps = {
  props: {
    session: Session | null;
    comments: Array<
      Prisma.CommentGetPayload<{
        include: {
          author: { select: { name: true; image: true } };
        };
      }>
    > | null;
  };
  postId: string;
};

const PostCardComments = ({ props, postId }: PostCardCommentsProps) => {
  return (
    <Card className="fixed right-0  flex h-full flex-col">
      <CardHeader>Comments</CardHeader>
      <CardContent className="overflow-y-auto">
        <PostCardCommentsContent props={{ comment: props.comments }} />
      </CardContent>
      <CardFooter className="mb-20 mt-auto">
        <Compose
          composeType="COMMENT"
          postId={postId}
          props={{ session: props.session }}
        ></Compose>
      </CardFooter>
    </Card>
  );
};

export default PostCardComments;
