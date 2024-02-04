// src/components/Task.tsx
import React, { useState } from 'react';
import { Card, CardHeader, CardContent, IconButton, TextField, TextareaAutosize } from '@mui/material';
import DeleteIcon from '@mui/icons-material/Delete';
import { useDrag } from 'react-dnd';
import { ItemTypes } from '../constants';

interface TaskProps {
  id: number;
  title: string;
  summary: string;
  description: string;
  onDelete: (id: number) => void;
  onMove: (targetColumn: string) => void;
}

interface DragObjectWithType {
  type: string;
  id: number;
}

const Task: React.FC<TaskProps> = ({ id, title, summary, description, onDelete }) => {
  const [, drag] = useDrag<DragObjectWithType, void, { isDragging: boolean }>({
    type: ItemTypes.TASK,
    item: { type: ItemTypes.TASK, id},
  });

  const handleInputChange = (field: keyof typeof userInput, value: string) => {
    setUserInput((prev) => ({ ...prev, [field]: value }));
  };

  const [userInput, setUserInput] = useState({
    title: title || "",
    summary: summary || "",
    description: description || "",
  });

  return (
    <Card ref={drag} style={{ marginBottom: '8px' }}>
      <CardHeader
        title={
          <TextField
            value={userInput.title}
            onChange={(e) => handleInputChange('title', e.target.value)}
            fullWidth
            variant="standard"
            label="Title"
          />
        }
        action={
          <IconButton aria-label="delete" onClick={() => onDelete(id)}>
            <DeleteIcon />
          </IconButton>
        }
      />
      <CardContent>
        <TextareaAutosize
          value={userInput.summary}
          onChange={(e) => handleInputChange('summary', e.target.value)}
          aria-label="minimum height"
          minRows={2}
          placeholder="Summary"
        />
        <TextareaAutosize
          value={userInput.description}
          onChange={(e) => handleInputChange('description', e.target.value)}
          aria-label="minimum height"
          minRows={4}
          placeholder="Description"
        />
      </CardContent>
    </Card>
  );
};

export default Task;
