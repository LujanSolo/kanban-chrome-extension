import { DndProvider } from 'react-dnd';
import { HTML5Backend } from 'react-dnd-html5-backend';
import CustomDragLayer from './components/CustomDrag/CustomDragLayer';
import Board from './components/Board/Board';

const App: React.FC = () => {
  return (
    <DndProvider backend={HTML5Backend}>
      <CustomDragLayer />
      <Board />
    </DndProvider>
  );
};

export default App;
