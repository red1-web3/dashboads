import React from "react";

function SidebarMessage() {
  return (
    <article className="font-poppins bg-white mx-5 py-3 space-y-2 rounded-lg shadow-xl">
      <h6 className="px-5 font-semibold text-slate-700">Board meeting</h6>
      <div className="flex items-center px-3 gap-2">
        <span className="h-2.5 aspect-square bg-primary1 rounded-full"></span>
        <p className="text-slate-500 text-sm">Feb 22 ar 6:00 pm</p>
      </div>
      <p className="text-slate-400 text-xs px-5">
        You have been invited to attend a meeting of the Board Directors
      </p>
    </article>
  );
}

export default SidebarMessage;
