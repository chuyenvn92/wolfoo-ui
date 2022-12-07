import React from "react";
import { Link } from "react-router-dom";
import { PortableText } from "@portabletext/react";
import moment from "moment";

import timeIcon from "../../assets/im_time.svg";

export interface IDiary {
  image: string;
  time: string;
  title: string;
  description?: any;
}

export default function DiaryItem({ image, time, title, description }: IDiary) {
  return (
    <React.Fragment>
      <Link className="" to={"/characters"}>
        <img src={image} alt="video" className="rounded-t-2xl" />
      </Link>
      <div className=" bg-corn-field p-6 rounded-b-2xl min-h-[263px]">
        <div className="flex items-center gap-2">
          <img src={timeIcon} className="time_icon" alt="timeIcon" />
          <p className="font-normal font-montserrat">{moment(time).format("DD MMM YYYY")}</p>
        </div>
        <Link to={"/characters"}>
          <h2 className="h-auto mt-4 mb-6 overflow-hidden text-xl font-bold text-left uppercase text-slate-blue text-ellipsis diaries_info_title">
            {title}
          </h2>
          <div className="overflow-hidden text-base font-semibold text-left font-montserrat text-ellipsis diaries_info_description">
            <PortableText value={description} />
          </div>
        </Link>
      </div>
    </React.Fragment>
  );
}
