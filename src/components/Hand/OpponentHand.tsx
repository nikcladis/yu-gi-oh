import CardHand from "@components/Hand/CardHand";
import { OPPONENT_INITIAL_CARDS } from "@constants/cards";

const OpponentHand: React.FC = () => (
  <div className="bg-neutral-400 p-2 text-white row-span-2 overflow-x-auto">
    <div className="grid grid-flow-col place-items-center gap-2 h-full">
      {OPPONENT_INITIAL_CARDS.map((card) => (
        <CardHand key={card.id} card={card} />
      ))}
    </div>
  </div>
);

export default OpponentHand;
