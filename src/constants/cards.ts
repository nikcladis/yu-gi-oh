import blueEyesWhiteDragon from "@assets/monsters/blue-eyes-white-dragon.jpg";
import darkMagician from "@assets/monsters/dark-magician.jpg";
// import backImage from "@assets/back.png";

export const INITIAL_CARDS: CardData[] = [
  {
    id: 1,
    playerId: 1,
    name: "Dark Magician",
    image: darkMagician,
    status: "inHand",
    attack: 2500,
    defense: 2100,
    type: "monster",
  },
  {
    id: 2,
    playerId: 1,
    name: "Blue-Eyes White Dragon",
    image: blueEyesWhiteDragon,
    status: "inHand",
    attack: 3000,
    defense: 2500,
    type: "monster",
  },
  {
    id: 3,
    playerId: 1,
    name: "Dark Magician",
    image: darkMagician,
    status: "inHand",
    attack: 2500,
    defense: 2100,
    type: "monster",
  },
  {
    id: 4,
    playerId: 1,
    name: "Blue-Eyes White Dragon",
    image: blueEyesWhiteDragon,
    status: "inHand",
    attack: 3000,
    defense: 2500,
    type: "monster",
  },
  {
    id: 5,
    playerId: 1,
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
    playerId: 2,
    name: "Dark Magician",
    image: darkMagician,
    status: "inHand",
    attack: 2500,
    defense: 2100,
    type: "monster",
  },
  {
    id: 2,
    playerId: 2,
    name: "Blue-Eyes White Dragon",
    image: blueEyesWhiteDragon,
    status: "inHand",
    attack: 3000,
    defense: 2500,
    type: "monster",
  },
  {
    id: 3,
    playerId: 2,
    name: "Dark Magician",
    image: darkMagician,
    status: "inHand",
    attack: 2500,
    defense: 2100,
    type: "monster",
  },
  {
    id: 4,
    playerId: 2,
    name: "Blue-Eyes White Dragon",
    image: blueEyesWhiteDragon,
    status: "inHand",
    attack: 3000,
    defense: 2500,
    type: "monster",
  },
  {
    id: 5,
    playerId: 2,
    name: "Dark Magician",
    image: darkMagician,
    status: "inHand",
    attack: 2500,
    defense: 2100,
    type: "monster",
  },
];

export const INITIAL_GAME_CARDS = {
  player1: INITIAL_CARDS,
  player2: OPPONENT_INITIAL_CARDS,
};
