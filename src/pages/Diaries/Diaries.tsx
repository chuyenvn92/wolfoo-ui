import DiaryItem from "../../components/DiaryItem";

import { diariesData } from "../../data/diariesData";

export default function Diaries() {
  return (
    <div>
      <div className="diaries-banner">
        <div className="w-full mx-auto max-w-7xl">
          <h2 className=" text-6xl text-slate-blue text-center mt-[8%]">
            DIARIES
          </h2>
        </div>
      </div>
      <div className="bg-mellow-apricot min-h-[2700px] relative z-[1] diaries-items">
        <div className="w-full mx-auto max-w-7xl">
          <div className="mb-[45%] pt-[10%]">
            <div className="flex flex-wrap items-center justify-start gap-8 m-auto xl:gap-16">
              {diariesData.map(({ image, time, title, description }, index) => {
                return (
                  <div
                    key={index}
                    className="w-[45%] xl:w-[316px] py-9 px-0 mx-auto"
                  >
                    <DiaryItem
                      image={image}
                      time={time}
                      title={title}
                      description={description}
                    />
                  </div>
                );
              })}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
