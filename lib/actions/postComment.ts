"use server";

import { revalidatePath } from "next/cache";

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
