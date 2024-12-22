import { useReducer } from "react";
import { FIELD_STATE } from "@/constants/field";
import { GAME_CARDS } from "@constants/cards";
import { PlayerId } from "@/types/enums";

export const initialState: GameState = {
  players: {
    [PlayerId.One]: {
      lifePoints: 8000,
      deck: GAME_CARDS.playerOne,
      hand: [],
      graveyard: [],
      banished: [],
      selectedCard: null,
    },
    [PlayerId.Two]: {
      lifePoints: 8000,
      deck: GAME_CARDS.playerTwo,
      hand: [],
      graveyard: [],
      banished: [],
      selectedCard: null,
    },
  },
  field: {
    playerOne: FIELD_STATE.playerOne.map((field: FieldArea) => ({
      id: field.id,
      card: field.card || null,
    })),
    playerTwo: FIELD_STATE.playerTwo.map((field: FieldArea) => ({
      id: field.id,
      card: field.card || null,
    })),
  },
  round: 1,
};

export function gameReducer(state: GameState, action: Action): GameState {
  const { players, field } = state;
  const playerState = players[action.playerId];

  switch (action.type) {
    case "DRAW_CARD_FROM_DECK": {
      if (!playerState.deck || playerState.deck.length === 0) {
        console.warn(`Player ${action.playerId} has no cards in the deck.`);
        return state;
      }

      const drawnCard = playerState.deck[0];
      const updatedDeck = playerState.deck.slice(1);
      const updatedHand = [...(playerState.hand || []), drawnCard];

      return {
        ...state,
        players: {
          ...players,
          [action.playerId]: {
            ...playerState,
            deck: updatedDeck,
            hand: updatedHand,
          },
        },
      };
    }

    case "REMOVE_CARD_FROM_HAND": {
      const updatedHand = playerState.hand?.filter(
        (card) => card.id !== action.cardId
      );
      const removedCard = playerState.hand?.find(
        (card) => card.id === action.cardId
      );

      if (!removedCard) {
        console.warn(`Card with ID ${action.cardId} not found in hand.`);
        return state;
      }

      const updatedGraveyard = [...(playerState.graveyard || []), removedCard];

      return {
        ...state,
        players: {
          ...players,
          [action.playerId]: {
            ...playerState,
            hand: updatedHand,
            graveyard: updatedGraveyard,
          },
        },
      };
    }

    case "ADD_CARD_TO_FIELD": {
      const { fieldId, card } = action;
      if (!playerState.hand) {
        console.warn(`Player ${action.playerId} has no cards in hand.`);
        return state;
      }

      // Remove card from hand
      const updatedHand = playerState.hand.filter((c) => c.id !== card.id);

      // Determine which player's field to update
      const fieldKey =
        action.playerId === PlayerId.One ? "playerOne" : "playerTwo";

      const updatedFieldArea = field[fieldKey].map((area: FieldArea) =>
        area.id === fieldId ? { ...area, card } : area
      );

      return {
        ...state,
        players: {
          ...players,
          [action.playerId]: {
            ...playerState,
            hand: updatedHand,
          },
        },
        field: {
          ...field,
          [fieldKey]: updatedFieldArea,
        },
      };
    }

    case "SET_SELECTED_CARD": {
      return {
        ...state,
        players: {
          ...players,
          [action.playerId]: {
            ...playerState,
            selectedCard: action.card,
          },
        },
      };
    }

    case "ADD_CARDS_TO_HAND": {
      if (!playerState.deck) {
        console.warn(`Player ${action.playerId} has no deck.`);
        return state;
      }

      const cardsToMove = playerState.deck.slice(0, action.amount);
      const updatedDeck = playerState.deck.slice(action.amount);
      const updatedHand = [...(playerState.hand || []), ...cardsToMove];

      if (cardsToMove.length < action.amount) {
        console.warn(`Only ${cardsToMove.length} cards available in deck.`);
      }

      return {
        ...state,
        players: {
          ...players,
          [action.playerId]: {
            ...playerState,
            deck: updatedDeck,
            hand: updatedHand,
          },
        },
      };
    }

    default:
      return state;
  }
}

const useGameState = (): [GameState, React.Dispatch<Action>] => {
  return useReducer(gameReducer, initialState);
};

export default useGameState;
