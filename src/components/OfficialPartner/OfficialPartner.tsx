import { useMemo } from "react";
import { Link } from "react-router-dom";

import img1 from "../../assets/logo-memon-trang-tron-1.png";
import img2 from "../../assets/Wf_partners-thumbs-02.png";
import img3 from "../../assets/Wf_partners-thumbs-03.png";
import img4 from "../../assets/Wf_partners-thumbs-04.png";

export default function OfficialPartner() {
  const partnerList = useMemo(
    () => [
      {
        img: img1,
        link: "/",
      },
      {
        img: img2,
        link: "/",
      },
      {
        img: img3,
        link: "/",
      },
      {
        img: img4,
        link: "/",
      },
    ],
    []
  );
  return (
    <div className="mt-24">
      <h2 className="text-6xl text-center text-white uppercase mb-14">
        official partners
      </h2>
      <div className="flex items-center justify-between w-[90%] m-auto">
        {partnerList.map(({ img, link }, index) => {
          return (
            <div key={index} className=" w-48 h-48 rounded-[50px] bg-white mx-6">
              <Link to={link}>
                <img src={img} alt="img" />
              </Link>
            </div>
          );
        })}
      </div>
    </div>
  );
}
