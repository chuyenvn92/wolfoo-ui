import React, { useCallback, useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { getDetailDiary, IDiary } from "../../features/diaries/diariesAPI";

export default function DiaryDetail() {
  const [diaryData, setDiaryData] = useState<IDiary>();
  const [style, setStyle] = useState({
    backgroundImage: "#ffb973",
  });
  const { slug } = useParams();

  const fetchDiaryDetail = useCallback(async () => {
    if (slug) {
      const diaryResponse = (await getDetailDiary(slug)) as IDiary[];
      setDiaryData(diaryResponse[0]);
    }
  }, [slug]);

  useEffect(() => {
    fetchDiaryDetail();
  }, [fetchDiaryDetail]);

  useEffect(() => {
    if (diaryData) {
      setStyle({
        backgroundImage: `url(${diaryData.image.asset.url})`,
      });
    }
  }, [diaryData]);

  return (
    <React.Fragment>
      {diaryData ? (
        <div style={style} className="diaries-child-banner">
          <div className="relative w-full max-auto max-w-7xl">
            <div className="flex flex-col items-center justify-center">
              <p className="text-5xl text-center text-white">
                {diaryData.title}
              </p>
            </div>
          </div>
        </div>
      ) : (
        <p>Loading...</p>
      )}
    </React.Fragment>
  );
}
