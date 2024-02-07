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

const layerStyles: React.CSSProperties = {
  position: 'fixed',
  pointerEvents: 'none',
  zIndex: 1000,
  left: 0,
  top: 0,
};

const getItemStyles = (currentOffset: XYCoord | null): React.CSSProperties => {
  if (!currentOffset) {
    return {
      display: 'none',
    };
  }

  const { x, y } = currentOffset;
  const transform = `translate(${x}px, ${y}px)`;
  return {
    transform,
    WebkitTransform: transform,
  };
};

const CustomDragLayer: React.FC = () => {
  const {
    itemType,
    isDragging,
    item,
    currentOffset,
  } = useDragLayer((monitor): CollectedProps => ({
    item: monitor.getItem(),
    currentOffset: monitor.getSourceClientOffset(),
    isDragging: monitor.isDragging(),
  }));

  if (!isDragging || !item) {
    return null;
  }

  return (
    <div style={layerStyles}>
      <div style={getItemStyles(currentOffset)}>
        <CustomDragItem item={item} />
      </div>
    </div>
  );
};

export default CustomDragLayer;