import { DndProvider } from "react-dnd";
import Arena from "./components/Arena";
import { HTML5Backend } from "react-dnd-html5-backend";
import { CardInfoProvider } from "@contexts/CardInfoContext";
import LeftPanel from "@components/Layout/LeftPanel/LeftPanel";
import RightPanel from "@components/Layout/RightPanel/RightPanel";

const App: React.FC = () => {
  return (
    <CardInfoProvider>
      <div className="bg-black grid grid-cols-8 gap-2 p-2 min-h-screen max-h-fit">
        <LeftPanel />
        <DndProvider backend={HTML5Backend}>
          <Arena />
        </DndProvider>
        <RightPanel />
      </div>
    </CardInfoProvider>
  );
};

export default App;
