import React from "react";
import { PostItem } from "../../../constant";

type PostItemsAndProps = {
  message: boolean;
  text2?: string;
} & PostItem;

function PostItemFunc({
  icon,
  limit,
  text,
  message,
  text2,
}: PostItemsAndProps) {
  return (
    <div className="py-2 px-7 cursor-pointer">
      <div className="flex items-center justify-between border-b border-[rgba(0,0,0,0.1)] pb-3">
        <div className="flex items-center gap-4">
          <span className="text-black/40 text-3xl">{icon}</span>
          <p className="capitalize text-base font-medium text-black/40">
            {text}
          </p>
        </div>
        {message ? (
          <div className="text-sm text-white/90 bg-primary2 font-medium px-2 py-1 rounded-full flex items-center justify-center">
            {limit}
          </div>
        ) : (
          <p className="capitalize text-base font-medium text-black/40">
            {text2}
          </p>
        )}
      </div>
    </div>
  );
}

export default PostItemFunc;
