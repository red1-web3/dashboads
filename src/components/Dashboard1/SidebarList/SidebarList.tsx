import React from "react";
import { todoListData } from "../../../constant";

function SidebarList() {
  return (
    <div className="px-5 !mt-6 font-poppins space-y-5 transition-all duration-200">
      <h4 className="font-semibold text-xl text-slate-700">Your to-Do list</h4>

      <ul className="space-y-5">
        {todoListData.map(({ date, icon, title }, i) => (
          <li key={i} className="flex gap-5 items-center">
            <span className="text-3xl p-1.5 bg-slate-300/60 text-slate-700 rounded-2xl">
              {icon}
            </span>
            <div>
              <h6 className="text-sm font-semibold text-slate-700">{title}</h6>
              <p className="text-xs font-normal text-slate-400">{date}</p>
            </div>
          </li>
        ))}
      </ul>
    </div>
  );
}

export default SidebarList;
