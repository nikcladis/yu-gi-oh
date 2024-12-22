interface LifePointsProps {
  points: number;
  isOpponent?: boolean;
}

const LifePoints: React.FC<LifePointsProps> = ({
  points,
  //   isOpponent = false,
}) => {
  return (
    <div className="bg-purple-900/30 rounded-lg p-4 flex flex-col items-center justify-center gap-2 transition-all hover:bg-purple-900/40 row-span-1">
      <div className="text-3xl font-bold bg-gradient-to-r from-purple-400 to-purple-600 bg-clip-text text-transparent">
        {points.toLocaleString()}
      </div>
      <div className="text-sm text-gray-300">Life Points</div>
    </div>
  );
};

export default LifePoints;
