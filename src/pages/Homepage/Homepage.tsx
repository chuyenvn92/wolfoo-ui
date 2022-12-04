import React from "react";

import SubviewHome from "../../components/SubviewHome";
import HomeSlogan from "../../components/HomeSlogan";
import HomeMeet from "../../components/HomeMeet";
import HomeDiaries from "../../components/HomeDiaries";
import HomePartnerShip from "../../components/HomePartnerShip";

import banner from "../../assets/banner-1.png";

export default function Homepage() {
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
