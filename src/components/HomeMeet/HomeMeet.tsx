import { Link } from "react-router-dom";

import RightArrow from "../../assets/im_arrow_r.png"

export default function HomeMeet() {
  return (
    <div className="home_meet bg-corn-field relative flex items-center min-h-[660px]">
      <div className="w-full z-[1]">
        <div className="max-w-7xl">
          <div className="flex flex-col items-center justify-center text-center">
            <h2 className="text-6xl text-center uppercase text-slate-blue">
              <p>meet<br></br>
                the characters
              </p>
            </h2>
            <Link to={"/characters"}>
              <img src={RightArrow} alt="arrow" />
            </Link>
          </div>
        </div>
      </div>
    </div>
  )
}