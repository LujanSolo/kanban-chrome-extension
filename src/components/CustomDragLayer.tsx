import { useDragLayer, XYCoord } from 'react-dnd';
import CustomDragItem from './CustomDragItem';

interface DragItem {
  id: number;
  type: string;
  title: string;
}

interface CollectedProps {
  isDragging: boolean;
  item: DragItem | null;
  currentOffset: { x: number; y: number } | null;
}