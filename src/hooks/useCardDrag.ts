import { useEffect } from "react";
import { useDrag } from "react-dnd";

export const useCardDrag = (card: CardData) => {
  const [{ isDragging }, drag, preview] = useDrag(() => ({
    type: "CARD",
    item: { card },
    collect: (monitor) => ({
      isDragging: monitor.isDragging(),
    }),
  }));

  // Disable the default HTML5 drag preview since we want custom styling
  useEffect(() => {
    preview(null);
  }, [preview]);

  return { isDragging, drag };
};
