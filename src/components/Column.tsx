import { Paper, Typography, IconButton } from '@mui/material';
import Task from './Task';
import AddIcon from '@mui/icons-material/Add';
import { useDrop } from 'react-dnd';
import { ItemTypes } from '../constants';

interface Task {
  id: number;
  taskTitle: string;
  summary: string;
  description: string;
  column: string;
}

interface ColumnProps {
  title: string; 
  tasks: Task[];
  onDeleteTask: (id: number) => void;
  onAddTask?: () => void;
  onMoveTask: (taskId: number, targetColumn: string) => void;
}

const Column: React.FC<ColumnProps> = ({ title, tasks, onDeleteTask, onAddTask, onMoveTask }) => {
  const [, drop] = useDrop({
    accept: ItemTypes.TASK,
    drop: (item: { id: number }) => onMoveTask(item.id, title),
  });

  return (
    <Paper elevation={3} style={{ padding: '16px', marginBottom: '16px', minWidth: '250px', flexGrow: 1, minHeight: '100%' }} ref={drop}>
      <div style={{ display: 'flex', flexDirection: 'column', justifyContent: 'space-between', height: '100%' }}>
        <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
          <Typography variant="h6" style={{ borderBottom: '1px solid #ccc', paddingBottom: '8px' }}>
            {title}
          </Typography>
          {title === 'To Do' && onAddTask && (
            <IconButton aria-label="add" color="primary" onClick={onAddTask}>
              <AddIcon />
            </IconButton>
          )}
        </div>
        <div style={{ flex: 1, marginTop: '8px' }}>
          {tasks.map((task) => (
            <Task
              key={task.id}
              id={task.id} 
              column={task.column} 
              taskTitle={task.taskTitle}
              summary={task.summary}
              description={task.description}
              onDelete={() => onDeleteTask(task.id)}
              onMove={() => onMoveTask(task.id, title)}
            />
          ))}
        </div>
      </div>
    </Paper>
  );
};

export default Column;
