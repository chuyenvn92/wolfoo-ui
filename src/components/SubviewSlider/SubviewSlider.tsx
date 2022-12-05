import { useMemo } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation } from "swiper";
import { Link } from "react-router-dom";

import videoImg1 from "../../assets/maxresdefault.jpg";
import videoImg2 from "../../assets/maxresdefault2.jpg";
import videoImg3 from "../../assets/maxresdefault3.jpg";
import videoImg4 from "../../assets/maxresdefault4.jpg";
import videoImg5 from "../../assets/maxresdefault5.jpg";

import "swiper/css/navigation";
import "swiper/css";
import "./styles.css";

export default function SubviewSlider() {
  const sliderData = useMemo(
    () => [
      {
        image: videoImg1,
        link: "https://www.youtube.com/watch?v=mE5J3sdgvOo",
      },
      {
        image: videoImg2,
        link: "https://www.youtube.com/watch?v=mE5J3sdgvOo",
      },
      {
        image: videoImg3,
        link: "https://www.youtube.com/watch?v=mE5J3sdgvOo",
      },
      {
        image: videoImg4,
        link: "https://www.youtube.com/watch?v=mE5J3sdgvOo",
      },
      {
        image: videoImg5,
        link: "https://www.youtube.com/watch?v=mE5J3sdgvOo",
      },
    ],
    []
  );
  return (
    <div className="relative w-full mx-auto overflow-hidden max-w-7xl">
      <div className="px-8">
        <div className="relative block my-0 ">
          <Swiper
            slidesPerView={3}
            spaceBetween={100}
            slidesPerGroup={3}
            loop={true}
            navigation={true}
            modules={[Navigation]}
            className="mySwiper"
          >
            {sliderData.map(({ image, link }, index) => {
              return (
                <SwiperSlide key={index}>
                  <Link to={link}>
                    <img src={image} className="rounded-[20px]" alt="video" />
                  </Link>
                </SwiperSlide>
              );
            })}
          </Swiper>
        </div>
      </div>
    </div>
  );
}
