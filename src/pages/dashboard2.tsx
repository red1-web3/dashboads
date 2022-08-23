import React from "react";
import BarChartModal from "../components/Dashboard2/BarChart";
import Header from "../components/Dashboard2/Header";
import Nav from "../components/Dashboard2/Nav";
import PeopleOnline from "../components/Dashboard2/PeopleOnline";
import TopCharts from "../components/Dashboard2/RechartJs/TopCharts";
import ServerInfo from "../components/Dashboard2/ServerInfo";
import StatisticsPosts from "../components/Dashboard2/StatisticsPosts";
import { topChartsText } from "../constant";
import { useHeaderHeight } from "../jotai";
import PieChartModal from "../components/Dashboard2/PieChart/PieChartModal";
import VisitorStatistics from "../components/Dashboard2/VisitorStatistics";
import RecentPostAndCommments from "../components/Dashboard2/RecentPostAndCommments";

function dashboard2() {
  const [headerHeight] = useHeaderHeight();
  return (
    <>
      <div className="overflow-hidden h-screen">
        <Header />
        <div className="flex font-lato">
          <Nav />
          <div
            style={{ height: `calc(100vh - ${headerHeight}px)` }}
            className="grow bg-slate-50 px-16 py-[72px] space-y-16 overflow-y-auto"
          >
            <section className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
              {topChartsText.map((item, i) => (
                <TopCharts {...item} key={i} />
              ))}
            </section>
            <section className="grid md:grid-cols-1 lg:grid-cols-[45%,55%] gap-10">
              <BarChartModal />
              <div className="flex flex-col md:flex-row gap-10 w-full grow">
                <StatisticsPosts />
                <PeopleOnline />
              </div>
            </section>
            <section className="grid md:grid-cols-1 lg:grid-cols-[66%,auto] gap-10">
              <div className="flex gap-10 flex-col md:flex-row">
                <ServerInfo />
                <PieChartModal />
              </div>
              <VisitorStatistics />
            </section>

            <section className="grid md:grid-cols-1 lg:grid-cols-2 gap-10">
              <RecentPostAndCommments title="recent posts" />
              <RecentPostAndCommments title="recent comments" />
            </section>
            <a
              href="https://www.facebook.com/redsam.23"
              className="text-center text-xl text-black/80 font-semibold block !-mb-5 underline"
            >
              Design Made by Red1✌
            </a>
          </div>
        </div>
      </div>
    </>
  );
}

export default dashboard2;
