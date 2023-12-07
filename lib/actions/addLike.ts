"use server";

import { revalidatePath } from "next/cache";

export const addLike = async (postId: string, likersId: string) => {
  try {
    await prisma?.like.create({
      data: {
        likersId: likersId,
        postId: postId,
      },
    });
    revalidatePath("/feed");
  } catch (error) {
    revalidatePath("/feed");
  }
};
