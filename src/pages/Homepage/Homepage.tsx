import React, { useEffect, useState } from "react";

import sanityClient from "../../client";

import SubviewHome from "../../components/SubviewHome";
import HomeSlogan from "../../components/HomeSlogan";
import HomeMeet from "../../components/HomeMeet";
import HomeDiaries from "../../components/HomeDiaries";
import HomePartnerShip from "../../components/HomePartnerShip";

import banner from "../../assets/banner-1.png";

export default function Homepage() {
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
    <React.Fragment>
      <img src={banner} alt="slider" />
      <HomeSlogan />
      <SubviewHome />
      <HomeMeet />
      <HomeDiaries diariesData={diariesData} />
      <HomePartnerShip />
    </React.Fragment>
  );
}
