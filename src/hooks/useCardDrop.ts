import { useState } from "react";
import { useDrop } from "react-dnd";

export const useCardDrop = (
  onDrop: (card: CardData) => void,
  acceptablePlayerId: 1 | 2
) => {
  const [isCardDropped, setIsCardDropped] = useState(false);

  const [{ isOver, canDrop }, dropRef] = useDrop({
    accept: "CARD",
    canDrop: (item: { card: CardData }) => {
      // Only allow drop if the card belongs to the correct player
      // and this field hasn't had a card dropped yet if you want a one-drop limit.
      return item.card.playerId === acceptablePlayerId && !isCardDropped;
    },
    drop: (item: { card: CardData }) => {
      onDrop(item.card);
      setIsCardDropped(true);
    },
    collect: (monitor) => ({
      isOver: monitor.isOver(),
      canDrop: monitor.canDrop(),
    }),
  });

  return [{ isOver, canDrop }, dropRef] as const;
};
