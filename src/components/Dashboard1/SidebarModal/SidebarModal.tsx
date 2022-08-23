import classNames from "classnames";
import React from "react";
import { useModal } from "../../../jotai";

function SidebarModal() {
  const [modal, setModal] = useModal();

  return (
    <div
      className={classNames(
        "px-3 pt-2 transition-all duration-200",
        modal
          ? "h-auto opacity-100 pointer-events-auto translate-y-0"
          : "h-0 opacity-0 pointer-events-none -translate-y-6",
      )}
    >
      <div className="bg-white py-6 px-4 rounded-xl space-y-3">
        <div className="space-y-3 select-none">
          <h3 className="font-poppins text-xl font-semibold leading-3 text-slate-800">
            Formating Status
          </h3>
          <p className="font-poppins text-slate-700 font-medium text-base">
            In progress
          </p>
        </div>

        <div className="pt-3 space-y-3">
          <div className="relative w-full h-[18px] rounded-full overflow-hidden bg-primary1/10">
            <p className="absolute top-0 left-0 w-[70%] h-full bg-primary1 rounded-full"></p>
          </div>

          <div className="text-center font-poppins">
            <p className="font-semibold text-base text-slate-800">
              Estimated processing
            </p>
            <p className="text-sm text-slate-600 font-medium">
              4-5 buisness days
            </p>
          </div>
        </div>
        <button className="bg-primary1 w-full py-2 text-slate-100 rounded-xl font-medium shadow font-poppins">
          View Status
        </button>
      </div>
    </div>
  );
}

export default SidebarModal;
