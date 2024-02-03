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
  onAddTask: () => void;
}

const Column: React.FC<ColumnProps> = ({ title, tasks, onDeleteTask, onAddTask }) => {
  return (
    <Paper elevation={3} style={{ padding: '16px', marginBottom: '16px' }}>
      <div style={{
        display: "flex",
        justifyContent: "space-between",
        alignItems: "center",
        marginBottom: "8px"
      }}>
        <Typography variant="h6" gutterBottom>
          {title}
        </Typography>
        <IconButton aria-label="add" color="primary" onClick={onAddTask}>
          <AddIcon />
        </IconButton>
      </div>

      {tasks.map((task) => (
        <Task key={task.id} {...task} onDelete={() => onDeleteTask(task.id)} />
      ))}
     
    </Paper>
  );
};

export default Column;
