"use server";

import { redirect } from "next/navigation";

export const getSinglePost = async (postId: string) => {
  try {
    const post = await prisma?.post.findFirst({
      where: { id: postId },
      include: {
        comments: {
          include: { author: { select: { name: true, image: true } } },
        },
        likes: true,
        author: true,
      },
    });

    return post;
  } catch (error) {
    const result = (error as Error).message;
    console.error(result);
    redirect("/feed");
  }
};
