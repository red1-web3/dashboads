import React from "react";

function RecentPostAndCommments({ id1, id2, id3, title }: any) {
  return (
    <div className="__parentStyle">
      <p className="__pElement">{title}</p>

      <div className="flex flex-col items-center pt-5 pb-10 px-10">
        <div className="flex justify-between w-full text-black/70 font-medium text-xl border-b border-[rgba(0,0,0,0.2)] pb-4">
          <p className="hidden md:block">Date</p>
          <p>Title</p>
          <p>Views</p>
          <p>Active</p>
        </div>

        <div className="flex justify-between w-full py-5 border-b border-[rgba(0,0,0,0.1)]">
          <div className="hidden md:block">2022-08-08</div>
          <div className="md:-translate-x-9">title1</div>
          <div className="md:-translate-x-5">250</div>
          <div>
            {" "}
            <label htmlFor={id1} className="cursor-pointer flex items-center">
              <input
                className="peer appearance-none"
                type="checkbox"
                id={id1}
              />
              <div className="w-12 h-6 bg-gray-400 !duration-200 rounded-full relative before:absolute before:h-full before:w-1/2 before:scale-90 before:rounded-full before:bg-white !before:duration-200 before:transition-all peer-checked:before:translate-x-6 peer-checked:bg-primary2"></div>
            </label>
          </div>
        </div>
        <div className="flex justify-between w-full py-5 border-b border-[rgba(0,0,0,0.1)]">
          <div className="hidden md:block">2022-08-08</div>
          <div className="md:-translate-x-9">title1</div>
          <div className="md:-translate-x-5">250</div>
          <div>
            {" "}
            <label htmlFor={id2} className="cursor-pointer flex items-center">
              <input
                className="peer appearance-none"
                type="checkbox"
                id={id2}
              />
              <div className="w-12 h-6 bg-gray-400 !duration-200 rounded-full relative before:absolute before:h-full before:w-1/2 before:scale-90 before:rounded-full before:bg-white !before:duration-200 before:transition-all peer-checked:before:translate-x-6 peer-checked:bg-primary2"></div>
            </label>
          </div>
        </div>
        <div className="flex justify-between w-full py-5 border-b border-[rgba(0,0,0,0.1)]">
          <div className="hidden md:block">2022-08-08</div>
          <div className="md:-translate-x-9">title1</div>
          <div className="md:-translate-x-5">250</div>
          <div>
            {" "}
            <label htmlFor={id3} className="cursor-pointer flex items-center">
              <input
                className="peer appearance-none"
                type="checkbox"
                id={id3}
              />
              <div className="w-12 h-6 bg-gray-400 !duration-200 rounded-full relative before:absolute before:h-full before:w-1/2 before:scale-90 before:rounded-full before:bg-white !before:duration-200 before:transition-all peer-checked:before:translate-x-6 peer-checked:bg-primary2"></div>
            </label>
          </div>
        </div>
      </div>
    </div>
  );
}

export default RecentPostAndCommments;

// flex items-center gap-4 text-lg text-black/50 capitalize
