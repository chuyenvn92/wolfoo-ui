import DiariesSlider from "../DiariesSilder";

export default function HomeDiaries() {
  return (
    <div className="home_diaries bg-caribbean-green min-h-[1000px] relative">
      <div className="w-full max-w-7xl mx-auto z-[1]">
        <h2 className="mb-16 text-5xl text-center text-white uppercase ">
          wolfoo diaries
        </h2>
        <DiariesSlider />
      </div>
    </div>
  );
}
