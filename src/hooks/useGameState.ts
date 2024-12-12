import { useReducer } from "react";
import {
  INITIAL_BOXES_PLAYER_1,
  INITIAL_BOXES_PLAYER_2,
} from "@constants/boxes";
import { INITIAL_GAME_CARDS } from "@constants/cards";

export const initialState: State = {
  player1: {
    cards: INITIAL_GAME_CARDS.player1,
    boxes: INITIAL_BOXES_PLAYER_1.reduce((acc, box) => {
      acc[box.id] = box.card || null;
      return acc;
    }, {} as Record<number, CardData | null>),
    selectedCard: null,
  },
  player2: {
    cards: INITIAL_GAME_CARDS.player2,
    boxes: INITIAL_BOXES_PLAYER_2.reduce((acc, box) => {
      acc[box.id] = box.card || null;
      return acc;
    }, {} as Record<number, CardData | null>),
    selectedCard: null,
  },
};

export const gameReducer = (state: State, action: Action): State => {
  const { playerId } = action;

  switch (action.type) {
    case "DRAW_CARD_FROM_DECK":
      return {
        ...state,
        [`player${playerId}`]: {
          ...state[`player${playerId}`],
          cards: [...state[`player${playerId}`].cards, action.card],
        },
      };
    case "REMOVE_CARD_FROM_HAND":
      return {
        ...state,
        [`player${playerId}`]: {
          ...state[`player${playerId}`],
          cards: state[`player${playerId}`].cards.filter(
            (card) => card.id !== action.cardId
          ),
        },
      };
    case "ADD_CARD_TO_FIELD":
      return {
        ...state,
        [`player${playerId}`]: {
          ...state[`player${playerId}`],
          boxes: {
            ...state[`player${playerId}`].boxes,
            [action.boxId]: action.card,
          },
        },
      };
    case "SET_SELECTED_CARD":
      return {
        ...state,
        [`player${playerId}`]: {
          ...state[`player${playerId}`],
          selectedCard: action.card,
        },
      };
    default:
      return state;
  }
};

const useGameState = () => {
  return useReducer(gameReducer, initialState);
};

export default useGameState;
