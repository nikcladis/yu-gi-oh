import { Phase } from "@/types/enums";

interface PhaseControlProps {
  currentPhase: Phase;
  onNextPhase: () => void;
}

const PhaseControl: React.FC<PhaseControlProps> = ({
  currentPhase,
  onNextPhase,
}) => {
  return (
    <div className="bg-purple-900/30 rounded-lg p-4 flex flex-col items-center justify-center gap-3 row-span-2">
      <div className="text-center space-y-1">
        <div className="text-sm text-purple-300">Current Phase</div>
        <div className="text-xl font-bold bg-gradient-to-r from-purple-400 to-purple-600 bg-clip-text text-transparent">
          {currentPhase}
        </div>
      </div>
      <button
        onClick={onNextPhase}
        className="w-full bg-purple-700 hover:bg-purple-600 px-4 py-2 rounded-lg font-bold transition-all hover:scale-105 active:scale-95"
      >
        Next Phase →
      </button>
    </div>
  );
};

export default PhaseControl;
