import { useDrag } from "react-dnd";

export const useCardDrag = (card: CardData) => {
  return useDrag({
    type: "CARD",
    item: { card },
    collect: (monitor) => {
      const isDragging = monitor.isDragging();
      return { isDragging };
    },
  });
};
