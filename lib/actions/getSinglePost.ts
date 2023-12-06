"use server";

export const getSinglePost = async (postId: string) => {
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
};
