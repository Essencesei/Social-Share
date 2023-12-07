"use server";

import { revalidatePath } from "next/cache";
import { utapi } from "../uploadthing/utapi";
import { FileKeyType } from "@/components/feed/FeedHeaderOptions";

export const deletePost = async (postId: string, filekey?: FileKeyType[]) => {
  try {
    if (filekey && filekey.length > 0) {
      filekey?.forEach(async (key: FileKeyType) => {
        await utapi.deleteFiles(key?.key);
      });
    }

    await prisma?.post.delete({
      where: { id: postId },
    });
    revalidatePath("/feed");
  } catch (error) {
    const result = (error as Error).message;
    console.log(result);
  }
};
