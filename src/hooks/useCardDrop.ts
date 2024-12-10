import { useState } from "react";
import { useDrop } from "react-dnd";

export const useCardDrop = (onDrop: (card: CardData) => void) => {
  const [isCardDropped, setIsCardDropped] = useState(false);

  return useDrop({
    accept: "CARD",
    canDrop: () => !isCardDropped,
    drop: (item: { card: CardData }) => {
      onDrop(item.card);
      setIsCardDropped(true);
    },
    collect: (monitor) => {
      const isOver = monitor.isOver();
      const canDrop = monitor.canDrop();
      return { isOver, canDrop };
    },
  });
};
