import React, { useMemo } from "react";

import ActivityBanner from "../../components/AcitvitiesBanner";
import ActivityContent from "../../components/ActivityContent";
import fingDifferentBanner from "../../assets/manifest.jpeg";

import coloring from "../../assets/color_activity.png";
import draw from "../../assets/draw-activity.png";
import funMatching from "../../assets/fun_activity.png";
import mazeGame from "../../assets/maze-game.png";
import contentBackground from "../../assets/body-detail-bg.png";
import { useAppSelector } from "../../app/hooks";
import { selectFindDifferent } from "../../features/activities/activitiesSlice";

export default function FindDifferent() {
  const findDifferent = useAppSelector(selectFindDifferent);

  const activityList = useMemo(
    () => [
      {
        img: coloring,
        link: "/coloring-picture",
      },
      {
        img: draw,
        link: "/draw-in",
      },
      {
        img: funMatching,
        link: "/fun-matching",
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
        title="Find the differences"
        style={{ backgroundImage: `url(${fingDifferentBanner})` }}
      />

      <ActivityContent
        contentBackground={contentBackground}
        activityList={activityList}
        contentList={findDifferent}
      />
    </React.Fragment>
  );
}
