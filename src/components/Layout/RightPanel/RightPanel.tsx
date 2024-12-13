import { useCardInfoContext } from "@contexts/CardInfoContext";
import CardPreview from "@components/Layout/RightPanel/CardPreview";
import Deck from "@components/Layout/RightPanel/Deck";

const RightColumn: React.FC = () => {
  const { selectedCard } = useCardInfoContext();

  return (
    <div className="border-4 border-purple-500 p-4 text-white col-span-2 row-span-8 grid grid-rows-11 gap-4">
      <Deck deckSize={40} />
      <CardPreview card={selectedCard} />
      <Deck deckSize={40} />
    </div>
  );
};

export default RightColumn;
