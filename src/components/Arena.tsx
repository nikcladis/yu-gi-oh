import useGameState from "@/hooks/useGameState";
import FieldGrid from "./Field/FieldGrid";
import PlayerHand from "./Hand/PlayerHand";

const Arena: React.FC = () => {
  const [{ player1, player2 }, dispatch] = useGameState();

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
    removeCardFromHand(card.id, playerId);
    addCardToField(boxId, card, playerId);
  };

  return (
    <div className="grid grid-rows-10 gap-2 row-span-8 col-span-5">
      {/* Render Player 2's Hand */}
      <PlayerHand cards={player2.cards} />
      {/* Render Field */}
      <div className="text-white row-span-6 grid grid-rows-11">
        <FieldGrid
          boxes={player2.boxes}
          onDrop={(card, boxId) => handleDropCardToField(card, boxId, 2)}
        />
        <div className="row-span-1"></div>
        <FieldGrid
          boxes={player1.boxes}
          onDrop={(card, boxId) => handleDropCardToField(card, boxId, 1)}
        />
      </div>
      {/* Render Player 1's Hand */}
      <PlayerHand cards={player1.cards} />
    </div>
  );
};

export default Arena;
