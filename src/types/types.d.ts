declare global {
  type CardStatus = "inDeck" | "inHand" | "inBattle" | "inGraveyard";

  interface CardData {
    id: number;
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
