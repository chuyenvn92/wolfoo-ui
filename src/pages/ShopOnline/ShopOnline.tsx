import React, { useMemo } from "react";
import { Link } from "react-router-dom";

import BoxWrapHead from "../../assets/box-wrap-head.png";
import Roof from "../../assets/cai-bat.png";
import shopify from "../../assets/icon-shopify.png";
import amazon from "../../assets/icon-amazon.png";
import img1 from "../../assets/img-1.png";
import img2 from "../../assets/img-2.png";
import img3 from "../../assets/img-3.png";
import img4 from "../../assets/img-4.png";


export default function ShopOnline() {
  const shopOnlineData = useMemo(() => [
    {
      img: img1,
      logo: shopify,
      label: "wolfoo world",
      subText: "store"
    },
    {
      img: img2,
      logo: amazon,
      label: "amazon",
      subText: "clothing store"
    },
    {
      img: img3,
      logo: amazon,
      label: "amazon",
      subText: "plush store"
    },
    {
      img: img4,
      logo: amazon,
      label: "amazon",
      subText: "toys store"
    },
  ], [])
  return (
    <React.Fragment>
      <div className="shop-online-banner">
        <div className="w-full mx-auto max-w-7xl">
          <h1 className=" mt-16 text-[55px] text-slate-blue text-center">
            SHOP ONLINE
          </h1>
        </div>
      </div>

      <div className="shop-online-body">
        <div className="w-full mx-auto max-w-7xl">
          <div className="w-full max-w-[92%] my-0 mx-auto pb-[150px]">
            <div className="">
              <img src={BoxWrapHead} alt="BoxWrapHead" className="w-full" />
            </div>
            <div className=" bg-white rounded-br-[32px] rounded-bl-[32px] pb-3 pt-4">
              <div className="text-2xl text-center text-slate-blue font-montserrat">
                <p>You are leaving our Official Wolfoo World website.</p>
                <p>Please choose your destinations.</p>
              </div>
              <div className="mx-[-65px] my-12">
                <img src={Roof} alt="roof" className="w-full" />
              </div>
              <div className="px-12">
                <div className="grid grid-cols-4 gap-9">
                  {shopOnlineData.map((item, index) => {
                    return (
                      <Link to={"/"} key={index} className="relative block pb-4 rounded-md bg-corn-field mb-7 shop-item">
                        <div className="flex flex-col items-center justify-center">
                          <div>
                            <img src={item.logo} alt="shopify" className="mb-7 mt-[-24px]" />
                          </div>
                          <div className="flex h-[69px] w-full items-center justify-center mb-[9px]">
                            <img className="mb-2 " src={item.img} alt="logo" />
                          </div>
                          <div className="text-base text-center uppercase text-slate-blue">
                            <p className="text-xl ">{item.label}</p>
                            <span>{item.subText}</span>
                          </div>
                          <span className="coming-soon">Coming soon</span>
                        </div>
                      </Link>
                    )
                  })}
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </React.Fragment>
  );
}
