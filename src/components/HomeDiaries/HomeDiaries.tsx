import DiariesSlider from "../DiariesSilder";

interface IProps {
  diariesData: any;
}

export default function HomeDiaries({ diariesData }: IProps) {
  return (
    <div className="home_diaries bg-caribbean-green min-h-[1000px] relative">
      <div className="w-full max-w-7xl mx-auto z-[1]">
        <h2 className="mb-16 text-5xl text-center text-white uppercase ">
          wolfoo diaries
        </h2>
        <DiariesSlider diariesData={diariesData} />
      </div>
    </div>
  );
}
