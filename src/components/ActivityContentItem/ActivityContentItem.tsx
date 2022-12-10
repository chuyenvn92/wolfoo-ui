interface IProps {
  image: string;
}

export default function ActivityContentItem({ image }: IProps) {
  return (
    <div className="flex flex-col">
      <a href="/" className="relative inline-block preview-file">
        <img
          src={image}
          alt="previewImg"
          className="relative z-[1] rounded-[70px]"
        />
      </a>
      <a href="/" className="pt-4 mt-6 text-2xl text-center text-slate-blue">
        Download
      </a>
    </div>
  );
}
