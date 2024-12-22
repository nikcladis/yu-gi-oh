import { memo, useState } from "react";
import { Shield, Sword } from "lucide-react";
import { FieldCard } from "@components/Field";
import { useCardDrop } from "@hooks/useCardDrop";
import { PlayerId, CardType } from "@/types/enums";

interface FieldAreaProps {
  fieldArea: FieldArea;
  playerId: PlayerId;
  onDrop: (card: CardData) => void;
}

const FieldArea: React.FC<FieldAreaProps> = ({
  fieldArea,
  onDrop,
  playerId,
}) => {
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
      {fieldArea.card && (
        <>
          <FieldCard
            key={fieldArea.card.id}
            card={fieldArea.card}
            defensePosition={defensePosition}
            onDefensePositionToggle={handleDefensePositionToggle}
          />
          {fieldArea.card.type === CardType.Monster && (
            <div className="absolute top-1 right-1 flex justify-center items-center flex-col">
              <span className="text-white font-bold">
                {defensePosition
                  ? fieldArea.card.defense
                  : fieldArea.card.attack}
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

export default memo(FieldArea);
