import { useState } from 'react';
import { Container, Typography, Grid } from '@mui/material';
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

  const handleCreateTask = (): void => {
    // Ensure that new tasks are added only to the "To Do" column
    const newTask: Task = {
      id: tasks.length + 1,
      title: 'New Task in To Do',
      description: 'Description for the new task in To Do',
    };

    // Update the state only if the task is in the "To Do" column
    setTasks((prevTasks) => {
      const updatedTasks = [...prevTasks, newTask];
      return updatedTasks;
    });
  };

  const handleDeleteTask = (id: number): void => {
    setTasks((prevTasks) => prevTasks.filter((task) => task.id !== id));
  };

  return (
    <Container maxWidth="xl">
      <Typography variant="h4" gutterBottom>
        Kanban Board
      </Typography>
      <Grid container spacing={3}>
        <Grid item xs={4}>
          <Column
            title="To Do"
            tasks={tasks.filter((task) => task.title.includes("To Do"))}
            onDeleteTask={handleDeleteTask}
            onAddTask={handleCreateTask}
          />
        </Grid>
        <Grid item xs={4}>
          <Column
            title="In Progress"
            tasks={tasks.filter((task) => task.title.includes("In Progress"))}
            onDeleteTask={handleDeleteTask}
          />
        </Grid>
        <Grid item xs={4}>
          <Column
            title="Done"
            tasks={tasks.filter((task) => task.title.includes("Done"))}
            onDeleteTask={handleDeleteTask}
          />
        </Grid>
      </Grid>
    </Container>
  );
};

export default Board;