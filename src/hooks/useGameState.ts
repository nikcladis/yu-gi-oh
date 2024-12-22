import { useReducer } from "react";
import { FIELD_STATE } from "@/constants/field";
import { GAME_CARDS } from "@constants/cards";
import { PlayerId } from "@/types/enums";
import { Phase } from "@/types/enums";

export const initialState: GameState = {
  players: {
    [PlayerId.Self]: {
      lifePoints: 8000,
      deck: GAME_CARDS.playerSelf,
      hand: [],
      graveyard: [],
      banished: [],
      selectedCard: null,
      hasDrawnCard: false,
    },
    [PlayerId.Opponent]: {
      lifePoints: 8000,
      deck: GAME_CARDS.playerOpponent,
      hand: [],
      graveyard: [],
      banished: [],
      selectedCard: null,
      hasDrawnCard: false,
    },
  },
  field: {
    playerSelf: FIELD_STATE.playerSelf.map((field: FieldArea) => ({
      id: field.id,
      card: field.card || null,
    })),
    playerOpponent: FIELD_STATE.playerOpponent.map((field: FieldArea) => ({
      id: field.id,
      card: field.card || null,
    })),
  },
  round: 1,
  currentPlayer: PlayerId.Self,
  currentPhase: Phase.Draw,
};

export function gameReducer(
  state: GameState,
  action: Action & { playerId?: PlayerId }
): GameState {
  const { players, field } = state;
  const playerState = players[action.playerId as PlayerId];

  switch (action.type) {
    case "DRAW_CARD_FROM_DECK": {
      if (playerState.hasDrawnCard) {
        console.warn("Already drawn a card this turn");
        return state;
      }

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
            hasDrawnCard: true,
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
        action.playerId === PlayerId.Self ? "playerSelf" : "playerOpponent";

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

    case "UPDATE_LIFE_POINTS": {
      const currentPoints = playerState.lifePoints;
      const newPoints =
        action.operation === "add"
          ? currentPoints + action.amount
          : currentPoints - action.amount;

      // Ensure life points don't go below 0
      const updatedPoints = Math.max(0, newPoints);

      return {
        ...state,
        players: {
          ...players,
          [action.playerId]: {
            ...playerState,
            lifePoints: updatedPoints,
          },
        },
      };
    }

    case "START_GAME": {
      return {
        ...state,
        round: 1,
        currentPlayer: PlayerId.Self,
      };
    }

    case "NEXT_PHASE": {
      const phases = Object.values(Phase);
      const currentIndex = phases.indexOf(state.currentPhase);
      const nextIndex = (currentIndex + 1) % phases.length;

      if (phases[nextIndex] === Phase.Draw) {
        // If we're going back to Draw phase, it means end of turn
        return gameReducer(state, { type: "END_ROUND" });
      }

      return {
        ...state,
        currentPhase: phases[nextIndex],
      };
    }

    case "END_ROUND": {
      const nextPlayer =
        state.currentPlayer === PlayerId.Self
          ? PlayerId.Opponent
          : PlayerId.Self;

      return {
        ...state,
        round: nextPlayer === PlayerId.Self ? state.round + 1 : state.round,
        currentPlayer: nextPlayer,
        currentPhase: Phase.Draw,
        players: {
          ...players,
          [nextPlayer]: {
            ...players[nextPlayer],
            hasDrawnCard: false,
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
