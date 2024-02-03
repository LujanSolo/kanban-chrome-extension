import { useState } from 'react';
import { Container, Typography, Grid, Button } from '@mui/material';
import Column from './Column';
import Task from './Task';
interface Task {
  id: number;
  title: string;
  description: string;
}

const sampleTasks: Task[] = [
  { id: 1, title: 'Task 1', description: 'Description for Task 1' },
  { id: 2, title: 'Task 2', description: 'Description for Task 2' },
];

const Board: React.FC = () => {
  const [tasks, setTasks] = useState<Task[]>(sampleTasks);

  const handleCreateTask = () => {
    const newTask: Task = {
      id: tasks.length + 1,
      title: `Task ${tasks.length + 1}`,
      description: `Description for Task ${tasks.length + 1}`,
    };

    setTasks((prevTasks) => [...prevTasks, newTask]);
  };

  const handleDeleteTask = (id: number) => {
    setTasks((prevTasks) => prevTasks.filter((task) => task.id !== id));
  };

  return (
    <Container maxWidth="xl">
      <Typography variant="h4" gutterBottom>
        Sneak Preview Entertainment - "The Prank" Task Board
      </Typography>
      <Grid container spacing={2}>
        <Grid item xs={4}>
          <Column title="To Do" tasks={tasks.filter((task) => task.id <= 3)} onDeleteTask={handleDeleteTask} />
        </Grid>
        <Grid item xs={4}>
          <Column title="In Progress" tasks={tasks.filter((task) => task.id > 3 && task.id <= 6)} onDeleteTask={handleDeleteTask} />
        </Grid>
        <Grid item xs={4}>
          <Column title="Done" tasks={tasks.filter((task) => task.id > 6)} onDeleteTask={handleDeleteTask} />
        </Grid>
      </Grid>
      <Button variant="outlined" color="primary" onClick={handleCreateTask}>
        Create a Task
      </Button>
    </Container>
  )
};

export default Board;