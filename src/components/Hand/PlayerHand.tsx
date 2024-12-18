import CardHand from "@components/Hand/CardHand";
import useGameState from "@hooks/useGameState";

interface PlayerHandProps {
  playerId: 1 | 2;
}

const PlayerHand: React.FC<PlayerHandProps> = ({ playerId }) => {
  const [state] = useGameState();
  const playerKey = playerId === 1 ? "player1" : "player2";
  // fix this

  //const player = state[playerKey];

  const player = state[playerKey];

  const handCards = player?.cards.filter(
    (card: CardData) => card.status === "inHand"
  );

  return (
    <div className="border-4 border-purple-500 p-2 text-white row-span-2 overflow-x-auto">
      <div className="grid grid-flow-col place-items-center gap-2 h-full">
        {handCards?.map((card: CardData) => (
          <CardHand key={card.id} card={card} isDraggable />
        ))}
      </div>
    </div>
  );
};

export default PlayerHand;
