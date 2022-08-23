import React from "react";

type MailPrpos = {
  image: string;
};

function Mail({ image }: MailPrpos) {
  return (
    <div className="flex justify-between items-center bg-slate-100 border rounded-xl px-3 py-1.5">
      <div className="cursor-pointer">
        <img
          src={image}
          alt="image"
          width={40}
          className="aspect-square rounded-full object-cover"
        />
      </div>

      {/* Email --Start-- */}
      <div className="font-poppins text-sm text-slate-600 font-normal">
        example@yahoo.net
      </div>
      {/* Email --End-- */}

      <button className="font-poppins text-sm font-semibold text-slate-800">
        View
      </button>
    </div>
  );
}

export default Mail;
