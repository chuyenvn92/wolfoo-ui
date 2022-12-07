import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation } from "swiper";
import { useAppSelector } from "../../app/hooks";
import { selectDiaries } from "../../features/diaries/diariesSlice";

import DiaryItem from "../DiaryItem";

import "swiper/css/navigation";
import "swiper/css";

export default function DiariesSlider() {
  const diaries = useAppSelector(selectDiaries);

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
            {diaries.map((item: any) => {
              return (
                <SwiperSlide key={item.image.asset._id}>
                  <DiaryItem
                    image={item.image.asset.url}
                    time={item._createdAt}
                    title={item.title}
                    description={item.description}
                    slug={item.slug.current}
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
