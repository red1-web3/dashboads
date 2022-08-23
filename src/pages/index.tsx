import Link from "next/link";
import React from "react";

function index() {
  return (
    <div className="flex items-center gap-7 m-7">
      <div className="flex flex-col items-center gap-2 rounded overflow-hidden shadow-2xl">
        <img
          src="/dashboard1.png"
          alt="dashboard preview image"
          className="w-auto md:w-[400px]"
        />
        <Link href="/dashboard1">
          <a className="text-xl font-yanone bg-primary1 flex justify-center w-full py-2 rounded tracking-wider text-slate-200">
            Dashboard 1
          </a>
        </Link>
      </div>
      <div className="flex flex-col items-center gap-2 rounded overflow-hidden shadow-2xl">
        <img
          src="/dashboard2.png"
          alt="dashboard preview image"
          className="w-auto md:w-[400px]"
        />
        <Link href="/dashboard2">
          <a className="text-xl font-yanone bg-primary2 flex justify-center w-full py-2 rounded tracking-wider text-slate-200">
            Dashboard 2
          </a>
        </Link>
      </div>
    </div>
  );
}

export default index;
