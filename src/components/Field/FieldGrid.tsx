import FieldArea from "@components/Field/FieldArea";

interface BoxGridProps {
  boxes: Record<number, CardData | null>;
  playerId: 1 | 2;
  onDrop: (card: CardData, boxId: number) => void;
}

const FieldGrid: React.FC<BoxGridProps> = ({ boxes, playerId, onDrop }) => {
  return (
    <div className="row-span-5 grid grid-rows-2 grid-cols-5 gap-2">
      {Object.entries(boxes).map(([boxId, cardData]) => (
        <FieldArea
          key={boxId}
          box={{ id: Number(boxId), card: cardData }}
          playerId={playerId}
          onDrop={(card) => onDrop(card, Number(boxId))}
        />
      ))}
    </div>
  );
};

export default FieldGrid;
