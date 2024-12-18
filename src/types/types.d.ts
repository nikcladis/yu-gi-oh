declare global {
  type PlayerState = {
    cards: CardData[];
    boxes: Record<number, CardData | null>;
    selectedCard: CardData | null;
  };

  type State = {
    player1: PlayerState;
    player2: PlayerState;
  };

  type Action =
    | { type: "REMOVE_CARD_FROM_HAND"; cardId: number; playerId: 1 | 2 }
    | {
        type: "ADD_CARD_TO_FIELD";
        card: CardData;
        boxId: number;
        playerId: 1 | 2;
      }
    | { type: "SET_SELECTED_CARD"; card: CardData | null; playerId: 1 | 2 }
    | { type: "DRAW_CARDS_FROM_DECK"; playerId: 1 | 2; numberOfCards: number };

  type CardStatus =
    | "inDeck"
    | "inHand"
    | "inBattle"
    | "inGraveyard"
    | "inBanished";

  type CardPosition = "inAttack" | "inDefense" | null;

  type CardType = "Monster" | "Spell" | "Trap";

  interface CardBase {
    id: number;
    playerId: 1 | 2;
    name: string;
    image: string;
    status: CardStatus;
    type: CardType;
    description?: string;
  }

  interface CardMoster extends CardBase {
    type: "Monster";
    position: CardPosition;
    attack: number;
    defense: number;
    level: number;
    effect?: string;
  }

  interface CardSpell extends CardBase {
    type: "Spell";
    effect: string;
    isContinuous?: boolean;
  }

  interface CardTrap extends CardBase {
    type: "Trap";
    effect: string;
    isCounter?: boolean;
  }

  type CardData = CardMoster | CardSpell | CardTrap;

  interface BoxAreaData {
    id: number;
    card: CardData | null;
  }
}

export {};
