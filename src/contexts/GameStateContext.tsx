import {
  createContext,
  useContext,
  useReducer,
  ReactNode,
  useEffect,
} from "react";

import { gameReducer, initialState } from "@hooks/useGameState";

// Create the GameState Context
const GameStateContext = createContext<{
  state: State;
  dispatch: React.Dispatch<Action>;
}>({
  state: initialState,
  dispatch: () => undefined,
});

// Provide the GameState Context
interface GameStateProviderProps {
  children: ReactNode;
}

export const GameStateProvider: React.FC<GameStateProviderProps> = ({
  children,
}) => {
  const [state, dispatch] = useReducer(gameReducer, initialState);

  useEffect(() => {
    // Perform initial draw for Player 1 and Player 2
    dispatch({ type: "DRAW_CARDS_FROM_DECK", playerId: 1, numberOfCards: 5 });
    dispatch({ type: "DRAW_CARDS_FROM_DECK", playerId: 2, numberOfCards: 5 });
  }, []);

  console.log(state);
  return (
    <GameStateContext.Provider value={{ state, dispatch }}>
      {children}
    </GameStateContext.Provider>
  );
};

export const useGameState = () => {
  const context = useContext(GameStateContext);

  if (!context) {
    throw new Error("useGameState must be used within a GameStateProvider");
  }

  return context;
};
