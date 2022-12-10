import ActivityContentItem from "../ActivityContentItem";
import bottomPattern from "../../assets/bottom-pattern.png";

import { Link } from "react-router-dom";

interface IProps {
  contentList: {
    image: string;
  }[];
  activityList: {
    link: string;
    img: string;
  }[];
  contentBackground: string;
}

export default function ActivityContent({
  contentList,
  contentBackground,
  activityList,
}: IProps) {
  return (
    <div
      className="py-12 bg-classic-rose"
      style={{ backgroundImage: `url(${contentBackground})` }}
    >
      <div className="flex justify-center w-full pb-12 mx-auto mb-12 max-w-7xl">
        <div className="relative inline-flex flex-wrap gap-12">
          {contentList.map(({ image }, index) => {
            return <ActivityContentItem key={index} image={image} />;
          })}
        </div>
      </div>
      {/* Other activities */}
      <h2 className="text-slate-blue text-[40px] text-center">
        OTHER ACTIVITIES
      </h2>
      <div className="flex flex-wrap items-center justify-center mx-[6%] activity-inner">
        {activityList.map(({ img, link }, index) => {
          return (
            <Link
              to={link}
              key={index}
              className="block w-1/3 my-6 text-center "
            >
              <img src={img} alt="activities" className="w-[187px]" />
            </Link>
          );
        })}
      </div>
      <div className="mt-[-181px] flex items-center justify-center">
        <img src={bottomPattern} alt="bottom" />
      </div>
    </div>
  );
}
