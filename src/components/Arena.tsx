import { useState } from "react";
import CardHand from "@components/Hand/CardHand";
import FieldGrid from "@components/Field/FieldGrid";
import OpponentHand from "@components/Hand/OpponentHand";

import { INITIAL_BOXES } from "@constants/boxes";
import { INITIAL_CARDS } from "@constants/cards";

const Arena: React.FC = () => {
  const [cards, setCards] = useState<CardData[]>(INITIAL_CARDS);
  const [boxes, setBoxes] = useState<Record<number, CardData | null>>(
    Object.fromEntries(INITIAL_BOXES.map((box) => [box.id, box.card]))
  );

  const removeCardFromHand = (
    cards: CardData[],
    cardId: number
  ): CardData[] => {
    return cards.filter((card) => card.id !== cardId);
  };

  const addCardToField = (
    boxes: Record<number, CardData | null>,
    boxId: number,
    card: CardData
  ): Record<number, CardData | null> => {
    return {
      ...boxes,
      [boxId]: card, // Each box now holds only one card (or null)
    };
  };

  const handleDrop = (card: CardData, boxId: number) => {
    setCards((prev) => removeCardFromHand(prev, card.id));
    setBoxes((prev) => addCardToField(prev, boxId, card));
  };

  return (
    <div className="bg-neutral-200 grid grid-rows-10 gap-2 row-span-8 col-span-5">
      <OpponentHand />
      <div className="bg-neutral-400 text-white row-span-6 grid grid-rows-11">
        <div className="bg-neutral-200 row-span-5 grid grid-rows-2 grid-cols-5 gap-2">
          {/* 10 square boxes (5 in each row) */}
          {Array.from({ length: 10 }, (_, index) => (
            <div key={index} className="bg-neutral-400 aspect-w-1 aspect-h-1">
              {/* Content for each box */}
            </div>
          ))}
        </div>
        <div className="bg-neutral-200 row-span-1"></div>
        <FieldGrid boxes={boxes} onDrop={handleDrop} />
      </div>
      <div className="bg-neutral-400 p-2 text-white row-span-2 overflow-x-auto">
        <div className="grid grid-flow-col place-items-center gap-2 h-full">
          {cards
            .filter((card) => card.status === "inHand")
            .map((card) => (
              <CardHand key={card.id} card={card} isDraggable />
            ))}
        </div>
      </div>
    </div>
  );
};
export default Arena;
