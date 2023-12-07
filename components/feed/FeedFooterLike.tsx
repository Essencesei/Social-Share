"use client";
import React, { useOptimistic, useTransition } from "react";
import { Button } from "../ui/button";
import { addLike } from "@/lib/actions/addLike";
import { AiFillLike } from "react-icons/ai";
import { Prisma } from "@prisma/client";

type FeedFooterLikeProps = {
  props: {
    postId: string;
    likerId: string;
    likes: Prisma.LikeGetPayload<{}>[];
  };
};

type OptimisticLikeType = Prisma.LikeGetPayload<{}>;

const FeedFooterLike = ({ props }: FeedFooterLikeProps) => {
  const [isLoading, startTransiton] = useTransition();
  const [optimisticLike, addOptimisticLike] = useOptimistic(
    props.likes,
    (state, newLike: OptimisticLikeType) => [...state, newLike],
  );
  return (
    <>
      <Button
        onClick={() => {
          startTransiton(async () => {
            addOptimisticLike({
              likersId: props.likerId,
              postId: props.postId,
              id: crypto.randomUUID.toString(),
              createdAt: new Date(Date.now()),
              updatedAt: new Date(Date.now()),
            });

            await addLike(props.postId, props.likerId);
          });
        }}
      >
        Like
      </Button>
      <p className="flex items-center gap-2 text-sm">
        <AiFillLike />
        {optimisticLike.length}
      </p>
    </>
  );
};

export default FeedFooterLike;
