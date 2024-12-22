import { useGameContext } from "@contexts/GameContext";
import { PlayerId } from "@/types/enums";
import LifePoints from "./LifePoints";
import RoundControl from "./RoundControl";
import PhaseControl from "./PhaseControl";
import PlayerProfile from "./PlayerProfile";

const LeftPanel: React.FC = () => {
  const { state, dispatch } = useGameContext();

  const opponentLifePoints = state.players[PlayerId.Opponent].lifePoints;
  const playerLifePoints = state.players[PlayerId.Self].lifePoints;

  const handleEndRound = () => {
    dispatch({ type: "END_ROUND" });
  };

  const handleNextPhase = () => {
    dispatch({ type: "NEXT_PHASE" });
  };

  return (
    <div className="border-4 border-purple-500 p-4 text-white col-span-1 row-span-8 grid grid-rows-8 gap-4">
      <PlayerProfile isOpponent name="Seto Kaiba" />
      <LifePoints points={opponentLifePoints} isOpponent />
      <RoundControl
        round={state.round}
        currentPlayer={state.currentPlayer}
        onEndRound={handleEndRound}
      />
      <PhaseControl
        currentPhase={state.currentPhase}
        onNextPhase={handleNextPhase}
      />
      <LifePoints points={playerLifePoints} />
      <PlayerProfile name="Yugi Muto" />
    </div>
  );
};

export default LeftPanel;
