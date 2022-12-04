import { useMemo } from "react";
import { Link } from "react-router-dom";

import imgFB from "../../assets/im_fb.png";
import imgInsta from "../../assets/im_ins.png";
import imgTwitter from "../../assets/im_tw.png";
import imgYoutube from "../../assets/im_yout.png";

export default function Footer() {
  const footerSocialList = useMemo(
    () => [
      {
        img: imgFB,
        link: "/",
      },
      {
        img: imgInsta,
        link: "/",
      },
      {
        img: imgTwitter,
        link: "/",
      },
      {
        img: imgYoutube,
        link: "/",
      },
    ],
    []
  );
  return (
    <div className="wolfoo_footer bg-illusion relative min-h-[276px] z-[1]">
      <div className="w-full">
        <div className="container">
          <div>
            <ul className="flex items-center justify-center p-0 m-0">
              <li className="px-5 text-xl font-bold text-white uppercase z-[1]">
                Newsletter
              </li>
              <li className="px-5 text-xl font-bold text-white uppercase z-[1]">
                Privacy
              </li>
            </ul>
          </div>
          <div className="mt-8 mb-9">
            <ul className="flex items-center justify-center p-0 m-0">
              {footerSocialList.map(({ link, img }, index) => {
                return (
                  <li
                    key={index}
                    className="px-5 text-xl font-bold text-white uppercase z-[1]"
                  >
                    <Link to={link}>
                      <img src={img} alt="iconFooter" />
                    </Link>
                  </li>
                );
              })}
            </ul>
          </div>
          <p className="text-lg font-bold text-center text-white">
            ChuyenMC clone!
          </p>
        </div>
      </div>
    </div>
  );
}
