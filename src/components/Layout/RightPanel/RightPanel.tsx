import { useCardInfoContext } from "@contexts/CardInfoContext";
import CardPreview from "@components/Layout/RightPanel/CardPreview";

const RightColumn: React.FC = () => {
  const { selectedCard } = useCardInfoContext();

  return (
    <div className="bg-neutral-400 p-4 text-white col-span-2 row-span-8 grid grid-rows-11 gap-4">
      <div className="bg-neutral-500 p-4 row-span-2">Div 1</div>
      <CardPreview card={selectedCard} /> {/* Passing selectedCard as a prop */}
      <div className="bg-neutral-500 p-4 row-span-2">Div 3</div>
    </div>
  );
};

export default RightColumn;
