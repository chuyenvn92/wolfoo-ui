import React from "react";

interface IProps {
  id: number;
  img: string;
  characterBackground: string;
  name: string;
}

export default function CharacterItem({
  id,
  img,
  characterBackground,
  name,
}: IProps) {
  return (
    <React.Fragment>
      <div className="w-1/4 p-4 mb-4">
        <div className="flex items-end relative h-[262px] mt-[35px] overflow-visible">
          <img
            src={img}
            alt="wolfoo"
            className="max-w-full max-h-[247px] relative block z-[1] cursor-pointer mx-auto mt-0 mb-[43px]"
          />
          <img
            src={characterBackground}
            alt=""
            className="absolute left-1/2 bottom-[10px] translate-x-[-50%] max-w-full overflow-visible stroke-transparent stroke-[8px] charac-thumn-svg"
          />
        </div>
        <p className="mt-3 text-2xl font-bold text-center text-slate-blue">
          {name}
        </p>
      </div>
    </React.Fragment>
  );
}
