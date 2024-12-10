import { useCardDrag } from "@hooks/useCardDrag";
import { useCardInfoContext } from "@contexts/CardInfoContext";

interface CardHandProps {
  card: CardData;
  isDraggable?: boolean;
  onDrop?: (card: CardData) => void; // Add onDrop prop
}

const CardHand: React.FC<CardHandProps> = ({
  card,
  isDraggable = false,
  onDrop,
}) => {
  const { setSelectedCard } = useCardInfoContext();
  const [{ isDragging }, drag] = useCardDrag(card);

  const handleDrop = () => {
    if (onDrop) {
      onDrop(card); // Trigger the onDrop if provided
    }
  };

  const handleCardClick = () => {
    setSelectedCard(card);
  };

  return (
    <div
      ref={isDraggable ? drag : null}
      className={`aspect-[2.25/3.25] w-[4rem] md:w-[5rem] lg:w-[6rem]`}
      style={{
        backgroundImage: `url(${card.image})`,
        backgroundSize: "contain",
        backgroundPosition: "center",
        backgroundRepeat: "no-repeat",
      }}
      title={card.name}
      onDrop={handleDrop} // Add drop handling here if you need
      onClick={handleCardClick}
    />
  );
};

export default CardHand;
