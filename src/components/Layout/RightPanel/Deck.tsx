import { useState } from "react";
import backImage from "@assets/back.png";

interface CardData {
  id: number;
  name: string;
  image: string;
  status: "inDeck" | "inHand" | "onField";
}

interface DeckProps {
  initialDeck: CardData[];
  onDrawCard: (card: CardData) => void; // Callback when a card is drawn
}

const Deck: React.FC<DeckProps> = ({ initialDeck, onDrawCard }) => {
  const [deck, setDeck] = useState<CardData[]>(initialDeck);

  const drawCard = () => {
    if (deck.length > 0) {
      const [drawnCard, ...remainingDeck] = deck;
      setDeck(remainingDeck);
      onDrawCard({ ...drawnCard, status: "inHand" });
    }
  };

  return (
    <div className="bg-neutral-500 p-4 row-span-2 flex flex-col items-center justify-center">
      <h3 className="mb-2 text-lg">Deck ({deck.length})</h3>
      <div className="relative w-24 h-36 mb-4">
        {deck.length > 0 ? (
          <img
            src={backImage}
            alt="Deck"
            className="absolute w-full h-full rounded-lg"
          />
        ) : (
          <div className="w-full h-full bg-gray-700 flex items-center justify-center rounded-lg">
            <span className="text-gray-300">Empty Deck</span>
          </div>
        )}
      </div>
      <button
        onClick={drawCard}
        disabled={deck.length === 0}
        className={`px-4 py-2 rounded text-white ${
          deck.length > 0
            ? "bg-green-500 hover:bg-green-600"
            : "bg-gray-500 cursor-not-allowed"
        }`}
      >
        Draw Card
      </button>
    </div>
  );
};

export default Deck;
