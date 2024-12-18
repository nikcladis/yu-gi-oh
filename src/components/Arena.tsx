import { useEffect, useRef } from "react";
import useGameState from "@hooks/useGameState";
import FieldGrid from "@components/Field/FieldGrid";
import PlayerHand from "@components/Hand/PlayerHand";

const Arena: React.FC = () => {
  const [{ player1, player2 }, dispatch] = useGameState();

  const hasDispatched = useRef(false);

  useEffect(() => {
    // Prevent running this effect more than once, even in Strict Mode
    if (hasDispatched.current) return;
    hasDispatched.current = true;

    // Draw 5 cards in first round for each player
    dispatch({ type: "DRAW_CARDS_FROM_DECK", playerId: 1, numberOfCards: 5 });
    dispatch({ type: "DRAW_CARDS_FROM_DECK", playerId: 2, numberOfCards: 5 });
  }, [dispatch]);

  const removeCardFromHand = (cardId: number, playerId: 1 | 2) => {
    dispatch({ type: "REMOVE_CARD_FROM_HAND", cardId, playerId });
  };

  const addCardToField = (boxId: number, card: CardData, playerId: 1 | 2) => {
    dispatch({ type: "ADD_CARD_TO_FIELD", card, boxId, playerId });
  };

  const handleDropCardToField = (
    card: CardData,
    boxId: number,
    playerId: 1 | 2
  ) => {
    // Both remove from hand and add to field
    removeCardFromHand(card.id, playerId);
    addCardToField(boxId, card, playerId);
  };

  return (
    <div className="grid grid-rows-10 gap-2 row-span-8 col-span-5">
      {/* Player 2 hand */}
      <PlayerHand playerId={2} />
      <div className="text-white row-span-6 grid grid-rows-11">
        {/* Player 2 field */}
        <FieldGrid
          boxes={player2.boxes}
          playerId={2}
          onDrop={(card, boxId) => handleDropCardToField(card, boxId, 2)}
        />
        <div className="row-span-1"></div>
        {/* Player 1 field */}
        <FieldGrid
          boxes={player1.boxes}
          playerId={1}
          onDrop={(card, boxId) => handleDropCardToField(card, boxId, 1)}
        />
      </div>
      {/* Player 1 hand */}
      <PlayerHand playerId={1} />
    </div>
  );
};

export default Arena;
