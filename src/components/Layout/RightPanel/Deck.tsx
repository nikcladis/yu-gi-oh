import backImage from "@assets/back.png";
import { useEffect, useState } from "react";

interface Props {
  deckSize: number;
  onClick?: () => void;
  isClickable?: boolean;
  hasDrawnCard?: boolean;
}

const Deck: React.FC<Props> = ({
  deckSize,
  onClick,
  isClickable = false,
  hasDrawnCard = false,
}) => {
  const visibleCards = Math.min(deckSize, 5);
  const [canDraw, setCanDraw] = useState(isClickable);

  useEffect(() => {
    setCanDraw(isClickable);
  }, [isClickable]);

  const handleClick = () => {
    if (isClickable && !hasDrawnCard) {
      onClick?.();
      setCanDraw(false);
    }
  };

  return (
    <div
      onClick={handleClick}
      className={`border-4 border-purple-500 relative p-4 row-span-3 flex items-center justify-center
        ${
          !hasDrawnCard && canDraw
            ? "cursor-pointer hover:bg-purple-900"
            : "cursor-not-allowed opacity-70"
        }
        ${hasDrawnCard ? "bg-purple-900/50" : ""}
        transition-colors duration-200`}
    >
      {[...Array(visibleCards)].map((_, index) => {
        const offsetY = index * 2;
        const offsetX = index * 0.5;
        const zIndex = visibleCards - index;
        const rotation = (index - Math.floor(visibleCards / 2)) * 2;

        return (
          <div
            key={index}
            className={`absolute aspect-[2.25/3.25] w-[4rem] md:w-[5rem] lg:w-[6rem] transition-transform duration-200
              ${isClickable && index === 0 ? "hover:-translate-y-2" : ""}
              ${index === 0 ? "shadow-lg shadow-purple-500/50" : ""}
            `}
            style={{
              backgroundImage: `url(${backImage})`,
              backgroundSize: "contain",
              backgroundPosition: "center",
              backgroundRepeat: "no-repeat",
              left: "50%",
              top: "50%",
              transform: `translate(-50%, -50%) 
                translate(${offsetX}px, ${offsetY}px) 
                rotate(${rotation}deg)`,
              zIndex,
              boxShadow: "0 2px 4px rgba(0,0,0,0.3)",
            }}
          />
        );
      })}
      <span className="absolute bottom-2 right-2 bg-purple-800 px-2 py-1 rounded-full text-xs font-bold">
        {deckSize}
      </span>
    </div>
  );
};

export default Deck;
