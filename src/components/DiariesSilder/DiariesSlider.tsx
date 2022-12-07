import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation } from "swiper";

import DiaryItem from "../DiaryItem";

import "swiper/css/navigation";
import "swiper/css";

interface IProps {
  diariesData: any;
}

export default function DiariesSlider({ diariesData }: IProps) {
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
            {diariesData.map((item: any) => {
              return (
                <SwiperSlide key={item.image.asset._id}>
                  <DiaryItem
                    image={item.image.asset.url}
                    time={item._createdAt}
                    title={item.name}
                    description={item.bio}
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
