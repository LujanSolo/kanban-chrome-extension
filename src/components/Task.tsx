import React, { CSSProperties, useState, useRef, useEffect } from 'react';
import { Card, CardHeader, CardContent, IconButton, TextField } from '@mui/material';
import DeleteIcon from '@mui/icons-material/Delete';
import { useDrag } from 'react-dnd';
import { ItemTypes } from '../constants';
import { getEmptyImage } from 'react-dnd-html5-backend';

interface TaskProps {
  id: number;
  taskTitle: string;
  summary: string;
  description: string;
  column: string;
  onDelete: (id: number) => void;
  onMove: () => void;
}

const Task: React.FC<TaskProps> = ({ id, taskTitle, summary, description, onDelete }) => {
  const ref = useRef<HTMLDivElement>(null);

  const [{ isDragging }, drag, preview] = useDrag(() => ({
    type: ItemTypes.TASK,
    item: { id, taskTitle, summary, description },
    collect: (monitor) => ({
      isDragging: !monitor.isDragging(),
    }),
    options: {
      dropEffect: 'move',
    },
  }), [id, taskTitle, summary, description]);

  useEffect(() => {
    preview(getEmptyImage(), { captureDraggingState: true });
  }, [preview]);

  drag(ref);

  const handleInputChange = (field: keyof typeof userInput, value: string) => {
    setUserInput(prev => ({ ...prev, [field]: value }));
  };

  const [userInput, setUserInput] = useState({
    taskTitle: taskTitle || "",
    summary: summary || "",
    description: description || "",
  });

  const dragStyle: CSSProperties = isDragging ? {
    opacity: 0.5,
    backgroundColor: '#96B6C5', 
    border: '1px solid #000',
  } : {};

  return (
    <Card ref={drag} style={{ marginBottom: '8px', ...dragStyle }}>
      <CardHeader
        title={
          <TextField
            value={userInput.taskTitle}
            onChange={(e) => handleInputChange('taskTitle', e.target.value)}
            fullWidth
            variant="standard"
            label="Task Title" // Corrected the label to be more user-friendly
          />
        }
        action={
          <IconButton aria-label="delete" onClick={() => onDelete(id)}>
            <DeleteIcon />
          </IconButton>
        }
      />
      <CardContent>
        <TextField
          value={userInput.summary}
          onChange={(e) => handleInputChange('summary', e.target.value)}
          fullWidth
          variant="outlined"
          label="Summary"
          multiline
          minRows={2}
          margin="normal"
        />
        <TextField
          value={userInput.description}
          onChange={(e) => handleInputChange('description', e.target.value)}
          fullWidth
          variant="outlined"
          label="Description"
          multiline
          minRows={4}
          margin="normal"
        />
      </CardContent>
    </Card>
  );
};

export default Task;
