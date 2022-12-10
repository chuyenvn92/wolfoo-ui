import React, { useMemo } from "react";

import ActivityBanner from "../../components/AcitvitiesBanner";
import ActivityContent from "../../components/ActivityContent";
import ColoringBanner from "../../assets/banner-detail-new.png";

import drawIn from "../../assets/draw-activity.png";
import findDifferences from "../../assets/find-activity.png";
import funMatching from "../../assets/fun_activity.png";
import mazeGame from "../../assets/maze-game.png";
import contentBackground from "../../assets/body-detail-bg.png";

import previewImgPdf_1 from "../../assets/preview_img_1.png";
import previewImgPdf_2 from "../../assets/previewImg_2.png";
import previewImgPdf_3 from "../../assets/previewImg_3.png";

export default function ColoringPicture() {
  const data = useMemo(
    () => [
      {
        image: previewImgPdf_1,
      },
      {
        image: previewImgPdf_2,
      },
      {
        image: previewImgPdf_3,
      },
    ],
    []
  );

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
        contentList={data}
      />
    </React.Fragment>
  );
}
