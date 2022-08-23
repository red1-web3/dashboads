import classNames from "classnames";
import React, { ReactNode, useState } from "react";
import { BsThreeDotsVertical } from "react-icons/bs";
import { IoCloseCircleOutline } from "react-icons/io5";
import { MdManageAccounts, MdPayment } from "react-icons/md";
import { RiMoneyDollarBoxLine } from "react-icons/ri";

type ModalProps = {
  text: string;
  price: string;
  icon: ReactNode;
};

function SmallModal({ icon, price, text }: ModalProps) {
  const [openModal, setOpenModal] = useState<boolean>(false);
  return (
    <div className="bg-white rounded-xl space-y-4 shadow-xl p-3 relative">
      <div className="flex justify-between items-start">
        <span className="text-4xl bg-slate-200/50 mx-3 rounded-xl text-slate-700 p-2.5">
          {icon}
        </span>
        <button
          className="p-1 translate-x-1"
          onClick={() => setOpenModal((modal) => !modal)}
        >
          {openModal ? (
            <IoCloseCircleOutline size={19} />
          ) : (
            <BsThreeDotsVertical size={19} />
          )}
        </button>
      </div>

      <div className="space-y-2 px-4">
        <h3 className="text-3xl font-semibold text-slate-700 font-poppins">
          {price}
        </h3>

        <p className="leading-5 text-sm font-poppins font-medium text-slate-700">
          {text}
        </p>
      </div>

      <ul
        className={classNames(
          "absolute z-20 bg-white w-[90%] h-auto rounded-xl shadow-xl overflow-hidden transition-all duration-150",
          openModal
            ? "top-7 scale-100 -right-1/2 opacity-100 pointer-events-auto"
            : "scale-0 pointer-events-none opacity-0 -top-6 -right-20",
        )}
      >
        <li className="flex gap-3 items-center px-5 text-slate-700 pt-2 cursor-pointer hover:bg-slate-100 duration-100 py-2.5 font-poppins border-b">
          <MdPayment />
          <span className="text-xs font-medium">Make payment</span>
        </li>
        <li className="flex gap-3 items-center px-5 text-slate-700 cursor-pointer hover:bg-slate-100 duration-100 py-2.5 font-poppins border-b">
          <RiMoneyDollarBoxLine />
          <span className="text-xs font-medium">View balance details</span>
        </li>
        <li className="flex gap-3 items-center px-5 text-slate-700 pb-2 cursor-pointer hover:bg-slate-100 duration-100 py-2.5 font-poppins">
          <MdManageAccounts />
          <span className="text-xs font-medium">View account details</span>
        </li>
      </ul>
    </div>
  );
}

export default SmallModal;
