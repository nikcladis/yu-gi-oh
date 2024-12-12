// src/components/Hand/PlayerHand.tsx
import React from "react";
import CardHand from "./CardHand"; // Assuming you have the CardHand component

interface PlayerHandProps {
  cards: CardData[];
}

const PlayerHand: React.FC<PlayerHandProps> = ({ cards }) => {
  return (
    <div className="border-4 border-purple-500 p-2 text-white row-span-2 overflow-x-auto">
      <div className="grid grid-flow-col place-items-center gap-2 h-full">
        {cards
          .filter((card) => card.status === "inHand")
          .map((card) => (
            <CardHand key={card.id} card={card} isDraggable />
          ))}
      </div>
    </div>
  );
};

export default PlayerHand;
