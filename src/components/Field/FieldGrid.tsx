import { memo } from "react";
import { FieldArea } from "@components/Field";
import { PlayerId } from "@/types/enums";
interface FieldGridProps {
  fieldData: FieldArea[];
  playerId: PlayerId;
  onDrop: (card: CardData, boxId: number) => void;
}

const FieldGrid: React.FC<FieldGridProps> = ({
  fieldData,
  playerId,
  onDrop,
}) => {
  return (
    <div className="row-span-5 grid grid-rows-2 grid-cols-5 gap-2">
      {fieldData.map((fieldArea, index) => (
        <FieldArea
          key={index}
          fieldArea={fieldArea}
          playerId={playerId}
          onDrop={(card: CardData) => onDrop(card, index)}
        />
      ))}
    </div>
  );
};

export default memo(FieldGrid);
