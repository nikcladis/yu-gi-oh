import CardHand from "@components/Hand/CardHand";

interface PlayerHandProps {
  cards: CardData[];
  onCardDrop: (card: CardData, boxId: number) => void;
}

const PlayerHand: React.FC<PlayerHandProps> = ({ cards, onCardDrop }) => {
  return (
    <div className="bg-neutral-400 p-2 text-white row-span-2 overflow-x-auto">
      <div className="grid grid-flow-col place-items-center gap-2 h-full">
        {cards
          .filter((card) => card.status === "inHand")
          .map((card) => (
            <CardHand
              key={card.id}
              card={card}
              isDraggable
              onDrop={(card) => onCardDrop(card, card.id)} // Pass card's ID as boxId, assuming this is the intended behavior
            />
          ))}
      </div>
    </div>
  );
};

export default PlayerHand;
