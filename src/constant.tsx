import { ReactNode } from "react";
import {
  BiCalendarMinus,
  BiCategoryAlt,
  BiHomeHeart,
  BiMessage,
  BiMessageRoundedEdit,
  BiMessageSquareDots,
} from "react-icons/bi";
import { TbBrandHtml5, TbNotes, TbReportAnalytics } from "react-icons/tb";
import { CgNotes } from "react-icons/cg";
import {
  AiOutlineClockCircle,
  AiOutlineCloudServer,
  AiOutlineSetting,
} from "react-icons/ai";
import {
  IoHomeOutline,
  IoMailOutline,
  IoNotificationsOutline,
  IoSettingsOutline,
} from "react-icons/io5";
import {
  BsBook,
  BsCalendar2Day,
  BsCloudCheck,
  BsFilePost,
  BsHourglass,
} from "react-icons/bs";
import { RiMoneyCnyCircleLine, RiUserSharedLine } from "react-icons/ri";
import { IoMdImages } from "react-icons/io";
import { FaRegComments } from "react-icons/fa";
import { VscSignOut, VscVersions } from "react-icons/vsc";
import { GiSkills, GiSpiderWeb } from "react-icons/gi";
import { FiDatabase } from "react-icons/fi";
import { type } from "os";

// !Dashboard 1
type NavButtons = {
  text: string;
  icon: ReactNode;
};
type Icons = {
  icon: ReactNode;
};

type UserProfileItems = {
  icon: ReactNode;
};
type TodoList = {
  title: string;
  date: string;
  icon: ReactNode;
};

export const navButtons: NavButtons[] = [
  {
    text: "Home",
    icon: <BiHomeHeart />,
  },
  {
    text: "Analytics",
    icon: <TbReportAnalytics />,
  },
  {
    text: "Message",
    icon: <BiMessageRoundedEdit />,
  },
  {
    text: "Today",
    icon: <BsCalendar2Day />,
  },
  {
    text: "Users",
    icon: <RiUserSharedLine />,
  },
  {
    text: "Notes",
    icon: <CgNotes />,
  },
  {
    text: "Revenue",
    icon: <RiMoneyCnyCircleLine />,
  },
  {
    text: "Setting",
    icon: <IoSettingsOutline />,
  },
];

export const Char1data = [
  {
    month: "Dec 22",
    money: "10k",
    last: 5,
    prior: 30,
  },
  {
    month: "Dec 23",
    money: "15k",
    last: 45,
    prior: 20,
  },
  {
    month: "Dec 24",
    money: "20k",
    last: 25,
    prior: 45,
  },
  {
    month: "Dec 25",
    money: "25k",
    last: 20,
    prior: 34,
  },
  {
    month: "Dec 26",
    money: "30k",
    last: 60,
    prior: 28,
  },
  {
    month: "Dec 27",
    money: "35k",
    last: 70,
    prior: 55,
  },
];

export const userProfileItems: UserProfileItems[] = [
  {
    icon: <BiMessageSquareDots />,
  },
  {
    icon: <IoNotificationsOutline />,
  },
  {
    icon: <BiCalendarMinus />,
  },
];
export const todoListData: TodoList[] = [
  {
    title: "Run payroll",
    date: "Mar 7 at 6:00 pm",
    icon: <TbBrandHtml5 />,
  },
  {
    title: "Review time of request",
    date: "Apr 7 at 6:00 pm",
    icon: <AiOutlineClockCircle />,
  },
  {
    title: "Sign board resulation",
    date: "May 7 at 6:00 pm",
    icon: <TbNotes />,
  },
  {
    title: "Finish onboardin Tony",
    date: "Jun 7 at 6:00 pm",
    icon: <BsCloudCheck />,
  },
];

// Dashboard2
export type NavItems2Data = {
  icon: ReactNode;
  text: string;
  subLink?: NavItems2Data[];
};
export type BottomButtons = {
  icon: ReactNode;
  message?: boolean;
  hoverText: string;
};
export type TopChartsProps = {
  number: number;
  day: string;
};
export type TopChartsData = {
  line1: number;
  line2: number;
};
export type BarChartData = {
  range: number;
  month: string;
};
export type PostItem = {
  icon: ReactNode;
  text: string;
  limit?: number;
  text2?: string;
};

export const navItems2Data: NavItems2Data[] = [
  {
    icon: <IoHomeOutline />,
    text: "Dashboard",
  },
  {
    icon: <CgNotes />,
    text: "blog",
    subLink: [
      {
        icon: <BsFilePost />,
        text: "post",
      },
      {
        icon: <BiCategoryAlt />,
        text: "category",
      },
      {
        icon: <FaRegComments />,
        text: "commments",
      },
    ],
  },
  {
    icon: <IoMdImages />,
    text: "images",
  },
  {
    icon: <BsBook />,
    text: "pages",
  },
  {
    icon: <AiOutlineSetting />,
    text: "settings",
  },
];
export const bottomButtons: BottomButtons[] = [
  { icon: <IoHomeOutline />, hoverText: "Home" },
  { icon: <BiMessage />, message: true, hoverText: "Message" },
  { icon: <IoMailOutline />, hoverText: "Mail" },
  { icon: <VscSignOut />, hoverText: "Sign out" },
];
export const topChartsData: TopChartsData[] = [
  {
    line1: 20,
    line2: 20,
  },
  {
    line1: 53,
    line2: 42,
  },
  {
    line1: 64,
    line2: 72,
  },
  {
    line1: 18,
    line2: 43,
  },
  {
    line1: 34,
    line2: 37,
  },
  {
    line1: 21,
    line2: 41,
  },
  {
    line1: 43,
    line2: 33,
  },
  {
    line1: 56,
    line2: 81,
  },
  {
    line1: 36,
    line2: 43,
  },
  {
    line1: 100,
    line2: 100,
  },
];
export const topChartsText: TopChartsProps[] = [
  {
    day: "Today",
    number: 200,
  },
  {
    day: "Week",
    number: 2000,
  },
  {
    day: "Month",
    number: 5000,
  },
  {
    day: "Year",
    number: 10000,
  },
];
export const barChartData: BarChartData[] = [
  {
    range: 10000,
    month: "Today",
  },
  {
    range: 10000,
    month: "Yesterday",
  },
  {
    range: 10000,
    month: "Week",
  },
  {
    range: 10000,
    month: "L.Week",
  },
  {
    range: 150000,
    month: "L.Month",
  },
  {
    range: 200000,
    month: "Year",
  },
  {
    range: 220000,
    month: "L.Year",
  },
  {
    range: 400000,
    month: "Total",
  },
];
export const postItemData: PostItem[] = [
  {
    icon: <BsFilePost />,
    limit: 20,
    text: "post",
  },
  {
    icon: <GiSkills />,
    limit: 11,
    text: "portfolio",
  },
  {
    icon: <FaRegComments />,
    limit: 120,
    text: "comments",
  },
  {
    icon: <BiMessage />,
    limit: 67,
    text: "messages",
  },
];
export const serverInfoData: PostItem[] = [
  {
    icon: <AiOutlineCloudServer />,
    text: "server operating:",
    text2: "Linux Debian",
  },
  { icon: <VscVersions />, text: "php version:	", text2: "7.4" },
  { icon: <FiDatabase />, text: "database version:	", text2: "5.3" },
  { icon: <GiSpiderWeb />, text: "web server:	", text2: "Apache" },
  { icon: <BsHourglass />, text: "server hours:	", text2: "10:30" },
];
