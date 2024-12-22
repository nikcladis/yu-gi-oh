import { CardType, PlayerId, Phase } from "./enums";

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
    hasDrawnCard: boolean;
  }

  export interface FieldArea {
    id: number;
    card: CardData | null;
  }

  export interface FieldState {
    playerSelf: FieldArea[];
    playerOpponent: FieldArea[];
  }

  export interface GameState {
    round: number;
    currentPlayer: PlayerId;
    currentPhase: Phase;
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
    | { type: "ADD_CARDS_TO_HAND"; playerId: PlayerId; amount: number }
    | {
        type: "UPDATE_LIFE_POINTS";
        playerId: PlayerId;
        amount: number;
        operation: "add" | "subtract";
      }
    | { type: "NEXT_PHASE" }
    | { type: "END_ROUND" }
    | { type: "START_GAME" };
}

export { CardType, PlayerId };
