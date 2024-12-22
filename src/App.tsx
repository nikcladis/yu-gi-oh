import Arena from "@components/Arena";
import { DndProvider } from "react-dnd";
import { HTML5Backend } from "react-dnd-html5-backend";
import { GameProvider } from "@contexts/GameContext";

const App: React.FC = () => {
  return (
    <DndProvider backend={HTML5Backend}>
      <GameProvider>
        <Arena />
      </GameProvider>
    </DndProvider>
  );
};

export default App;
