import React, { useMemo } from "react";

import ActivityBanner from "../../components/AcitvitiesBanner";
import ActivityContent from "../../components/ActivityContent";
import mazeBanner from "../../assets/maze-banner.jpeg";

import drawIn from "../../assets/draw-activity.png";
import findDifferences from "../../assets/find-activity.png";
import coloring from "../../assets/color_activity.png";
import funMatching from "../../assets/fun_activity.png";
import contentBackground from "../../assets/body-detail-bg.png";
import { useAppSelector } from "../../app/hooks";
import { selectMazegame } from "../../features/activities/activitiesSlice";

export default function MazeGame() {
  const mazegame = useAppSelector(selectMazegame);

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
        img: funMatching,
        link: "/fun-matching",
      },
    ],
    []
  );
  return (
    <React.Fragment>
      <ActivityBanner
        title="Maze"
        style={{ backgroundImage: `url(${mazeBanner})` }}
      />

      <ActivityContent
        contentBackground={contentBackground}
        activityList={activityList}
        contentList={mazegame}
      />
    </React.Fragment>
  );
}
