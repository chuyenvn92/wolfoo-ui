import { useMemo } from "react";
import wolfooImg from "../../assets/wolfoo.png";
import Lucy from "../../assets/character-13.png";
import wolfMan from "../../assets/mrs_wolf.png";
import wolfWoman from "../../assets/ms_wolf.png";
import pandoWF from "../../assets/Wf_pando.png";

import BlueBackground from "../../assets/blue.svg";
import PinkBackground from "../../assets/pink.svg";
import OrangeBackground from "../../assets/orange.svg";
import PurpleBackground from "../../assets/purple.svg";

import CharacterItem from "../../components/CharacterItem";

export default function Characters() {
  const characterList = useMemo(
    () => [
      {
        id: 1,
        img: wolfooImg,
        characterBackground: BlueBackground,
        name: "Wolfoo",
      },
      {
        id: 2,
        img: Lucy,
        characterBackground: PinkBackground,
        name: "Lucy",
      },
      {
        id: 3,
        img: wolfWoman,
        characterBackground: OrangeBackground,
        name: "Mrs. Wolf",
      },
      {
        id: 4,
        img: wolfMan,
        characterBackground: PurpleBackground,
        name: "Mr. Wolf",
      },
      {
        id: 5,
        img: pandoWF,
        characterBackground: BlueBackground,
        name: "Pando",
      },
    ],
    []
  );

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
            {characterList.map(({ img, characterBackground, name, id }) => {
              return (
                <CharacterItem
                  key={id}
                  id={id}
                  img={img}
                  name={name}
                  characterBackground={characterBackground}
                />
              );
            })}
          </div>
        </div>
      </div>
    </div>
  );
}
