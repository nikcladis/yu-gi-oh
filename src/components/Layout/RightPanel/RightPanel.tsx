import { useGameContext } from "@contexts/GameContext";
import CardPreview from "@components/Layout/RightPanel/CardPreview";
import Deck from "@components/Layout/RightPanel/Deck";
import { PlayerId } from "@/types/enums";

const RightColumn: React.FC = () => {
  const { state, dispatch, selectedCard } = useGameContext();

  const deckSizeOpponent = state.players[PlayerId.Two].deck?.length || 0;

  const deckSizePlayer = state.players[PlayerId.One].deck?.length || 0;

  const handleDrawCard = () => {
    dispatch({ type: "DRAW_CARD_FROM_DECK", playerId: PlayerId.One });
  };

  return (
    <div className="border-4 border-purple-500 p-4 text-white col-span-2 row-span-8 grid grid-rows-11 gap-4">
      <Deck deckSize={deckSizeOpponent} isClickable={false} />
      <CardPreview card={selectedCard} />
      <Deck
        deckSize={deckSizePlayer}
        onClick={handleDrawCard}
        isClickable={true}
      />
    </div>
  );
};

export default RightColumn;
