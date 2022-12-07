import React, { useEffect } from "react";

import { useAppDispatch } from "../../app/hooks";
import { getDiariesApi } from "../../features/diaries/diariesSlice";

import SubviewHome from "../../components/SubviewHome";
import HomeSlogan from "../../components/HomeSlogan";
import HomeMeet from "../../components/HomeMeet";
import HomeDiaries from "../../components/HomeDiaries";
import HomePartnerShip from "../../components/HomePartnerShip";

import banner from "../../assets/banner-1.png";

export default function Homepage() {
  const dispatch = useAppDispatch();

  useEffect(() => {
    dispatch(getDiariesApi);
  }, [dispatch]);

  return (
    <React.Fragment>
      <img src={banner} alt="slider" />
      <HomeSlogan />
      <SubviewHome />
      <HomeMeet />
      <HomeDiaries />
      <HomePartnerShip />
    </React.Fragment>
  );
}
