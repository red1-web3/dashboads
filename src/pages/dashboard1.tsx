import React, { useEffect, useState } from "react";
import Navigation from "../components/Dashboard1/Navigation";
import ThreeButton from "../components/MacButtons";
import SidebarProfile from "../components/Dashboard1/SidebarProfile";
import SidebarModal from "../components/Dashboard1/SidebarModal";
import SidebarList from "../components/Dashboard1/SidebarList";
import {
  BsChevronDown,
  BsChevronLeft,
  BsChevronRight,
  BsCreditCard,
} from "react-icons/bs";
import SmallModal from "../components/Dashboard1/SmallModal";
import { FaBalanceScaleRight } from "react-icons/fa";
import { GiExtraTime } from "react-icons/gi";
import { IoMdClose } from "react-icons/io";
import { AiOutlineAccountBook } from "react-icons/ai";
import { useMegaNav } from "../jotai";
import classNames from "classnames";
import LineBarAreaComposedChart from "../components/Dashboard1/Charts/index";
import RecentEmail from "../components/Dashboard1/RecentEmail";
import SidebarMessage from "../components/Dashboard1/SidebarMessage";

function Dashboard() {
  const [megaNav, setMegaNav] = useMegaNav();
  const [showAside, setShowAside] = useState(false);

  return (
    <>
      <div className="min-h-screen bg-slate-100 w-[full] p-5 shadow-lg border border-slate-200/40 rounded">
        <div className="space-y-6 h-full relative">
          <ThreeButton />
          <main className={classNames("h-full gap-6 flex")}>
            <div
              className={classNames(
                "bg-primary1 rounded-xl pt-3 shadow-md lg:h-screen relative transition-all duration-200 shrink-0 h-auto",
                megaNav ? "w-[230px]" : "w-[90px]",
              )}
            >
              <Navigation />
            </div>
            <div className="px-3 space-y-8 flex-grow">
              {/* Header --Start-- */}
              <div className="flex justify-between items-center">
                <h2 className="text-slate-700 font-bold md:text-3xl lg:text-4xl">
                  Good evening, Greg!
                </h2>
                <div className="space-x-3 text-slate-700 hidden lg:block">
                  <button>
                    <BsChevronLeft />
                  </button>
                  <button>
                    <BsChevronRight />
                  </button>
                </div>

                <button
                  onClick={() => setShowAside((prev) => !prev)}
                  className="lg:hidden"
                >
                  <BsChevronDown size={20} />
                </button>
              </div>
              {/* Header --End-- */}

              <div
                className="grid md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-5
            "
              >
                <SmallModal
                  price="$143,624"
                  text="Your bank balance in this company"
                  icon={<FaBalanceScaleRight />}
                />
                <SmallModal
                  price="436 hr"
                  text="Time worked in this month"
                  icon={<GiExtraTime />}
                />
                <SmallModal
                  price="7"
                  text="Employees working today"
                  icon={<AiOutlineAccountBook />}
                />
                <SmallModal
                  price="$3,624"
                  text="This week's card spending"
                  icon={<BsCreditCard />}
                />
              </div>

              {/* Middle Charts And Cards --Start-- */}
              <div className="grid md:grid-cols-1 lg:grid-cols-[200px,auto] gap-5 items-center font-poppins">
                {/* Cards --Start-- */}
                <div className="space-y-5 h-full flex md:flex-row md:gap-5 lg:gap-0  lg:flex-col">
                  <div className="rounded-xl bg-white shadow-xl py-4 px-7 lg:w-auto md:w-[50%] space-y-3 grow">
                    <p className="text-lg font-semibold text-slate-800">
                      New frequenter
                    </p>
                    <div className="flex justify-between items-center">
                      <span className="text-5xl text-slate-700 font-bold">
                        51
                      </span>

                      <p className="bg-green-400/20 px-2 py-0.5 flex items-center rounded-md text-xs  tracking-wider text-green-600">
                        <span> +</span> <span>18.7%</span>
                      </p>
                    </div>
                  </div>
                  <div className="rounded-xl bg-white shadow-xl py-4 px-7 lg:w-auto md:w-[50%] space-y-3 grow md:h-full lg:h-auto lg:translate-y-0 md:-translate-y-[20px]">
                    <p className="text-lg font-semibold text-slate-800">
                      New tasks
                    </p>
                    <div className="flex justify-between items-center">
                      <span className="text-5xl text-slate-700 font-bold">
                        11
                      </span>

                      <p className="bg-red-400/20 flex items-center px-2 py-0.5 rounded-md text-xs tracking-wider text-red-600">
                        <span>-</span> <span>2.1%</span>
                      </p>
                    </div>
                  </div>
                </div>
                {/* Cards --End-- */}
                {/* Charts --Start-- */}
                <div className="py-4 bg-white rounded-xl shadow-xl">
                  <div className="font-poppins flex items-center justify-between pb-2 px-5">
                    <p className="text-xl text-slate-700 font-semibold">
                      Revenue
                    </p>
                    <p className="text-base font-medium text-slate-600">
                      Last 7 days Vs Prior Week
                    </p>
                  </div>
                  <div className="flex justify-start">
                    <LineBarAreaComposedChart />
                  </div>
                </div>

                {/* Charts --End-- */}
              </div>
              {/* Middle Charts And Cards --End-- */}

              {/* Reent email --Start-- */}
              <RecentEmail />
              {/* Reent email --End-- */}
            </div>
            <div
              className={classNames(
                "absolute h-auto right-0 top-6 lg:relative lg:right-0 lg:top-0 bg-slate-200 lg:bg-slate-200/70 rounded-xl lg:flex flex-col justify-between shadow-md py-5 space-y-3 w-[300px] shrink-0",
                showAside ? "top-6" : "-top-full",
              )}
            >
              <div>
                <SidebarProfile />
                <SidebarModal />
                <SidebarList />
              </div>

              <SidebarMessage />

              <button
                className="absolute top-2 left-3 text-slate-800 block lg:hidden"
                onClick={() => setShowAside(false)}
              >
                <IoMdClose size={20} />
              </button>
            </div>
          </main>
        </div>
      </div>
    </>
  );
}

export default Dashboard;
