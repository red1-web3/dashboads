import React from "react";
import { userProfileItems } from "../../../constant";
import Image from "next/image";
import { FiChevronDown, FiChevronUp } from "react-icons/fi";
import { useModal } from "../../../jotai";

function SiderbarProfile() {
  const [modal, setModal] = useModal();
  return (
    <div className="flex items-center gap-4 justify-end px-5">
      <ul className="flex gap-4">
        {userProfileItems.map(({ icon }, i) => (
          <li className="cursor-pointer" key={i}>
            <button className="text-2xl text-slate-700">{icon}</button>
          </li>
        ))}
      </ul>
      <div className="flex gap-2 items-center cursor-pointer">
        <div>
          <Image
            className="rounded-full"
            src={"/bil.jpg"}
            width={40}
            height={40}
          />
        </div>

        <span
          onClick={() => setModal((modal) => !modal)}
          className="text-[22px] text-slate-700"
        >
          {modal ? <FiChevronUp /> : <FiChevronDown />}
        </span>
      </div>
    </div>
  );
}

export default SiderbarProfile;
