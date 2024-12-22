import { CardType, PlayerId } from "./enums";

declare global {
  // interfaces.ts
  export interface CardData {
    id: number;
    playerId: PlayerId;
    name: string;
    image: string;
    type: CardType;
    attack?: number;
    defense?: number;
    description?: string;
  }

  export interface PlayerState {
    lifePoints: number;
    deck: CardData[] | null;
    hand: CardData[] | null;
    graveyard: CardData[] | null;
    banished: CardData[] | null;
    selectedCard: CardData | null;
  }

  export interface FieldArea {
    id: number;
    card: CardData | null;
  }

  export interface FieldState {
    playerOne: FieldArea[];
    playerTwo: FieldArea[];
  }

  export interface GameState {
    round: number;
    field: FieldState;
    players: Record<PlayerId, PlayerState>;
  }

  // actions.ts
  export type Action =
    | { type: "DRAW_CARD_FROM_DECK"; playerId: PlayerId }
    | { type: "REMOVE_CARD_FROM_HAND"; cardId: number; playerId: PlayerId }
    | {
        type: "ADD_CARD_TO_FIELD";
        card: CardData;
        fieldId: number;
        playerId: PlayerId;
      }
    | { type: "SET_SELECTED_CARD"; card: CardData | null; playerId: PlayerId }
    | { type: "ADD_CARDS_TO_HAND"; playerId: PlayerId; amount: number };
}

export { CardType, PlayerId };
