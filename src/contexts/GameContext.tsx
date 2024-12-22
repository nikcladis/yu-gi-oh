import { useContextHook } from "@hooks/useContextHook";
import { gameReducer, initialState } from "@hooks/useGameState";
import {
  createContext,
  useReducer,
  ReactNode,
  useState,
  useEffect,
} from "react";

interface GameContextProps {
  state: GameState;
  dispatch: React.Dispatch<Action>;
  selectedCard: CardData | null;
  setSelectedCard: (card: CardData | null) => void;
}

const GameContext = createContext<GameContextProps | undefined>(undefined);

export const GameProvider: React.FC<{ children: ReactNode }> = ({
  children,
}) => {
  const [state, dispatch] = useReducer(gameReducer, initialState);
  const [selectedCard, setSelectedCard] = useState<CardData | null>(null);

  useEffect(() => {
    console.log("Game state updated:", state);
  }, [state]);

  return (
    <GameContext.Provider
      value={{ state, dispatch, selectedCard, setSelectedCard }}
    >
      {children}
    </GameContext.Provider>
  );
};

export const useGameContext = () =>
  useContextHook<GameContextProps>(GameContext, "GameContext");
