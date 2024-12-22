import { useEffect } from "react";
import { useGameContext } from "@contexts/GameContext";
import { PlayerId } from "@/types/enums";

export const useKeyboardShortcuts = () => {
  const { dispatch } = useGameContext();

  useEffect(() => {
    const handleKeyPress = (e: KeyboardEvent) => {
      switch (e.key) {
        case "Space":
          dispatch({ type: "END_ROUND" });
          break;
        case "d":
          dispatch({ type: "DRAW_CARD_FROM_DECK", playerId: PlayerId.Self });
          break;
        // Add more shortcuts
      }
    };

    window.addEventListener("keydown", handleKeyPress);
    return () => window.removeEventListener("keydown", handleKeyPress);
  }, [dispatch]);
};
