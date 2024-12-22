import { memo } from "react";
import { useCardDrag } from "@hooks/useCardDrag";
import { useGameContext } from "@contexts/GameContext";
import Card from "@components/Common/Card";

interface CardHandProps {
  card: CardData;
  isDraggable?: boolean;
}

const CardHand: React.FC<CardHandProps> = ({ card, isDraggable = false }) => {
  const { setSelectedCard } = useGameContext();
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
    >
      <Card card={card} onClick={handleCardClick} isDraggable={isDraggable} />
    </div>
  );
};

export default memo(CardHand);
