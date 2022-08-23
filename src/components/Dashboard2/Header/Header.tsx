import gsap from "gsap";
import React, { useEffect, useRef } from "react";
import { AiOutlineDesktop } from "react-icons/ai";
import { FaBars } from "react-icons/fa";
import { RiNotification2Line, RiUser6Line } from "react-icons/ri";
import { Tooltip } from "react-tippy";
import { useHeaderHeight, useSideNav } from "../../../jotai";

function Header() {
  const [sideNav, setSideNav] = useSideNav();
  const [headerHeight, setHeaderHeigth] = useHeaderHeight();

  const header = useRef<any>(null);
  let logoText: any = "MaxBlast";

  useEffect(() => {
    setHeaderHeigth(
      header.current.clientHeight === 0 ? 90 : header.current.clientHeight,
    );

    gsap.timeline().to(".__header", {
      y: 0,
      duration: 0.6,
      ease: "back",
    });
  }, []);

  function handleClick() {
    setSideNav((prev) => !prev);
  }

  return (
    <header
      ref={header}
      className="bg-primary2 flex items-center justify-between sticky top-0 left-0 z-50 -translate-y-full __header"
    >
      <div className="flex items-center gap-6 pl-4 sm:pl-0">
        <button
          onClick={handleClick}
          className="text-3xl text-white/60 py-4 hidden sm:block"
        >
          <p className="px-4 py-4">
            <FaBars />
          </p>
        </button>
        <a className="logo-text font-medium text-3xl" href="#">
          {[...logoText].map((letter, i) => (
            <span key={i}>{letter}</span>
          ))}
        </a>
      </div>
      {/*  */}
      <div>
        <Tooltip
          title="View website"
          position="bottom"
          trigger="mouseenter"
          arrow
        >
          <button className="text-2xl sm:text-3xl text-white/40 py-4 px-2">
            <p className="px-3 py-3 bg-white/10 rounded-full shadow">
              <AiOutlineDesktop />
            </p>
          </button>
        </Tooltip>

        <Tooltip
          title="View notification"
          position="bottom"
          trigger="mouseenter"
          arrow
        >
          <button className="text-2xl sm:text-3xl text-white/40 py-4 px-2">
            <p className="px-3 py-3 bg-white/10 rounded-full shadow relative">
              <RiNotification2Line />

              <span className="absolute top-0 -right-1 bg-white text-sm h-5 text-black/60 flex items-center justify-center aspect-square rounded-full">
                2
              </span>
              <span className="absolute top-0 left-0 w-full h-full rounded-full border-4 animate-ping scale-50"></span>
            </p>
          </button>
        </Tooltip>

        <Tooltip
          title="View profile"
          position="bottom"
          trigger="mouseenter"
          arrow
        >
          <button className="text-2xl sm:text-3xl text-white/40 py-4 px-2">
            <p className="px-3 py-3 bg-white/10 rounded-full shadow">
              <RiUser6Line />
            </p>
          </button>
        </Tooltip>
      </div>
    </header>
  );
}

export default Header;
