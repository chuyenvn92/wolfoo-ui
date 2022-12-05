import wolfooImg from "../../assets/wolfoo.png";
import blueBackground from "../../assets/blue.svg";

export default function Characters() {
  return (
    <div>
      <div className="characters-banner">
        <div className="w-full mx-auto max-w-7xl">
          <h2 className="mb-24 text-5xl text-center uppercase text-slate-blue">
            Characters
          </h2>
        </div>
      </div>

      <div className="relative characters-main pb-[500px] mt-[-100px] pt-[100px]">
        <div className="relative z-50 w-full mx-auto max-w-7xl">
          <div className="flex flex-wrap">
            <div className="w-1/4 mb-4">
              <div className="flex items-end mt-[35px] visible">
                <img src={wolfooImg} alt="wolfoo"  />
                <img src={blueBackground} alt="background" />
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}