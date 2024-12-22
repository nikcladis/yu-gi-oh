import { PlayerId } from "@/types/enums";

interface RoundControlProps {
  round: number;
  currentPlayer: PlayerId;
  onEndRound: () => void;
}

const RoundControl: React.FC<RoundControlProps> = ({
  round,
  currentPlayer,
  onEndRound,
}) => {
  return (
    <div className="bg-purple-900/30 rounded-lg p-4 flex flex-col items-center justify-center gap-3 row-span-2">
      <div className="grid grid-cols-2 gap-4 w-full">
        <div className="text-center">
          <div className="text-sm text-purple-300">Round</div>
          <div className="text-xl font-bold">{round}</div>
        </div>
        <div className="text-center">
          <div className="text-sm text-purple-300">Turn</div>
          <div className="text-lg font-semibold">
            {currentPlayer === PlayerId.Self ? "You" : "Opponent"}
          </div>
        </div>
      </div>
      <button
        onClick={onEndRound}
        className="w-full bg-purple-700 hover:bg-purple-600 px-4 py-2 rounded-lg font-bold transition-all hover:scale-105 active:scale-95"
      >
        End Turn →
      </button>
    </div>
  );
};

export default RoundControl;
