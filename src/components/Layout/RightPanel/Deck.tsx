import React from "react";
import backImage from "@assets/back.png";

interface Props {
  deckSize: number;
}

const Deck: React.FC<Props> = ({ deckSize }) => {
  const visibleCards = Math.min(deckSize, 10);

  return (
    <div className="border-4 border-purple-500 relative p-4 row-span-3 flex items-center justify-center">
      {[...Array(visibleCards)].map((_, index) => {
        const offsetY = index * 1.5;
        const offsetX = index * 1.1;
        const zIndex = visibleCards - index;

        return (
          <div
            key={index}
            className={`absolute aspect-[2.25/3.25] w-[4rem] md:w-[5rem] lg:w-[6rem] ${
              index === visibleCards - 1 ? "border-white border-8" : ""
            }`}
            style={{
              backgroundImage: `url(${backImage})`,
              backgroundSize: "contain",
              backgroundPosition: "center",
              backgroundRepeat: "no-repeat",
              left: "50%",
              top: "50%",
              transform: `translate(-50%, -50%) translate(${offsetX}px, ${offsetY}px)`,
              zIndex,
            }}
          />
        );
      })}
    </div>
  );
};

export default Deck;
