import React from "react";

function PeopleOnline() {
  return (
    <div className="__parentStyle w-full">
      <p className="__pElement text-center">people online</p>

      <div className="flex py-10 items-center justify-center">
        <div className="h-48 flex items-center justify-center gap-4 flex-col aspect-square rounded-full bg-white border-8 border-primary2">
          <p className="font-semibold text-primary2 text-6xl">20</p>
          <p className="capitalize text-lg font-semibold text-black/60">
            Online
          </p>
        </div>
      </div>
    </div>
  );
}

export default PeopleOnline;
