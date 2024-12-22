import backImage from "@assets/back.png";
import { Shield, Sword } from "lucide-react";
import { CardType } from "@/types/enums";

interface CardPreviewProps {
  card: CardData | null;
}

const CardPreview: React.FC<CardPreviewProps> = ({ card }) => {
  return (
    <div className="border-4 border-purple-500 p-4 row-span-5 flex flex-col items-center justify-start gap-4">
      {/* Card Image */}
      <div
        className="aspect-[2.25/3.25] w-full max-w-[200px] rounded-lg shadow-lg transition-transform hover:scale-105"
        style={{
          backgroundImage: `url(${card?.image || backImage})`,
          backgroundSize: "contain",
          backgroundPosition: "center",
          backgroundRepeat: "no-repeat",
        }}
        title={card?.name}
      />

      {/* Card Info */}
      <div className="w-full text-center space-y-2">
        <h3 className="text-xl font-bold bg-purple-900 py-1 px-2 rounded">
          {card?.name || "?"}
        </h3>

        {/* Stats for Monster Cards */}
        {card?.type === CardType.Monster && (
          <div className="flex justify-center gap-4 text-sm">
            <div className="flex items-center gap-1">
              <Sword size={16} className="text-red-500" />
              <span>{card.attack}</span>
            </div>
            <div className="flex items-center gap-1">
              <Shield size={16} className="text-blue-500" />
              <span>{card.defense}</span>
            </div>
          </div>
        )}

        {/* Card Type Badge */}
        <div className="text-sm">
          <span className="bg-purple-800 px-2 py-1 rounded-full">
            {card?.type || "?"}
          </span>
        </div>

        {/* Description Box */}
        <div className="mt-2 p-2 bg-purple-900/50 rounded min-h-[60px] text-sm">
          <p className="text-gray-300">
            {card?.description || "No card selected"}
          </p>
        </div>
      </div>
    </div>
  );
};

export default CardPreview;
