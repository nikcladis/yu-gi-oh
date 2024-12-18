import { useCardInfoContext } from "@/contexts/CardInfoContext";
import useGameState from "@/hooks/useGameState";
import CardPreview from "@components/Layout/RightPanel/CardPreview";
import Deck from "@components/Layout/RightPanel/Deck";
import { useCallback } from "react";

const RightColumn: React.FC = () => {
  const [state, dispatch] = useGameState();
  const { selectedCard } = useCardInfoContext();

  // Function to draw a specified number of cards for Player 1
  const handleDrawCards = useCallback(
    (numberOfCards: number) => {
      const playerId = 1;
      const player = state[`player${playerId}`];
      const deckCards = player.cards.filter((card) => card.status === "inDeck");

      if (deckCards.length === 0) {
        alert("Deck is empty!");
        return;
      }

      const actualDrawCount = Math.min(numberOfCards, deckCards.length);
      // const cardsToDraw = deckCards.slice(0, actualDrawCount);

      dispatch({
        type: "DRAW_CARDS_FROM_DECK",
        playerId,
        numberOfCards: actualDrawCount,
      });
    },
    [dispatch, state]
  );

  const deckSize = state.player1.cards.filter(
    (card) => card.status === "inDeck"
  ).length;

  return (
    <div className="border-4 border-purple-500 p-4 text-white col-span-2 row-span-8 grid grid-rows-11 gap-4">
      {/* <Deck playerId={2} /> */}
      <CardPreview card={selectedCard} />
      <Deck deckSize={deckSize} onDraw={handleDrawCards} />
    </div>
  );
};

export default RightColumn;
