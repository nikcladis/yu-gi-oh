import Arena from "@components/Arena";
import LeftPanel from "@components/Layout/LeftPanel/LeftPanel";
import RightPanel from "@components/Layout/RightPanel/RightPanel";
import { DndProvider } from "react-dnd";
import { HTML5Backend } from "react-dnd-html5-backend";

import { CardInfoProvider } from "@contexts/CardInfoContext";

const App: React.FC = () => {
  return (
    <CardInfoProvider>
      <div className="bg-neutral-200 grid grid-cols-8 gap-2 p-2 h-screen">
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
