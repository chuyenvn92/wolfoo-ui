import { useMemo } from "react";

import SubviewItem from "../../components/SubView";
import SubviewSlider from "../SubviewSlider";

import youtube from "../../assets/youtube.png";
import subView2 from "../../assets/img_subsview_2.png";
import subView3 from "../../assets/img_subsview_3.png";
import subView4 from "../../assets/img_subsview_4.png";

export default function SubviewHome() {
  const subsviewData = useMemo(
    () => [
      {
        image: youtube,
        link: "/",
      },
      {
        image: subView2,
        viewCount: 20,
        subCount: 10,
        link: "/",
      },
      {
        image: subView3,
        viewCount: 11.4,
        subCount: 12.3,
        link: "/",
      },
      {
        image: subView4,
        viewCount: 11.5,
        subCount: 9,
        link: "/",
      },
    ],
    []
  );

  return (
    <div className="home_subsview bg-royal-blue relative min-h-[1000px]">
      <div className="flex flex-wrap items-end justify-center relative z-[1] translate-y-[-19%]">
        {subsviewData.map(({ viewCount, image, subCount, link }, index) => {
          return (
            <SubviewItem
              key={index}
              index={index}
              viewCount={viewCount}
              subCount={subCount}
              image={image}
              link={link}
            />
          );
        })}
      </div>

      <SubviewSlider />
    </div>
  );
}
