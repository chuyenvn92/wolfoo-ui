import React, { useMemo } from "react";

import ActivityBanner from "../../components/AcitvitiesBanner";
import ActivityContent from "../../components/ActivityContent";
import FunBanner from "../../assets/fun-banner.jpeg";

import drawIn from "../../assets/draw-activity.png";
import findDifferences from "../../assets/find-activity.png";
import coloring from "../../assets/color_activity.png";
import mazeGame from "../../assets/maze-game.png";
import contentBackground from "../../assets/body-detail-bg.png";
import { useAppSelector } from "../../app/hooks";
import { selectFunMatching } from "../../features/activities/activitiesSlice";

export default function FunMatching() {
  const funMatching = useAppSelector(selectFunMatching);

  const activityList = useMemo(
    () => [
      {
        img: drawIn,
        link: "/draw-in",
      },
      {
        img: findDifferences,
        link: "/find-the-differences",
      },
      {
        img: coloring,
        link: "/coloring-picture",
      },
      {
        img: mazeGame,
        link: "/maze-game",
      },
    ],
    []
  );
  return (
    <React.Fragment>
      <ActivityBanner
        title="Fun matching"
        style={{ backgroundImage: `url(${FunBanner})` }}
      />

      <ActivityContent
        contentBackground={contentBackground}
        activityList={activityList}
        contentList={funMatching}
      />
    </React.Fragment>
  );
}
