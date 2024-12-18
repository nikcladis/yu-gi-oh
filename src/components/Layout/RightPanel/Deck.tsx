import backImage from "@assets/back.png";

interface Props {
  deckSize: number;
  onDraw: (numberOfCards: number) => void;
}

const Deck: React.FC<Props> = ({ deckSize, onDraw }) => {
  const visibleCards = Math.min(deckSize, 10);

  const handleDrawCard = () => {
    onDraw(1); // Draw one card on each click
  };

  return (
    <div
      className="border-4 border-purple-500 relative p-4 row-span-3 flex items-center justify-center cursor-pointer"
      onClick={deckSize > 0 ? handleDrawCard : undefined}
    >
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
      <span className="absolute top-0 right-0 text-white">{visibleCards}</span>
    </div>
  );
};

export default Deck;
