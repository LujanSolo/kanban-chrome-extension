import { useState } from 'react';
import { Container, Typography, Grid } from '@mui/material';
import Column from '../Column/Column';
import styles from './Board.module.css';

interface Task {
  id: number;
  taskTitle: string;
  summary: string;
  description: string;
  column: string;
}

const Board: React.FC = () => {
  const [tasks, setTasks] = useState<Task[]>([]);

  const handleDeleteTask = (taskId: number) => {
    setTasks(prevTasks => prevTasks.filter(task => task.id !== taskId));
  };

  const handleAddTask = () => {
    const newTask: Task = {
      id: tasks.length + 1,
      taskTitle: '',
      summary: '',
      description: '',
      column: 'To Do',
    };

    setTasks(prevTasks => [...prevTasks, newTask]);
  };

  const handleMoveTask = (taskId: number, targetColumn: string) => {
    setTasks(prevTasks => {
      const updatedTasks = prevTasks.map(task =>
        task.id === taskId ? { ...task, column: targetColumn } : task
      );
      return updatedTasks;
    });
  };

  return (
    <Container maxWidth="xl" className={styles.container}>
      <Typography variant="h4" gutterBottom className={styles.mainHeader}>
        Google Chrome Kanban Extension
      </Typography>
      <Grid container spacing={3}>
        {['To Do', 'In Progress', 'Done'].map((columnTitle, index) => (
          <Grid item xs={4} key={index} >
            <Column
              title={columnTitle}
              tasks={tasks.filter(task => task.column === columnTitle)}
              onDeleteTask={handleDeleteTask}
              onAddTask={columnTitle === 'To Do' ? handleAddTask : undefined}
              onMoveTask={handleMoveTask}
            />
          </Grid>
        ))}
      </Grid>
    </Container>
  );
};

export default Board;
