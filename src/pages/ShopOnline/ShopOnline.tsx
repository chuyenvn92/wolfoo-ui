import React from "react";

import BoxWrapHead from "../../assets/box-wrap-head.png";

export default function ShopOnline() {
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
        <div className="w-full max-auto max-w-7xl">
          <div className="w-full max-w-[92%] my-0 mx-auto pb-[150px]">
            <div>
              <img src={BoxWrapHead} alt="BoxWrapHead" />
            </div>
          </div>
        </div>
      </div>
    </React.Fragment>
  );
}
