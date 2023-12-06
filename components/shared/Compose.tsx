"use client";
import React, { useState } from "react";
import { Input } from "../ui/input";
import { Button } from "../ui/button";
import { Card } from "../ui/card";
import { postPost } from "@/lib/actions/postPost";
import { Session } from "next-auth";
import { IoIosSend } from "react-icons/io";
import { ImageData } from "../compose/ComposeImage";
import { VideoData } from "../compose/ComposeVideo";
// import ComposePrivacy from "./ComposePrivacy";
import dynamic from "next/dynamic";
import { postComment } from "@/lib/actions/postComment";
import { Textarea } from "../ui/textarea";

const DynamicComposeImage = dynamic(() => import("../compose/ComposeImage"));
const DynamicComposeVideo = dynamic(() => import("../compose/ComposeVideo"));
const DynamicComposePrivacy = dynamic(
  () => import("../compose/ComposePrivacy"),
);

type ComposeProps = {
  props: {
    session: Session | null;
  };
  composeType: string;
  postId?: string;
};

const Compose = ({ props, composeType, postId }: ComposeProps) => {
  const [image, setImage] = useState<ImageData | null>();
  const [video, setVideo] = useState<VideoData | null>();
  const [isPrivate, setIsPrivate] = useState<boolean>(false);
  const handleImage = (image: ImageData) => {
    setImage(image);
  };
  const handleVideo = (video: ImageData) => {
    setVideo(video);
  };
  const handlePrivacy = (isPrivate: boolean) => {
    setIsPrivate(isPrivate);
  };

  return (
    <Card className="p-4">
      <form
        action={async (formdata) => {
          const description = formdata.get("description")?.toString();

          if (composeType === "COMMENT") {
            await postComment({
              props: {
                authorId: props.session?.user.id!,
                comment: description!,
                postId: postId!,
              },
            });
          } else {
            await postPost({
              props: {
                authorId: props.session?.user.id!,
                description: description!,
                image: JSON.stringify(image),
                video: JSON.stringify(video),
                isPrivate: isPrivate as boolean,
              },
            });
            setVideo(null);
            setImage(null);
          }
        }}
        className="flex flex-col gap-2"
      >
        <span className="flex justify-between gap-4">
          <Textarea
            name="description"
            placeholder="What's on your mind?"
          ></Textarea>
          <Button type="submit">
            <IoIosSend />
          </Button>
        </span>
        {composeType === "POST" ? (
          <span className="flex gap-4">
            <DynamicComposeImage handleImage={handleImage} />
            <DynamicComposeVideo handleVideo={handleVideo} />
            <DynamicComposePrivacy handlePrivacy={handlePrivacy} />
          </span>
        ) : null}
      </form>
    </Card>
  );
};

export default Compose;
