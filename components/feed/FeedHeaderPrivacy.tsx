import React from "react";
import { FaLock } from "react-icons/fa6";
import { MdOutlinePublic } from "react-icons/md";

type FeedHeaderPrivacyProps = {
  props: {
    isPrivate: boolean;
  };
};
const FeedHeaderPrivacy = ({ props }: FeedHeaderPrivacyProps) => {
  return <>{props.isPrivate ? <FaLock /> : <MdOutlinePublic />}</>;
};

export default FeedHeaderPrivacy;
