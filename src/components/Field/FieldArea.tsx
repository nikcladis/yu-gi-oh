import { useState } from "react";
import { Shield, Sword } from "lucide-react";
import { useCardDrop } from "@hooks/useCardDrop";
import FieldCard from "@components/Field/FieldCard";

interface BoxAreaProps {
  box: BoxAreaData;
  onDrop: (card: CardData) => void;
}

const FieldArea: React.FC<BoxAreaProps> = ({ box, onDrop }) => {
  const [{ isOver, canDrop }, drop] = useCardDrop(onDrop);
  const [defensePosition, setDefensePosition] = useState(false);

  const handleDefensePositionToggle = () => {
    setDefensePosition((prev) => !prev);
  };

  return (
    <div
      ref={drop}
      className={`p-2 aspect-w-1 aspect-h-1 relative ${
        canDrop && isOver ? "bg-green-300" : "bg-neutral-400"
      }`}
    >
      {box.card && (
        <FieldCard
          key={box.card.id}
          card={box.card}
          defensePosition={defensePosition}
          onDefensePositionToggle={handleDefensePositionToggle}
        />
      )}

      {box.card && box.card.type === "monster" && (
        <div className="absolute top-1 right-1 flex justify-center items-center flex-col">
          <span className="text-black font-bold">
            {defensePosition ? box.card.defense : box.card.attack}
          </span>
          {defensePosition ? (
            <Shield size={16} fill="black" color="black" />
          ) : (
            <Sword size={16} fill="black" color="black" />
          )}
        </div>
      )}
    </div>
  );
};

export default FieldArea;
