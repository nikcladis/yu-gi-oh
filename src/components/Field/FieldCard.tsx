import { useCardInfoContext } from "@contexts/CardInfoContext";

interface CardFieldProps {
  card: CardData;
  defensePosition: boolean;
  onDefensePositionToggle: () => void;
}

const FieldCard: React.FC<CardFieldProps> = ({
  card,
  defensePosition,
  onDefensePositionToggle,
}) => {
  const { setSelectedCard } = useCardInfoContext();

  const handleCardDoubleClick = () => {
    onDefensePositionToggle();
  };

  const handleCardClick = () => {
    setSelectedCard(card);
  };

  return (
    <div
      className="w-full h-full"
      style={{
        backgroundImage: `url(${card.image})`,
        backgroundSize: "contain",
        backgroundPosition: "center",
        backgroundRepeat: "no-repeat",
        transform: defensePosition ? "rotate(90deg)" : "rotate(0deg)",
        transition: "transform 0.3s ease",
      }}
      title={card.name}
      onClick={handleCardClick}
      onDoubleClick={handleCardDoubleClick}
    />
  );
};

export default FieldCard;
