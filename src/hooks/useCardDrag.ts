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

  // Disable the default drag preview
  useEffect(() => {
    preview(null);
  }, [preview]);

  return { isDragging, drag };
};
