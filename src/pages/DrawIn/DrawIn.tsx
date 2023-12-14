import React, { useMemo } from "react";

import ActivityBanner from "../../components/AcitvitiesBanner";
import ActivityContent from "../../components/ActivityContent";
import DrawInBanner from "../../assets/drawin_banner.jpeg";

import coloring from "../../assets/color_activity.png";
import findDifferences from "../../assets/find-activity.png";
import funMatching from "../../assets/fun_activity.png";
import mazeGame from "../../assets/maze-game.png";
import contentBackground from "../../assets/body-detail-bg.png";
import { useAppSelector } from "../../app/hooks";
import { selectDrawIn } from "../../features/activities/activitiesSlice";

export default function DrawIn() {
  const drawIn = useAppSelector(selectDrawIn);

  const activityList = useMemo(
    () => [
      {
        img: coloring,
        link: "/coloring-picture",
      },
      {
        img: findDifferences,
        link: "/",
      },
      {
        img: funMatching,
        link: "/",
      },
      {
        img: mazeGame,
        link: "/",
      },
    ],
    []
  );
  return (
    <React.Fragment>
      <ActivityBanner
        title="Draw in"
        style={{ backgroundImage: `url(${DrawInBanner})` }}
      />

      <ActivityContent
        contentBackground={contentBackground}
        activityList={activityList}
        contentList={drawIn}
      />
    </React.Fragment>
  );
}
