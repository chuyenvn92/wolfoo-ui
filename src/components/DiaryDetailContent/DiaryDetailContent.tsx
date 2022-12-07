import { PortableText } from "@portabletext/react";

interface IProps {
  content: any;
}

export default function DiaryDetailContent({ content }: IProps) {
  return (
    <div className="bg-mellow-apricot relative min-h-[1200px] z-[1] diaries-child-content">
      <div className="w-full mx-auto max-w-7xl">
        <div className="absolute bg-corn-field rounded-[50px] text-slate-blue py-[50px] px-[70px] w-[90%] m-auto mt-[12%] mb-[20%] font-montserrat">
          <PortableText value={content} />
        </div>
      </div>
    </div>
  );
}
