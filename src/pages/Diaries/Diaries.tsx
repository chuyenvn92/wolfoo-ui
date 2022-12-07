import { useEffect, useState } from "react";
import sanityClient from "../../client";

import DiaryItem from "../../components/DiaryItem";

export default function Diaries() {
  const [diariesData, setDiariesData] = useState([]);
  useEffect(() => {
    sanityClient
      .fetch(
        `*[_type == "chef"]{
        name,
        _createdAt,
        bio,
        image{
          asset->{
          _id,
          url
        },
      }
    }`
      )
      .then((data) => setDiariesData(data))
      .catch(console.error);
  }, []);

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
              {diariesData.map((item: any, index) => {
                return (
                  <div
                    key={index}
                    className="w-[45%] xl:w-[316px] py-9 px-0 mx-auto"
                  >
                    <DiaryItem
                      image={item.image.asset.url}
                      time={item._createdAt}
                      title={item.name}
                      description={item.bio}
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
