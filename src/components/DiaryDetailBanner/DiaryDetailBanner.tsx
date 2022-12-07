import moment from "moment";

interface IProps {
  style: React.CSSProperties;
  createdAt: string;
  title: string;
}

export default function DiaryDetailBanner({ style, createdAt, title }: IProps) {
  return (
    <div style={style} className="diaries-child-banner">
      <div className="relative w-full max-auto max-w-7xl">
        <div className="flex flex-col items-center justify-center">
          <p className="mb-4 text-2xl text-white font-montserrat">{`by admin ${moment(
            createdAt
          ).format("DD MMM YYYY")}`}</p>
          <p className="text-5xl text-center text-white">{title}</p>
        </div>
      </div>
    </div>
  );
}
