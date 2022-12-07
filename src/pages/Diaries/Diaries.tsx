import { useAppSelector } from "../../app/hooks";
import { selectDiaries } from "../../features/diaries/diariesSlice";
import { IDiary } from "../../features/diaries/diariesAPI";

import DiaryItem from "../../components/DiaryItem";

export default function Diaries() {
  const diaries = useAppSelector(selectDiaries);

  return (
    <div>
      <div className="diaries-banner">
        <div className="w-full mx-auto max-w-7xl">
          <h2 className=" text-6xl text-slate-blue text-center mt-[8%]">
            DIARIES
          </h2>
        </div>
      </div>
      <div className="bg-mellow-apricot min-h-[2000px] relative z-[1] diaries-items">
        <div className="w-full mx-auto max-w-7xl">
          <div className="mb-[45%] pt-[10%]">
            <div className="flex flex-wrap items-center justify-start gap-8 m-auto xl:gap-16">
              {diaries.map(
                ({ image, title, _createdAt, description, slug }: IDiary) => {
                  return (
                    <div
                      key={slug.current}
                      className="w-[45%] xl:w-[316px] py-9 px-0 mx-auto"
                    >
                      <DiaryItem
                        image={image.asset.url}
                        time={_createdAt}
                        title={title}
                        description={description}
                        slug={slug.current}
                      />
                    </div>
                  );
                }
              )}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
