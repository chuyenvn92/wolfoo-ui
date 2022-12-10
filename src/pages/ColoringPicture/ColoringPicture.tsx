import React, { useMemo } from "react";

import ActivityBanner from "../../components/AcitvitiesBanner";
import ActivityContent from "../../components/ActivityContent";
import ColoringBanner from "../../assets/banner-detail-new.png";

import drawIn from "../../assets/draw-activity.png";
import findDifferences from "../../assets/find-activity.png";
import funMatching from "../../assets/fun_activity.png";
import mazeGame from "../../assets/maze-game.png";
import contentBackground from "../../assets/body-detail-bg.png";
import { useAppSelector } from "../../app/hooks";
import { selectPictures } from "../../features/activities/activitiesSlice";

export default function ColoringPicture() {
  const pictures = useAppSelector(selectPictures);

  const activityList = useMemo(
    () => [
      {
        img: drawIn,
        link: "/",
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
        title="Coloring Pictures"
        style={{ backgroundImage: `url(${ColoringBanner})` }}
      />

      <ActivityContent
        contentBackground={contentBackground}
        activityList={activityList}
        contentList={pictures}
      />
    </React.Fragment>
  );
}
