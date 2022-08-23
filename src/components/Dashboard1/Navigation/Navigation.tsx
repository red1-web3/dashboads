import classNames from "classnames";
import React from "react";
import { navButtons } from "../../../constant";
import { FiChevronLeft, FiChevronRight } from "react-icons/fi";
import { useActivenav, useMegaNav } from "../../../jotai";

function Navigation() {
  const [activeNav, setActiveNav] = useActivenav();
  const [megaNav, setMegaNav] = useMegaNav();
  return (
    <nav className="space-y-12">
      <a
        href="#"
        className="p-5 font-yanone font-bold text-2xl text-center block tracking-wide text-slate-50 lowercase"
      >
        dapper
      </a>

      <ul>
        {navButtons.map(({ icon, text }, i) => (
          <li
            onClick={() => setActiveNav(i)}
            key={i}
            className={classNames(
              "pr-5 pl-7 py-4 cursor-pointer transition-all duration-200 overflow-hidden",
              navButtons.length === i + 1 &&
                "absolute bottom-0 left-1/2 -translate-x-[50%] rounded-b-xl pb-6 w-full",
              activeNav === i && "border-l-[4px] border-slate-50",
              megaNav && "hover:bg-indigo-700/30 block",
            )}
          >
            <button className="text-3xl text-slate-200 flex items-center gap-6">
              <div className="">
                <span className="">{icon} </span>
              </div>
              {megaNav && <span className="!text-base">{text}</span>}
            </button>
          </li>
        ))}
      </ul>

      <button
        onClick={() => setMegaNav((prev) => !prev)}
        className="absolute top-10 -right-3 text-primary1 bg-slate-50 text-xl rounded-full p-1 shadow"
      >
        {megaNav ? <FiChevronLeft /> : <FiChevronRight />}
      </button>
    </nav>
  );
}

export default Navigation;
