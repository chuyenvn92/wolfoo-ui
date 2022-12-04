import OfficialPartner from "../OfficialPartner";

import imgPartnerBottom from "../../assets/im_partner_bt.png";
import imgInput from "../../assets/im_input.png";
import imgTextArea from "../../assets/im_textarea.png";

export default function HomePartnerShip() {
  return (
    <div className="bg-selective-yellow relative min-h-[900px] z-[1] home_partnership">
      <div className="w-full">
        <div className="container">
          <div>
            <h2 className="mb-6 text-6xl text-center text-white uppercase">
              partnership
            </h2>
            <p className="w-3/5 m-auto text-center text-white">
              <span className="text-3xl">WolfooWorld </span>
              <span className="text-2xl font-montserrat">
                is always looking for new partners around the world.
              </span>
            </p>
          </div>

          <div className="mt-16 ">
            <div className="flex flex-wrap items-center justify-around mb-11">
              <div className="w-[45%]">
                <div className="relative mb-4">
                  <img src={imgInput} alt="imgInput" />
                  <input
                    type="text"
                    placeholder="Your name"
                    className="absolute w-[90%] h-[90%] top-1/2 lef-1/2 py-2 translate-x-[5%] translate-y-[-50%] focus:outline-none"
                  />
                </div>
                <div className="relative mb-4">
                  <img src={imgInput} alt="imgInput" />
                  <input
                    type="text"
                    placeholder="Your email"
                    className="absolute w-[90%] h-[90%] top-1/2 lef-1/2 py-2 translate-x-[5%] translate-y-[-50%] focus:outline-none"
                  />
                </div>
              </div>
              <div className="w-[45%]">
                <div className="relative">
                  <img src={imgTextArea} alt="imgTextarea" />
                  <textarea
                    placeholder="Your message"
                    rows={3}
                    className="absolute w-[70%] h-[90%] top-1/2 lef-1/2 py-2 translate-x-[5%] translate-y-[-50%] focus:outline-none"
                  />
                </div>
              </div>
            </div>
          </div>

          <div className="text-2xl uppercase text-white w-full relative focus:outline-none z-[1] cursor-pointer py-[13px] px-[25px] text-center partnership_btn">
            partner with us
          </div>
          <OfficialPartner />
        </div>
      </div>
      <img src={imgPartnerBottom} alt="" />
    </div>
  );
}
