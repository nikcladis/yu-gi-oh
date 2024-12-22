import blueEyesWhiteDragon from "@assets/monsters/blue-eyes-white-dragon.jpg";
import darkMagician from "@assets/monsters/dark-magician.jpg";
import { CardType } from "@/types/enums";

// import backImage from "@assets/back.png";

export const INITIAL_CARDS_ONE: CardData[] = [
  {
    id: 1,
    playerId: 1,
    name: "Dark Magician",
    image: darkMagician,
    attack: 2500,
    defense: 2100,
    type: CardType.Monster,
  },
  {
    id: 2,
    playerId: 1,
    name: "Blue-Eyes White Dragon",
    image: blueEyesWhiteDragon,
    attack: 3000,
    defense: 2500,
    type: CardType.Monster,
  },
  {
    id: 3,
    playerId: 1,
    name: "Dark Magician",
    image: darkMagician,
    attack: 2500,
    defense: 2100,
    type: CardType.Monster,
  },
  {
    id: 4,
    playerId: 1,
    name: "Blue-Eyes White Dragon",
    image: blueEyesWhiteDragon,
    attack: 3000,
    defense: 2500,
    type: CardType.Monster,
  },
  {
    id: 5,
    playerId: 1,
    name: "Dark Magician",
    image: darkMagician,
    attack: 2500,
    defense: 2100,
    type: CardType.Monster,
  },
  {
    id: 6,
    playerId: 1,
    name: "Blue-Eyes White Dragon",
    image: blueEyesWhiteDragon,
    attack: 3000,
    defense: 2500,
    type: CardType.Monster,
  },
  {
    id: 7,
    playerId: 1,
    name: "Dark Magician",
    image: darkMagician,
    attack: 2500,
    defense: 2100,
    type: CardType.Monster,
  },
];

export const INITIAL_CARDS_TWO: CardData[] = [
  {
    id: 1,
    playerId: 2,
    name: "Dark Magician",
    image: darkMagician,
    attack: 2500,
    defense: 2100,
    type: CardType.Monster,
  },
  {
    id: 2,
    playerId: 2,
    name: "Blue-Eyes White Dragon",
    image: blueEyesWhiteDragon,
    attack: 3000,
    defense: 2500,
    type: CardType.Monster,
  },
  {
    id: 3,
    playerId: 2,
    name: "Dark Magician",
    image: darkMagician,
    attack: 2500,
    defense: 2100,
    type: CardType.Monster,
  },
  {
    id: 4,
    playerId: 2,
    name: "Blue-Eyes White Dragon",
    image: blueEyesWhiteDragon,
    attack: 3000,
    defense: 2500,
    type: CardType.Monster,
  },
  {
    id: 5,
    playerId: 2,
    name: "Dark Magician",
    image: darkMagician,
    attack: 2500,
    defense: 2100,
    type: CardType.Monster,
  },
  {
    id: 6,
    playerId: 2,
    name: "Blue-Eyes White Dragon",
    image: blueEyesWhiteDragon,
    attack: 3000,
    defense: 2500,
    type: CardType.Monster,
  },
  {
    id: 7,
    playerId: 2,
    name: "Dark Magician",
    image: darkMagician,
    attack: 2500,
    defense: 2100,
    type: CardType.Monster,
  },
];

export const GAME_CARDS = {
  playerOne: [...INITIAL_CARDS_ONE, ...INITIAL_CARDS_ONE],
  playerTwo: [...INITIAL_CARDS_TWO, ...INITIAL_CARDS_TWO],
};
