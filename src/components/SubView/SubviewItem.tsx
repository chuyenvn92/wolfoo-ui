import clsx from "clsx";

interface IProps {
  index: number;
  image: string;
  link: string;
  viewCount?: number;
  subCount?: number;
}

export default function SubviewItem({
  index,
  image,
  viewCount,
  subCount,
  link,
}: IProps) {
  return (
    <div
      className={clsx(
        "w-1/2 px-10 py-6",
        index % 2 === 0 && "flex justify-end"
      )}
    >
      <a href={link} className="relative inline-block animated_custom">
        <img src={image} alt="subviewImg" />

        {subCount && (
          <div className="absolute w-full text-center top-1/2 left-1/2 translate-x-[-50%]">
            <span className="text-4xl font-bold text-white font-montserrat">
              {subCount}M{" "}
            </span>
            <span className="text-2xl font-bold text-slate-blue font-montserrat">
              subs
            </span>
          </div>
        )}

        {viewCount && (
          <div className="absolute w-full text-center top-[65%] left-1/2 translate-x-[-50%]">
            <span className="text-4xl font-bold text-white font-montserrat">
              {viewCount}M{" "}
            </span>
            <span className="text-2xl font-bold text-slate-blue font-montserrat">
              views
            </span>
          </div>
        )}
      </a>
    </div>
  );
}
