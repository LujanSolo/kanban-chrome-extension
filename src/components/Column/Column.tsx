import { Paper, Typography, IconButton } from '@mui/material';
import Task from '../Task/Task';
import AddIcon from '@mui/icons-material/Add';
import { useDrop } from 'react-dnd';
import { ItemTypes } from '../../constants';
import styles from './Column.module.css';

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
    <Paper elevation={3} className={styles.paper} ref={drop}>
      <div className='container' >
        <div className='header'>
          <Typography variant="h6" className="title">
            {title}
          </Typography>
          {title === 'To Do' && onAddTask && (
            <IconButton aria-label="add" color="primary" onClick={onAddTask} className="addTaskButton">
              <AddIcon />
            </IconButton>
          )}
        </div>
        <div className='taskList'>
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
