import React from "react";
import { BottomButtons } from "../../../constant";
import "react-tippy/dist/tippy.css";
import { Tooltip } from "react-tippy";

function BottomButton({ icon, message, hoverText }: BottomButtons) {
  return (
    <li className="relative" data-tip={hoverText}>
      <Tooltip title={hoverText} position="bottom" trigger="mouseenter" arrow>
        <button className="text-[28px] text-white/50">{icon}</button>
        {message && (
          <span className="absolute -top-2.5 -right-2.5 bg-white text-sm h-5 text-black/60 flex items-center justify-center aspect-square rounded-full">
            2
          </span>
        )}
      </Tooltip>
    </li>
  );
}

export default BottomButton;
