import backImage from "@assets/back.png";

interface CardPreviewProps {
  card: CardData | null;
}

const CardPreview: React.FC<CardPreviewProps> = ({ card }) => {
  return (
    <div className="p-4 row-span-7 flex flex-col items-center justify-center text-center">
      {card ? (
        <>
          <img
            src={card.image}
            alt={card.name}
            className="xl:w-full xl:h-full"
          />
          <h3 className="text-lg ">{card.name}</h3>
        </>
      ) : (
        <>
          <img
            src={backImage}
            alt={"No card selected"}
            className="w-full h-full"
          />
          <h3 className="text-lg ">?</h3>
        </>
      )}
    </div>
  );
};

export default CardPreview;
