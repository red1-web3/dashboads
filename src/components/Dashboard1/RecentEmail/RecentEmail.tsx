import React from "react";
import Mail from "../Mail";

function RecentEmail() {
  return (
    <div className="bg-white shadow rounded-xl backdrop-blur-3xl p-5 space-y-3 overflow-y-auto">
      <h4 className="text-lg font-semibold text-slate-800 leading-3">
        Recent emails
      </h4>

      <div className="grid grid-cols-2 gap-6">
        <Mail image="/img1.jpg" />
        <Mail image="/img2.jpg" />
        <Mail image="/img3.jpg" />
        <Mail image="/img5.jpg" />
      </div>
    </div>
  );
}

export default RecentEmail;
