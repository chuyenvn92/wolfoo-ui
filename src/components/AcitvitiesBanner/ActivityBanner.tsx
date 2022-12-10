import { Link } from "react-router-dom";

import RightArrow from "../../assets/im_arrow_r.png";

interface IProps {
  title: string;
  style: React.CSSProperties;
}

export default function ActivityBanner({ title, style }: IProps) {
  return (
    <div style={style} className="activity-banner">
      <div className="w-full pb-12 mx-auto max-w-7xl">
        <h1 className=" mt-[66px] text-[55px] text-center text-white mb-2">
          {title}
        </h1>
        <h6 className="color-purple">
          <div className="flex items-center justify-center">
            Back to activities{" "}
            <Link to={"/activities"}>
              <img src={RightArrow} alt="arrow" className="ml-4" />
            </Link>
          </div>
        </h6>
      </div>
    </div>
  )
}