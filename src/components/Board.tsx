import { Container, Typography, Grid } from '@mui/material';
import Column from './Column';

interface Task {
  id: number;
  title: string;
  description: string;
}

const dummyTasks: Task[] = [
  {
    id: 1,
    title: 'Task 1',
    description: 'Description of Task 1',
  },
  {
    id: 2,
    title: 'Task 2',
    description: 'Description of Task 2',
  },
  {
    id: 3,
    title: 'Task 3',
    description: 'Description of Task 3',
  },
  {
    id: 4,
    title: 'Task 4',
    description: 'Description of Task 4',
  },
];

const Board: React.FC = () => {
  return (
    <Container maxWidth="xl">
      <Typography variant="h4" gutterBottom>
        Kanban Board - Chrome Extension
      </Typography>
      <Grid container spacing={2}>
        <Grid item xs={4}>
          <Column title="To Do" tasks={dummyTasks} />
        </Grid>
        <Grid item xs={4}>
          <Column title="In Progress" tasks={dummyTasks} />
        </Grid>
        <Grid item xs={4}>
          <Column title="Done" tasks={dummyTasks} />
        </Grid>
      </Grid>
    </Container>
  )
};

export default Board;