import { Paper, Typography, Button } from '@mui/material';
import Task from './Task';

interface Task {
  id: number;
  title: string;
  description: string;
}

interface ColumnProps {
  title: string;
  tasks: Task[];
  onDeleteTask: (id: number) => void;
}

const Column: React.FC<ColumnProps> = ({ title, tasks, onDeleteTask }) => {
  return (
    <Paper elevation={3} style={{ padding: '16px', marginBottom: '16px' }}>
      <Typography variant="h6" gutterBottom>
        {title}
      </Typography>
      {tasks.map((task) => (
        <Task key={task.id} {...task} onDelete={() => onDeleteTask(task.id)} />
      ))}
      <Button variant="contained" color="primary" size="small" style={{ marginTop: '12px', marginBottom: "4px" }}>
        Add Task
      </Button>
    </Paper>
  );
};

export default Column;
