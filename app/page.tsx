import { deleteAll } from "@/lib/actions/deleteAll";
import React from "react";

const Landing = async () => {
  await deleteAll();
  return <div>Landing</div>;
};

export default Landing;
