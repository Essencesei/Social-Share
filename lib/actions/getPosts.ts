export const getPosts = async () => {
  const data = await prisma?.post.findMany({
    include: { comments: true, likes: true, author: true },
    orderBy: { createdAt: "desc" },
  });

  return data;
};
