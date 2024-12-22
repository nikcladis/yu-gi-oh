import { memo } from "react";

interface CardProps {
  card: CardData;
  onClick?: () => void;
  onDoubleClick?: () => void;
  isDraggable?: boolean;
  defensePosition?: boolean;
}

const Card: React.FC<CardProps> = ({
  card,
  onClick,
  onDoubleClick,
  isDraggable = false,
  defensePosition = false,
}) => {
  const transformStyle = defensePosition ? "rotate(90deg)" : "rotate(0deg)";

  return (
    <div
      className={`w-full h-full cursor-${isDraggable ? "grab" : "default"}`}
      style={{
        backgroundImage: `url(${card.image})`,
        backgroundSize: "contain",
        backgroundPosition: "center",
        backgroundRepeat: "no-repeat",
        transform: transformStyle,
        transition: "transform 0.3s ease",
      }}
      title={card.name}
      onClick={onClick}
      onDoubleClick={onDoubleClick}
    />
  );
};

export default memo(Card);
