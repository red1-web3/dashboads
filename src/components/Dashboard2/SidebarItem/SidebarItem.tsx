import classNames from "classnames";
import React, { useState } from "react";
import { BsChevronDown, BsChevronLeft } from "react-icons/bs";
import { navItems2Data, NavItems2Data } from "../../../constant";
import Collapsible from "react-collapsible";

type SidebarItemProps = {
  isSublink?: boolean;
  index?: any;
} & NavItems2Data;

function SidebarItem({
  icon,
  text,
  subLink,
  isSublink,
  index,
}: SidebarItemProps) {
  const [showSublink, setShowSublink] = useState<boolean>(false);

  function handleClick() {
    if (!subLink) return;

    setShowSublink((prev) => !prev);
  }

  return (
    <li
      className={classNames(
        "select-none cursor-pointer",
        !isSublink ? "border-b border-white/20 py-3.5" : "py-1",
        navItems2Data.length === index + 1 && "!border-none",
      )}
    >
      <div
        onClick={handleClick}
        className={classNames(
          subLink && "flex justify-between items-center",
          "liElement",
        )}
      >
        <button className="group-hover:text-white/70 text-white/50 flex items-center gap-5">
          <span
            className={classNames(isSublink ? "text-[24px]" : "text-[28px]")}
          >
            {icon}
          </span>
          <span className="text-lg capitalize">{text}</span>
        </button>
        {subLink && (
          <button className="group-hover:text-white/70 text-white/50">
            {showSublink ? <BsChevronDown /> : <BsChevronLeft />}
          </button>
        )}
      </div>

      {subLink && (
        <Collapsible trigger="" open={showSublink}>
          <ul className={classNames("pl-6 transition-all duration-500 mt-3")}>
            {subLink.map((subItem, i) => (
              <SidebarItem {...subItem} key={i} isSublink />
            ))}
          </ul>
        </Collapsible>
      )}
    </li>
  );
}
export default SidebarItem;
