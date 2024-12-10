import blueEyesWhiteDragon from "@assets/monsters/blue-eyes-white-dragon.jpg";
import darkMagician from "@assets/monsters/dark-magician.jpg";
import backImage from "@assets/back.png";

export const INITIAL_CARDS: CardData[] = [
  {
    id: 1,
    name: "Dark Magician",
    image: darkMagician,
    status: "inHand",
    attack: 2500,
    defense: 2100,
    type: "monster",
  },
  {
    id: 2,
    name: "Blue-Eyes White Dragon",
    image: blueEyesWhiteDragon,
    status: "inHand",
    attack: 3000,
    defense: 2500,
    type: "monster",
  },
  {
    id: 3,
    name: "Dark Magician",
    image: darkMagician,
    status: "inHand",
    attack: 2500,
    defense: 2100,
    type: "monster",
  },
  {
    id: 4,
    name: "Blue-Eyes White Dragon",
    image: blueEyesWhiteDragon,
    status: "inHand",
    attack: 3000,
    defense: 2500,
    type: "monster",
  },
  {
    id: 5,
    name: "Dark Magician",
    image: darkMagician,
    status: "inHand",
    attack: 2500,
    defense: 2100,
    type: "monster",
  },
];

export const OPPONENT_INITIAL_CARDS: CardData[] = [
  {
    id: 1,
    name: "Card 1",
    image: backImage,
    status: "inHand",
    attack: 0,
    defense: 0,
    type: "back",
  },
  {
    id: 2,
    name: "Card 2",
    image: backImage,
    status: "inHand",
    attack: 0,
    defense: 0,
    type: "back",
  },
  {
    id: 3,
    name: "Card 3",
    image: backImage,
    status: "inHand",
    attack: 0,
    defense: 0,
    type: "back",
  },
  {
    id: 4,
    name: "Card 4",
    image: backImage,
    status: "inHand",
    attack: 0,
    defense: 0,
    type: "back",
  },
  {
    id: 5,
    name: "Card 5",
    image: backImage,
    status: "inHand",
    attack: 0,
    defense: 0,
    type: "back",
  },
];
