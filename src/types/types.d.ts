declare global {
  type State = {
    player1: {
      cards: CardData[];
      boxes: Record<number, CardData | null>;
      selectedCard: CardData | null;
    };
    player2: {
      cards: CardData[];
      boxes: Record<number, CardData | null>;
      selectedCard: CardData | null;
    };
  };

  type Action =
    | { type: "DRAW_CARD_FROM_DECK"; card: CardData; playerId: 1 | 2 }
    | { type: "REMOVE_CARD_FROM_HAND"; cardId: number; playerId: 1 | 2 }
    | {
        type: "ADD_CARD_TO_FIELD";
        card: CardData;
        boxId: number;
        playerId: 1 | 2;
      }
    | { type: "SET_SELECTED_CARD"; card: CardData | null; playerId: 1 | 2 };

  type CardStatus = "inDeck" | "inHand" | "inBattle" | "inGraveyard";

  interface CardData {
    id: number;
    playerId: 1 | 2;
    name: string;
    type: string;
    image: string;
    status: CardStatus;
    attack?: number;
    defense?: number;
    description?: string;
  }
  

  interface BoxAreaData {
    id: number;
    card: CardData | null;
  }
}

export {};
