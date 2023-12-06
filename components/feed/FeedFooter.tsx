import React from "react";
import { Button } from "../ui/button";
import { Separator } from "../ui/separator";

const FeedFooter = () => {
  return (
    <div className="flex gap-4">
      <Button>Like</Button>

      <Button>Comment</Button>
    </div>
  );
};

export default FeedFooter;
