import classNames from "classnames";
import React from "react";
import { bottomButtons, navItems2Data } from "../../../constant";
import { useHeaderHeight, useSideNav } from "../../../jotai";
import BottomButton from "../BottomButton";
import SidebarItem from "../SidebarItem";

function Nav() {
  const [sideNav] = useSideNav();
  const [headerHeight, setHeaderHeight] = useHeaderHeight();

  return (
    <nav
      style={{ height: `calc(100vh - ${headerHeight}px)` }}
      className={classNames(
        "relative bg-[#222222] shrink duration-100",
        sideNav
          ? "w-0 py-3 overflow-hidden"
          : "w-[280px] px-5 py-3 overflow-auto",
      )}
    >
      <ul>
        {navItems2Data.map((navItem, i) => (
          <SidebarItem {...navItem} key={i} index={i} />
        ))}
      </ul>

      <ul className="absolute bottom-0 left-0 flex items-center justify-around py-3.5 w-full border-t border-white/20">
        {bottomButtons.map((bottomButton, i) => (
          <BottomButton key={i} {...bottomButton} />
        ))}
      </ul>
    </nav>
  );
}

export default Nav;
