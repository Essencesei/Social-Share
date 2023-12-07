"use server";
import { Prisma } from "@prisma/client";
import { revalidatePath } from "next/cache";
import { PrismaClient } from "@prisma/client";

const prisma = new PrismaClient();

type postPostProps = {
  props: Prisma.PostGetPayload<{
    select: {
      authorId: true;
      description: true;
      image?: true;
      video?: true;
      isPrivate: true;
    };
  }>;
};

export const postPost = async ({ props }: postPostProps) => {
  await prisma?.post.create({
    data: {
      description: props.description,
      authorId: props.authorId,
      image: props.image!,
      video: props.video!,
      isPrivate: props.isPrivate,
    },
  });
  revalidatePath("/feed");
};
