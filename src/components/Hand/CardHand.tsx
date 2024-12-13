import { useCardDrag } from "@hooks/useCardDrag";
import { useCardInfoContext } from "@contexts/CardInfoContext";

interface CardHandProps {
  card: CardData;
  isDraggable?: boolean;
}

const CardHand: React.FC<CardHandProps> = ({
  card,
  isDraggable = false,
}) => {
  const { setSelectedCard } = useCardInfoContext();
  const { isDragging, drag } = useCardDrag(card);

  const handleCardClick = () => {
    setSelectedCard(card);
  };

  return (
    <div
      ref={isDraggable ? drag : null}
      className={`aspect-[2.25/3.25] w-[4rem] md:w-[5rem] lg:w-[6rem] ${
        isDragging ? "opacity-20" : ""
      }`}
      style={{
        backgroundImage: `url(${card.image})`,
        backgroundSize: "contain",
        backgroundPosition: "center",
        backgroundRepeat: "no-repeat",
        cursor: isDraggable ? "grab" : "default",
      }}
      title={card.name}
      onClick={handleCardClick}
    />
  );
};

export default CardHand;
