import { useReducer } from "react";
import {
  INITIAL_BOXES_PLAYER_1,
  INITIAL_BOXES_PLAYER_2,
} from "@constants/boxes";
import { INITIAL_GAME_CARDS } from "@constants/cards";
import { shuffle } from "lodash";

export const initialState: State = {
  player1: {
    cards: shuffle(INITIAL_GAME_CARDS.player1),
    boxes: INITIAL_BOXES_PLAYER_1.reduce((acc, box) => {
      acc[box.id] = box.card || null;
      return acc;
    }, {} as Record<number, CardData | null>),
    selectedCard: null,
  },
  player2: {
    cards: shuffle(INITIAL_GAME_CARDS.player2),
    boxes: INITIAL_BOXES_PLAYER_2.reduce((acc, box) => {
      acc[box.id] = box.card || null;
      return acc;
    }, {} as Record<number, CardData | null>),
    selectedCard: null,
  },
};

// src/hooks/useGameState.ts

export const gameReducer = (state: State, action: Action): State => {
  const { playerId } = action;

  // Validate playerId
  if (!state[`player${playerId}`]) {
    console.error(`Invalid playerId: ${playerId}`);
    return state;
  }

  switch (action.type) {
    case "DRAW_CARDS_FROM_DECK": {
      const player = state[`player${playerId}`];
      const deckCards = player.cards.filter((card) => card.status === "inDeck");

      if (deckCards.length === 0) {
        console.error("Deck is empty!");
        return state;
      }

      const numberOfCardsToDraw = action.numberOfCards;
      const actualDrawCount = Math.min(numberOfCardsToDraw, deckCards.length);
      const cardsToDraw = deckCards.slice(0, actualDrawCount);

      const updatedCards = player.cards.map((card) =>
        cardsToDraw.find((drawnCard) => drawnCard.id === card.id)
          ? { ...card, status: "inHand" }
          : card
      );

      return {
        ...state,
        [`player${playerId}`]: {
          ...player,
          cards: updatedCards,
        },
      };
    }

    case "REMOVE_CARD_FROM_HAND": {
      const updatedCards = state[`player${playerId}`].cards.map((card) =>
        card.id === action.cardId ? { ...card, status: "inGraveyard" } : card
      );

      return {
        ...state,
        [`player${playerId}`]: {
          ...state[`player${playerId}`],
          cards: updatedCards,
        },
      };
    }

    case "ADD_CARD_TO_FIELD": {
      const { boxId, card } = action;

      // Update the card's status to 'inBattle'
      const updatedCards = state[`player${playerId}`].cards.map((c) =>
        c.id === card.id ? { ...c, status: "inBattle" } : c
      );

      return {
        ...state,
        [`player${playerId}`]: {
          ...state[`player${playerId}`],
          boxes: {
            ...state[`player${playerId}`].boxes,
            [boxId]: card,
          },
          cards: updatedCards,
        },
      };
    }

    case "SET_SELECTED_CARD": {
      return {
        ...state,
        [`player${playerId}`]: {
          ...state[`player${playerId}`],
          selectedCard: action.card,
        },
      };
    }

    default:
      return state;
  }
};

const useGameState = () => {
  return useReducer(gameReducer, initialState);
};

export default useGameState;
