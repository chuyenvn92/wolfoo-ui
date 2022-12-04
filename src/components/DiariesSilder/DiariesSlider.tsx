import { useMemo } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation } from "swiper";
import { Link } from "react-router-dom";

import timeIcon from "../../assets/im_time.svg";
import diaries_1 from "../../assets/diaries_1.jpg";
import diaries_2 from "../../assets/diaries_2.jpeg";
import diaries_3 from "../../assets/diaries_3.jpeg";
import diaries_4 from "../../assets/diaries_4.jpeg";

import "swiper/css/navigation";
import "swiper/css";

export default function DiariesSlider() {
  const diariesSliderData = useMemo(
    () => [
      {
        image: diaries_1,
        time: "Dec 23 2021",
        title: "WHY IS THE INTERIOR DESIGN OF YOUR KID’S ROOM IMPORTANT?",
        description:
          "Wolfoo had a new shark toy and he loves it so much. He met Pando and Kat to show them his new toy and they were also excited.  However, Bufo got a better toy – an ironman robot. This made Wolfoo so jealous. Piggy told them that the toy store at the corner in town",
      },
      {
        image: diaries_2,
        time: "Dec 24 2021",
        title: "5 TIPS TO DECORATE YOUR KID’S BEDROOM",
        description:
          "Wolfoo had a new shark toy and he loves it so much. He met Pando and Kat to show them his new toy and they were also excited.  However, Bufo got a better toy – an ironman robot. This made Wolfoo so jealous. Piggy told them that the toy store at the corner in town",
      },
      {
        image: diaries_3,
        time: "Dec 25 2021",
        title: "YOUR CHILD IS NOT A SOCIABLE KID, HOW CAN YOU SUPPORT HIM?",
        description:
          "Wolfoo had a new shark toy and he loves it so much. He met Pando and Kat to show them his new toy and they were also excited.  However, Bufo got a better toy – an ironman robot. This made Wolfoo so jealous. Piggy told them that the toy store at the corner in town",
      },
      {
        image: diaries_4,
        time: "Dec 26 2021",
        title:
          "BEDTIME GUIDE: 7 WAYS TO MAKE YOUR KID HAVE A BETTER SLEEPING ROUTINE",
        description:
          "Wolfoo had a new shark toy and he loves it so much. He met Pando and Kat to show them his new toy and they were also excited.  However, Bufo got a better toy – an ironman robot. This made Wolfoo so jealous. Piggy told them that the toy store at the corner in town",
      },
    ],
    []
  );
  return (
    <div className="relative overflow-hidden max-w-7xl">
      <div className="px-8">
        <div className="relative block w-full mx-auto my-0 ">
          <Swiper
            slidesPerView={3}
            spaceBetween={70}
            slidesPerGroup={3}
            loop={true}
            navigation={true}
            modules={[Navigation]}
            className="mySwiper"
          >
            {diariesSliderData.map(
              ({ image, time, title, description }, index) => {
                return (
                  <SwiperSlide key={index}>
                    <Link className="" to={"/characters"}>
                      <img src={image} alt="video" className="rounded-t-2xl" />
                    </Link>
                    <div className=" bg-corn-field p-6 rounded-b-2xl min-h-[263px]">
                      <div className="flex items-center gap-2">
                        <img
                          src={timeIcon}
                          className="time_icon"
                          alt="timeIcon"
                        />
                        <p className="font-normal font-montserrat">{time}</p>
                      </div>
                      <Link to={"/characters"}>
                        <h2 className="h-auto mt-4 mb-6 overflow-hidden text-xl font-bold text-left uppercase text-slate-blue text-ellipsis diaries_info_title">
                          {title}
                        </h2>
                        <p className="overflow-hidden text-base font-semibold text-left font-montserrat text-ellipsis diaries_info_description">
                          {description}
                        </p>
                      </Link>
                    </div>
                  </SwiperSlide>
                );
              }
            )}
          </Swiper>
        </div>
      </div>
    </div>
  );
}
