import React from "react";
import { postItemData } from "../../../constant";
import PostItem from "../PostItem";

function StatisticsPosts() {
  return (
    <div className="__parentStyle w-full">
      <p className="__pElement">posts statisticss</p>

      <div className="py-10">
        {postItemData.map((postItem, i) => (
          <PostItem message {...postItem} key={i} />
        ))}
      </div>
    </div>
  );
}

export default StatisticsPosts;
