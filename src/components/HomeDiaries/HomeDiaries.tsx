import DiariesSlider from "../DiariesSilder";

export default function HomeDiaries() {
  return (
    <div className="home_diaries bg-caribbean-green min-h-[1000px] relative">
      <div className="w-full z-[1]">
        <div className="max-w-7xl">
          <h2 className="mb-16 text-5xl text-center text-white uppercase ">
            wolfoo diaries
          </h2>
          <DiariesSlider />
        </div>
      </div>
    </div>
  );
}
