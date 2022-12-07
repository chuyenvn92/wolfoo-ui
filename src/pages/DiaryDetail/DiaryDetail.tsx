import { useParams } from "react-router-dom";
import React, { useCallback, useEffect, useState } from "react";
import { getDetailDiary, IDiary } from "../../features/diaries/diariesAPI";

import DiaryDetailBanner from "../../components/DiaryDetailBanner";
import DiaryDetailContent from "../../components/DiaryDetailContent";
import DiaryDetailPending from "../../components/DiaryDetailPending";

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
        <React.Fragment>
          <DiaryDetailBanner
            style={style}
            title={diaryData.title}
            createdAt={diaryData._createdAt}
          />
          <DiaryDetailContent content={diaryData.description} />
        </React.Fragment>
      ) : (
        <DiaryDetailPending />
      )}
    </React.Fragment>
  );
}
