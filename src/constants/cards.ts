import blueEyesWhiteDragon from "@assets/monsters/blue-eyes-white-dragon.jpg";
import darkMagician from "@assets/monsters/dark-magician.jpg";
import { CardType, PlayerId } from "@/types/enums";
import backImage from "@assets/back.png";

export const INITIAL_CARDS_SELF: CardData[] = [
  {
    id: 1,
    playerId: PlayerId.Self,
    name: "Dark Magician",
    image: darkMagician,
    attack: 2500,
    defense: 2100,
    type: CardType.Monster,
    description:
      "The ultimate wizard in terms of attack and defense. Serves as a key card in many powerful combinations.",
  },
  {
    id: 2,
    playerId: PlayerId.Self,
    name: "Blue-Eyes White Dragon",
    image: blueEyesWhiteDragon,
    attack: 3000,
    defense: 2500,
    type: CardType.Monster,
    description:
      "This legendary dragon is a powerful engine of destruction. Virtually invincible, very few have faced this awesome creature and lived to tell the tale.",
  },
  {
    id: 3,
    playerId: PlayerId.Self,
    name: "Dark Magician",
    image: darkMagician,
    attack: 2500,
    defense: 2100,
    type: CardType.Monster,
    description:
      "The ultimate wizard in terms of attack and defense. Serves as a key card in many powerful combinations.",
  },
  {
    id: 4,
    playerId: PlayerId.Self,
    name: "Blue-Eyes White Dragon",
    image: blueEyesWhiteDragon,
    attack: 3000,
    defense: 2500,
    type: CardType.Monster,
    description:
      "This legendary dragon is a powerful engine of destruction. Virtually invincible, very few have faced this awesome creature and lived to tell the tale.",
  },
  {
    id: 5,
    playerId: PlayerId.Self,
    name: "Dark Magician",
    image: darkMagician,
    attack: 2500,
    defense: 2100,
    type: CardType.Monster,
    description:
      "The ultimate wizard in terms of attack and defense. Serves as a key card in many powerful combinations.",
  },
  {
    id: 6,
    playerId: PlayerId.Self,
    name: "Blue-Eyes White Dragon",
    image: blueEyesWhiteDragon,
    attack: 3000,
    defense: 2500,
    type: CardType.Monster,
    description:
      "This legendary dragon is a powerful engine of destruction. Virtually invincible, very few have faced this awesome creature and lived to tell the tale.",
  },
  {
    id: 7,
    playerId: PlayerId.Self,
    name: "Dark Magician",
    image: darkMagician,
    attack: 2500,
    defense: 2100,
    type: CardType.Monster,
    description:
      "The ultimate wizard in terms of attack and defense. Serves as a key card in many powerful combinations.",
  },
];

export const INITIAL_CARDS_OPPONENT: CardData[] = [
  {
    id: 1,
    playerId: PlayerId.Opponent,
    name: "Dark Magician",
    image: darkMagician,
    attack: 2500,
    defense: 2100,
    type: CardType.Monster,
    description:
      "The ultimate wizard in terms of attack and defense. Serves as a key card in many powerful combinations.",
  },
  {
    id: 2,
    playerId: PlayerId.Opponent,
    name: "Blue-Eyes White Dragon",
    image: blueEyesWhiteDragon,
    attack: 3000,
    defense: 2500,
    type: CardType.Monster,
    description:
      "This legendary dragon is a powerful engine of destruction. Virtually invincible, very few have faced this awesome creature and lived to tell the tale.",
  },
  {
    id: 3,
    playerId: PlayerId.Opponent,
    name: "Dark Magician",
    image: darkMagician,
    attack: 2500,
    defense: 2100,
    type: CardType.Monster,
    description:
      "The ultimate wizard in terms of attack and defense. Serves as a key card in many powerful combinations.",
  },
  {
    id: 4,
    playerId: PlayerId.Opponent,
    name: "Blue-Eyes White Dragon",
    image: blueEyesWhiteDragon,
    attack: 3000,
    defense: 2500,
    type: CardType.Monster,
    description:
      "This legendary dragon is a powerful engine of destruction. Virtually invincible, very few have faced this awesome creature and lived to tell the tale.",
  },
  {
    id: 5,
    playerId: PlayerId.Opponent,
    name: "Dark Magician",
    image: darkMagician,
    attack: 2500,
    defense: 2100,
    type: CardType.Monster,
    description:
      "The ultimate wizard in terms of attack and defense. Serves as a key card in many powerful combinations.",
  },
  {
    id: 6,
    playerId: PlayerId.Opponent,
    name: "Blue-Eyes White Dragon",
    image: blueEyesWhiteDragon,
    attack: 3000,
    defense: 2500,
    type: CardType.Monster,
    description:
      "This legendary dragon is a powerful engine of destruction. Virtually invincible, very few have faced this awesome creature and lived to tell the tale.",
  },
  {
    id: 7,
    playerId: PlayerId.Opponent,
    name: "Dark Magician",
    image: darkMagician,
    attack: 2500,
    defense: 2100,
    type: CardType.Monster,
    description:
      "The ultimate wizard in terms of attack and defense. Serves as a key card in many powerful combinations.",
  },
];

export const GAME_CARDS = {
  playerSelf: [...INITIAL_CARDS_SELF],
  playerOpponent: [...INITIAL_CARDS_OPPONENT],
};

export const BACK_CARD = {
  id: 0,
  playerId: PlayerId.Self,
  name: "?",
  type: CardType.Trap,
  description: "?",
  image: backImage,
};
