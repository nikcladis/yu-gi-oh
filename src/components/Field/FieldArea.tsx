import { useState } from "react";
import { Shield, Sword } from "lucide-react";
import { useCardDrop } from "@hooks/useCardDrop";
import FieldCard from "@components/Field/FieldCard";

interface BoxAreaProps {
  box: BoxAreaData;
  playerId: 1 | 2; // The player who owns this box
  onDrop: (card: CardData) => void;
}

const FieldArea: React.FC<BoxAreaProps> = ({ box, onDrop, playerId }) => {
  const [{ isOver, canDrop }, drop] = useCardDrop(onDrop, playerId);
  const [defensePosition, setDefensePosition] = useState(false);

  const handleDefensePositionToggle = () => {
    setDefensePosition((prev) => !prev);
  };

  return (
    <div
      ref={drop}
      className={`border-4 border-purple-500 p-2 aspect-w-1 aspect-h-1 relative transition-transform ${
        canDrop && isOver ? "bg-green-300 scale-105" : "bg-black"
      }`}
    >
      {box.card && (
        <>
          <FieldCard
            key={box.card.id}
            card={box.card}
            defensePosition={defensePosition}
            onDefensePositionToggle={handleDefensePositionToggle}
          />
          {box.card.type === "monster" && (
            <div className="absolute top-1 right-1 flex justify-center items-center flex-col">
              <span className="text-white font-bold">
                {defensePosition ? box.card.defense : box.card.attack}
              </span>
              {defensePosition ? (
                <Shield size={16} fill="white" color="white" />
              ) : (
                <Sword size={16} fill="white" color="white" />
              )}
            </div>
          )}
        </>
      )}
    </div>
  );
};

export default FieldArea;
