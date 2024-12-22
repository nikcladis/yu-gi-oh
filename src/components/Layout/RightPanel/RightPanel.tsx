import { useGameContext } from "@contexts/GameContext";
import CardPreview from "@components/Layout/RightPanel/CardPreview";
import Deck from "@components/Layout/RightPanel/Deck";
import { PlayerId } from "@/types/enums";

const RightColumn: React.FC = () => {
  const { state, dispatch, selectedCard } = useGameContext();

  const deckSizeOpponent = state.players[PlayerId.Opponent].deck?.length || 0;
  const deckSizeSelf = state.players[PlayerId.Self].deck?.length || 0;

  const handleDrawCardOpponent = () => {
    dispatch({ type: "DRAW_CARD_FROM_DECK", playerId: PlayerId.Opponent });
  };

  const handleDrawCardSelf = () => {
    dispatch({ type: "DRAW_CARD_FROM_DECK", playerId: PlayerId.Self });
  };

  return (
    <div className="border-4 border-purple-500 p-4 text-white col-span-2 row-span-8 grid grid-rows-11 gap-4">
      <Deck
        deckSize={deckSizeOpponent}
        onClick={handleDrawCardOpponent}
        isClickable={state.currentPlayer === PlayerId.Opponent}
      />
      <CardPreview card={selectedCard} />
      <Deck
        deckSize={deckSizeSelf}
        onClick={handleDrawCardSelf}
        isClickable={state.currentPlayer === PlayerId.Self}
      />
    </div>
  );
};

export default RightColumn;
