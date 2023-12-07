"use server";

import { PrismaClient } from "@prisma/client";

const prisma = new PrismaClient();
export const getPosts = async () => {
  const data = await prisma?.post.findMany({
    include: { comments: true, likes: true, author: true },
    orderBy: { createdAt: "desc" },
  });

  return data;
};
