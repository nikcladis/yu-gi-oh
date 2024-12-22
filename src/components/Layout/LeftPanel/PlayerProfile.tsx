import kaiba from "@assets/players/kaiba.png";
import yugi from "@assets/players/yugi.png";

interface PlayerProfileProps {
  isOpponent?: boolean;
  name: string;
}

const PlayerProfile: React.FC<PlayerProfileProps> = ({
  isOpponent = false,
  name,
}) => {
  return (
    <div className="flex items-center gap-3 row-span-1">
      <div className="relative w-12 h-12">
        <img
          src={isOpponent ? kaiba : yugi}
          alt={name}
          className={`rounded-full border-2 border-purple-500 shadow-lg ${
            isOpponent ? "" : "transform scale-x-[-1]"
          }`}
        />
        <div className="absolute -bottom-1 -right-1 w-4 h-4 rounded-full bg-green-500 border-2 border-purple-900" />
      </div>
      <div>
        <h2 className="text-lg font-bold text-purple-300">{name}</h2>
        <span className="text-xs text-purple-400">
          {isOpponent ? "Opponent" : "You"}
        </span>
      </div>
    </div>
  );
};

export default PlayerProfile;
