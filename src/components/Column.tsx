import { Paper, Typography, Button } from '@mui/material';

interface Task {
  id: number;
  title: string;
  description: string;
}

interface ColumnProps {
  title: string;
  tasks: Task[];
}

const Column: React.FC<ColumnProps> = ({ title, tasks }) => {
  return (
    <Paper elevation={3} style={{ padding: '16px', marginBottom: '16px' }}>
      <Typography variant="h6" gutterBottom>
        {title}
      </Typography>
      {tasks.map((task) => (
        <div key={task.id}>
          <Typography>{task.title}</Typography>
          {/* Add more task details as needed */}
        </div>
      ))}
      <Button variant="outlined" color="primary" size="small">
        Add Task
      </Button>
    </Paper>
  );
};

export default Column;
