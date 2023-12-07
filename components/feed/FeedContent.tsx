import React, { useContext } from "react";
import Image from "next/image";
import { Prisma } from "@prisma/client";
import { VideoData } from "../compose/ComposeVideo";
import { ImageData } from "../compose/ComposeImage";

type FeedContentProps = {
  feedType?: string;
  props: Prisma.PostGetPayload<{
    select: { description: true; image?: true; video?: true };
  }>;
};

const FeedContent = ({ props, feedType }: FeedContentProps) => {
  const image: ImageData = JSON.parse(props.image as string);
  const video: VideoData = JSON.parse(props.video as string);
  return (
    <>
      <p className="whitespace-pre-wrap py-4">{props.description}</p>
      {image && (
        <div className="relative h-[500px] w-full">
          <Image
            src={image.url}
            alt={"Image"}
            width={feedType === "POST" ? 1000 : 400}
            height={feedType === "POST" ? 1000 : 400}
            className={`aspect-square h-full w-full border ${
              feedType === "POST" ? "object-contain" : " object-cover"
            }`}
          ></Image>
        </div>
      )}
      {video && (
        <video
          src={video.url}
          controlsList="no download"
          controls
          className="aspect-video"
        ></video>
      )}
    </>
  );
};

export default FeedContent;
