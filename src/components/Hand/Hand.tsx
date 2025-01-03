import { CardHand } from "@components/Hand";

interface HandProps {
  cards: CardData[];
  isDraggable?: boolean;
}

export const Hand: React.FC<HandProps> = ({ cards, isDraggable = false }) => {
  return (
    <div className="p-2 text-white row-span-2 overflow-x-auto border-4 border-purple-500">
      <div className="grid grid-flow-col place-items-center gap-2 h-full">
        {cards.map((card) => (
          <CardHand key={card.id} card={card} isDraggable={isDraggable} />
        ))}
      </div>
    </div>
  );
};

export default Hand;
