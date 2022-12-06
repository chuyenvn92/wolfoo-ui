import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation } from "swiper";

import DiaryItem from "../DiaryItem";
import { diariesData } from "../../data/diariesData";

import "swiper/css/navigation";
import "swiper/css";

export default function DiariesSlider() {
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
            {diariesData.map(({ image, time, title, description }, index) => {
              return (
                <SwiperSlide key={index}>
                  <DiaryItem
                    image={image}
                    time={time}
                    title={title}
                    description={description}
                  />
                </SwiperSlide>
              );
            })}
          </Swiper>
        </div>
      </div>
    </div>
  );
}
