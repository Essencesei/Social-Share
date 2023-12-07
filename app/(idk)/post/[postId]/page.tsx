import React from "react";
import FeedCard from "@/components/feed/FeedCard";
import PostCardComments from "@/components/post/PostCardComments";
import { getSinglePost } from "@/lib/actions/getSinglePost";
import { redirect } from "next/navigation";
import { getServerSession } from "next-auth";
import { authOptions } from "@/lib/nextauth/authOptions";

type PostProps = {
  params: {
    postId: string;
  };
};

const Post = async ({ params }: PostProps) => {
  const session = await getServerSession(authOptions);
  const post = await getSinglePost(params.postId);

  if (!post) redirect("/feed");

  return (
    <section className="m-2 mr-[23.2rem] flex   w-full gap-2 ">
      <FeedCard feedType="POST" props={post!} session={session} />
      <PostCardComments
        postId={params.postId}
        props={{ session: session, comments: post.comments }}
      />
    </section>
  );
};

export default Post;
