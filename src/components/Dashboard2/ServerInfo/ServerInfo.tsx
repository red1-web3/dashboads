import React from "react";
import { serverInfoData } from "../../../constant";
import PostItem from "../PostItem";

function ServerInfo() {
  return (
    <div className="__parentStyle w-full">
      <p className="__pElement">server information</p>
      <div className="py-10">
        {serverInfoData.map((infoData, i) => (
          <PostItem {...infoData} message={false} key={i} />
        ))}
      </div>
    </div>
  );
}

export default ServerInfo;
