"use server";

import { revalidatePath } from "next/cache";
import { PrismaClient } from "@prisma/client";

const prisma = new PrismaClient();

type PostCommentType = {
  props: {
    comment: string;
    authorId: string;
    postId: string;
  };
};

export const postComment = async ({ props }: PostCommentType) => {
  await prisma?.comment.create({
    data: {
      comment: props.comment,
      authorId: props.authorId,
      postId: props.postId,
    },
  });

  revalidatePath(`/post/${props.postId}`);
};
