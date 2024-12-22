import { useGameContext } from "@contexts/GameContext";
import Card from "@components/Common/Card";

interface FieldCardProps {
  card: CardData;
  defensePosition: boolean;
  onDefensePositionToggle: () => void;
}

const FieldCard: React.FC<FieldCardProps> = ({
  card,
  defensePosition,
  onDefensePositionToggle,
}) => {
  const { setSelectedCard } = useGameContext();

  const handleCardDoubleClick = () => {
    onDefensePositionToggle();
  };

  const handleCardClick = () => {
    setSelectedCard(card);
  };

  return (
    <Card
      card={card}
      defensePosition={defensePosition}
      onClick={handleCardClick}
      onDoubleClick={handleCardDoubleClick}
    />
  );
};

export default FieldCard;
