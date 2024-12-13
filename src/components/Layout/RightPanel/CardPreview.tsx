import backImage from "@assets/back.png";

interface CardPreviewProps {
  card: CardData | null;
}

const CardPreview: React.FC<CardPreviewProps> = ({ card }) => {
  return (
    <div className="border-4 border-purple-500 p-4 row-span-5 flex flex-col items-center justify-center text-center">
      <div
        className="aspect-[2.25/3.25] h-full"
        style={{
          backgroundImage: `url(${card?.image || backImage})`,
          backgroundSize: "contain",
          backgroundPosition: "center",
          backgroundRepeat: "no-repeat",
        }}
        title={card?.name}
      />
      <h3 className="text-lg ">{card?.name || "?"}</h3>
    </div>
  );
};

export default CardPreview;
