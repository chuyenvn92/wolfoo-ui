import imgCxg from "../../assets/im_cxg.png";
import imgAboutBottom from "../../assets/im_ct.png";
import social1 from "../../assets/im_mxh_1.png";
import social2 from "../../assets/im_mxh_2.png";
import social3 from "../../assets/im_mxh_3.png";
import social4 from "../../assets/im_mxh_4.png";

export default function AboutUs() {
  return (
    <div>
      <div className="relative flex items-center justify-center about_us_banner">
        <div className="w-full mx-auto max-w-7xl">
          <h2 className="mb-24 text-5xl text-center uppercase text-slate-blue">
            About us
          </h2>
        </div>
      </div>

      <div className="about-us-content bg-shamrock min-h-[1970px] relative">
        <div className="w-full mx-auto max-w-7xl">
          <div className="relative">
            {/* About us top */}
            <div className="flex mt-[-28%]">
              <img src={imgCxg} alt="cxgImg" className="z-[3]" />
              <p className="pt-[22%] pr-[4%] z-[3] text-2xl font-medium text-white font-montserrat">
                Welcome to the Official Wolfoo World website. We have created a
                world of Wolfoo with a primary goal to engage families with
                entertaining and educational content that makes
                universally-relatable preschool moments fun.
              </p>
            </div>

            {/* About us bottom */}
            <div className="flex">
              <p className=" pt-[5%] pl-[5%] text-2xl text-white font-montserrat">
                At Wolfoo World, learning is a fun experience for kids aged 2 -
                8 by creating funny stories with 2D animations. Children get to
                learn good habits, safety tips, colors, numbers, good manners,
                healthy habits, professions for kids, and more by enjoying our
                videos
              </p>
              <img src={imgAboutBottom} alt="imgBottom" />
            </div>

            {/* Social wrap */}
            <ul className="flex flex-wrap items-center p-0 m-0">
              <li className="flex justify-end mr-[5%] w-[45%] py-4">
                <img src={social1} alt="social" />
              </li>
              <li className="ml-[5%] w-[45%] py-4">
                <img src={social2} alt="social" />
              </li>
              <li className="flex justify-end mr-[5%] w-[45%] py-4">
                <img src={social3} alt="social" />
              </li>
              <li className="ml-[5%] w-[45%] py-4">
                <img src={social4} alt="social" />
              </li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
}
