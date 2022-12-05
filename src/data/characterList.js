import wolfooImg from "../assets/wolfoo.png";
import Lucy from "../assets/character-13.png";
import wolfMan from "../assets/mrs_wolf.png";
import wolfWoman from "../assets/ms_wolf.png";
import pandoWF from "../assets/Wf_pando.png";

import BlueBackground from "../assets/blue.svg";
import PinkBackground from "../assets/pink.svg";
import OrangeBackground from "../assets/orange.svg";
import PurpleBackground from "../assets/purple.svg";

export const characterList = [
  {
    id: 1,
    img: wolfooImg,
    characterBackground: BlueBackground,
    name: "Wolfoo",
    description: [
      <p>
        - 5 years old (Main character) <br></br>- Personality: Active, eager to
        learn, helpful, loves his sister Lucy. Wolfoo has always had faith
        <br></br>
        in a beautiful and peaceful world.<br></br>- Characteristic: A fine
        sense of smell, fan<br></br> of Superman, immature howl
      </p>,
    ],
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
];
