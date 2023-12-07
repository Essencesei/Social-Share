import React from "react";
import dynamic from "next/dynamic";

import { getPosts } from "@/lib/actions/getPosts";
import { authOptions } from "@/lib/nextauth/authOptions";
import { getServerSession } from "next-auth";

const DynamicCompose = dynamic(() => import("@/components/shared/Compose"));
const DynamicFeedCard = dynamic(() => import("@/components/feed/FeedCard"));

const Feed = async () => {
  const session = await getServerSession(authOptions);
  const posts = await getPosts();

  return (
    <section className="m-2 mr-[23.2rem] flex w-full flex-col gap-2">
      {posts && (
        <>
          <DynamicCompose
            composeType="POST"
            props={{
              session: session,
            }}
          />
          <DynamicFeedCard feedType="FEED" props={posts} session={session} />
        </>
      )}
    </section>
  );
};

export default Feed;
