import React, { useMemo } from "react";
import { Link } from "react-router-dom";

import bottomPattern from "../../assets/bottom-pattern.png";
import coloringPicture from "../../assets/color_activity.png";
import drawIn from "../../assets/draw-activity.png";
import findDifferences from "../../assets/find-activity.png";
import funMatching from "../../assets/fun_activity.png";
import mazeGame from "../../assets/maze-game.png";

export default function Activities() {
  const activityList = useMemo(
    () => [
      {
        img: coloringPicture,
        link: "/coloring-picture"
      },
      {
        img: drawIn,
        link: "/"
      },
      {
        img: findDifferences,
        link: "/"
      },
      {
        img: funMatching,
        link: "/"
      },
      {
        img: mazeGame,
        link: "/"
      },
    ],
    []
  );
  return (
    <React.Fragment>
      <div className="relative flex items-center justify-center activity-banner bg-seashell">
        <div className="w-full mx-auto max-w-7xl">
          <h1 className="mt-16 text-6xl text-center text-slate-blue">
            Activities
          </h1>
        </div>
      </div>

      <div className="w-full pb-12 bg-main-bg bg-classic-rose">
        <div className="flex flex-wrap items-center justify-center mx-[6%] xl:mx-[14%] bg-container-bg activity-inner">
          {activityList.map(({ img, link }, index) => {
            return (
              <Link to={link} key={index} className="block w-1/3 my-6 text-center ">
                <img src={img} alt="activities" className="w-[187px]" />
              </Link>
            );
          })}
        </div>
        <div className="mt-[-181px] flex items-center justify-center">
          <img src={bottomPattern} alt="bottom" />
        </div>
      </div>
    </React.Fragment>
  );
}
