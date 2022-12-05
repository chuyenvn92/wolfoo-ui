import { useState } from "react";

import { characterList } from "../../data/characterList";
import CharacterItem from "../../components/CharacterItem";

export interface ICharacter {
  id: number;
  img: string;
  characterBackground: string;
  name: string;
  description?: string;
}

export default function Characters() {
  const [currentCharacter, setCurrentCharacter] = useState<ICharacter>();

  const handleSelectCharacter = (id: number) => {
    const result = characterList.find((item) => item.id === id);

    setCurrentCharacter(result as ICharacter);
  };

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
                  currentCharacter={currentCharacter}
                  handleSelectCharacter={handleSelectCharacter}
                />
              );
            })}
          </div>
        </div>
      </div>
    </div>
  );
}
