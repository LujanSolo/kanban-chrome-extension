import { Paper, Typography, IconButton } from '@mui/material';
import Task from './Task';
import AddIcon from '@mui/icons-material/Add';

interface Task {
  id: number;
  title: string;
  description: string;
}

interface ColumnProps {
  title: string;
  tasks: Task[];
  onDeleteTask: (id: number) => void;
  onAddTask?: () => void;
}

const Column: React.FC<ColumnProps> = ({ title, tasks, onDeleteTask, onAddTask }) => {
  return (
    <Paper elevation={3} style={{ padding: '16px', marginBottom: '16px', minWidth: '250px' }}>
      <div style={{ display: 'flex', flexDirection: 'column', justifyContent: 'space-between', height: '100%' }}>
        <div style={{ display: 'flex', justifyContent: 'space-between', marginBottom: '8px' }}>
          <Typography variant="h6" style={{ borderBottom: '1px solid #ccc', paddingBottom: '8px' }}>
            {title}
          </Typography>
          {title === 'To Do' && onAddTask && (
            <IconButton aria-label="add" color="primary" onClick={onAddTask}>
              <AddIcon />
            </IconButton>
          )}
        </div>
        <div style={{ flex: 1 }}>
          {tasks.map((task) => (
            <Task key={task.id} {...task} onDelete={() => onDeleteTask(task.id)} />
          ))}
        </div>
      </div>
    </Paper>
  );
};

export default Column;
