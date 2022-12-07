import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation } from "swiper";
import { useAppSelector } from "../../app/hooks";
import { selectDiaries } from "../../features/diaries/diariesSlice";
import { IDiary } from "../../features/diaries/diariesAPI";

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
            {diaries.map(
              ({ image, _createdAt, title, description, slug }: IDiary) => {
                return (
                  <SwiperSlide key={slug.current}>
                    <DiaryItem
                      image={image.asset.url}
                      time={_createdAt}
                      title={title}
                      description={description}
                      slug={slug.current}
                    />
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
