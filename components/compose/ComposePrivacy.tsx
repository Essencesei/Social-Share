"use client";
import React, { useState } from "react";
import { Toggle } from "../ui/toggle";
import { MdOutlinePublic } from "react-icons/md";
import { FaLock } from "react-icons/fa6";
import { buttonVariants } from "../ui/button";

type ComposePrivacyProps = {
  handlePrivacy: (privay: boolean) => void;
};

const ComposePrivacy = ({ handlePrivacy }: ComposePrivacyProps) => {
  const [isPrivate, seIsPrivate] = useState(true);
  return (
    <Toggle
      className="h-12 w-12 p-4"
      onClick={() => {
        seIsPrivate((prev) => !prev);
        handlePrivacy(isPrivate);
      }}
    >
      {isPrivate ? <MdOutlinePublic /> : <FaLock />}
    </Toggle>
  );
};

export default ComposePrivacy;
