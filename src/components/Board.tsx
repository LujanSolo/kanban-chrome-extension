import { useState } from 'react';
import { Container, Typography, Grid } from '@mui/material';
import Column from './Column';

interface Task {
  id: number;
  title: string;
  summary: string;
  description: string;
}

const Board: React.FC = () => {
  const [tasks, setTasks] = useState<Task[]>([]);

  const handleDeleteTask = (taskId: number) => {
    setTasks((prevTasks) => prevTasks.filter((task) => task.id !== taskId));
  };

  const handleAddTask = () => {
    const newTask: Task = {
      id: tasks.length + 1,
      title: 'To Do',
      summary: 'Summary',
      description: 'Description',
    };

    setTasks((prevTasks) => [...prevTasks, newTask]);
  };

  const handleMoveTask = (taskId: number, targetColumn: string) => {
    setTasks((prevTasks) => {
      const updatedTasks = prevTasks.map((task) =>
        task.id === taskId ? { ...task, title: targetColumn } : task
      );
      return updatedTasks;
    });
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
            tasks={tasks.filter((task) => task.title === 'To Do')}
            onDeleteTask={handleDeleteTask}
            onAddTask={handleAddTask}
            onMoveTask={handleMoveTask}
          />
        </Grid>
        <Grid item xs={4}>
          <Column
            title="In Progress"
            tasks={tasks.filter((task) => task.title === 'In Progress')}
            onDeleteTask={handleDeleteTask}
            onMoveTask={handleMoveTask}
          />
        </Grid>
        <Grid item xs={4}>
          <Column
            title="Done"
            tasks={tasks.filter((task) => task.title === 'Done')}
            onDeleteTask={handleDeleteTask}
            onMoveTask={handleMoveTask}
          />
        </Grid>
      </Grid>
    </Container>
  );
};

export default Board;
