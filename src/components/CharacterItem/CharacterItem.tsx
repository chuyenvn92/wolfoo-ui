import clsx from "clsx";
import React from "react";
import { ICharacter } from "../../pages/Characters/Characters";
import descriptionBG from "../../assets/item-bg.png";

interface IProps {
  id: number;
  img: string;
  characterBackground: string;
  name: string;
  handleSelectCharacter: (id: number) => void;
  currentCharacter?: ICharacter;
}

export default function CharacterItem({
  id,
  img,
  characterBackground,
  name,
  handleSelectCharacter,
  currentCharacter,
}: IProps) {
  return (
    <React.Fragment>
      <div
        className={clsx(
          "w-1/4 p-4 mb-4",
          currentCharacter?.id === id && "mb-[733px]"
        )}
      >
        <div className="flex items-end relative h-[262px] mt-[35px] overflow-visible">
          <img
            src={img}
            alt="wolfoo"
            className="max-w-full max-h-[247px] relative block z-[1] cursor-pointer mx-auto mt-0 mb-[43px]"
            onClick={() => handleSelectCharacter(id)}
          />
          <img
            src={characterBackground}
            alt=""
            className="absolute left-1/2 bottom-[10px] translate-x-[-50%] max-w-full overflow-visible stroke-transparent stroke-[8px] charac-thumn-svg"
          />
        </div>
        <p className="mt-3 text-2xl font-bold text-center text-slate-blue">
          {name}
        </p>
        {currentCharacter?.id === id && (
          <div className="charac-detail">
            <img
              src={currentCharacter.img}
              alt="imgCharacter"
              className=" w-[250px] block mr-[-107px] relative z-[1]"
            />
            <div className="relative py-[15%] px-[18%]">
              <div className="relative z-[1] text-5xl mb-10 text-center">
                {currentCharacter.name}
              </div>
              {currentCharacter?.description && (
                <div className="relative z-[1] text-2xl font-montserrat">
                  {currentCharacter.description}
                </div>
              )}
              <img
                src={descriptionBG}
                alt="description"
                className="charac_description_bg"
              />
            </div>
          </div>
        )}
      </div>
    </React.Fragment>
  );
}
