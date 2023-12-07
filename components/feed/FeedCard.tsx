// "use client";
import React, { useContext } from "react";
import { Card, CardContent, CardFooter, CardHeader } from "../ui/card";
import FeedHeader from "./FeedHeader";
import FeedContent from "./FeedContent";

import { Prisma } from "@prisma/client";
import Link from "next/link";
import FeedFooterLike from "./FeedFooterLike";
import { Session } from "next-auth";

type FeedCardProps = {
  session: Session | null;
  feedType: string;
  props:
    | Array<
        Prisma.PostGetPayload<{
          include: { comments: true; likes: true; author: true };
        }>
      >
    | Prisma.PostGetPayload<{
        include: { comments: true; likes: true; author: true };
      }>
    | undefined;
};

const FeedCard = ({ props, session }: FeedCardProps) => {
  return (
    <>
      {Array.isArray(props) ? (
        <>
          {props.map((prop) => {
            return (
              <Card key={prop.id}>
                <CardHeader>
                  <FeedHeader
                    props={{
                      author: prop?.author!,
                      createdAt: prop?.createdAt!,
                      id: prop.id,
                      image: prop.image,
                      video: prop.video,
                      isPrivate: prop.isPrivate,
                    }}
                  />
                </CardHeader>
                <Link href={`/post/${prop.id}`}>
                  <CardContent>
                    <FeedContent
                      props={{
                        description: prop?.description!,
                        image: prop.image,
                        video: prop.video,
                      }}
                    />
                  </CardContent>
                </Link>
                <CardFooter className="flex gap-4">
                  <FeedFooterLike
                    props={{
                      likes: prop.likes,
                      postId: prop.id,
                      likerId: session?.user.id as string,
                    }}
                  />
                </CardFooter>
              </Card>
            );
          })}
        </>
      ) : (
        <Card key={props?.id} className="flex-1">
          <CardHeader>
            <FeedHeader
              props={{
                author: props?.author!,
                createdAt: props?.createdAt!,
                id: props?.id!,
                image: props?.image!,
                video: props?.video!,
                isPrivate: props?.isPrivate!,
              }}
            />
          </CardHeader>
          <CardContent>
            <FeedContent
              feedType="POST"
              props={{
                description: props?.description!,
                image: props?.image!,
                video: props?.video!,
              }}
            />
          </CardContent>
          <CardFooter></CardFooter>
        </Card>
      )}
    </>
  );
};

export default FeedCard;
