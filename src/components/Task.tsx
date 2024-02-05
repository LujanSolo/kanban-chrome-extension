import { CSSProperties, useState } from 'react';
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
  onMove: () => void;
}

const Task: React.FC<TaskProps> = ({ id, title, summary, description, onDelete }) => {
  const [{ isDragging }, drag] = useDrag(() => ({
    type: ItemTypes.TASK,
    item: { id },
    collect: (monitor) => ({
      isDragging: !!monitor.isDragging(),
    }),
  }));

  const handleInputChange = (field: keyof typeof userInput, value: string) => {
    setUserInput((prev) => ({ ...prev, [field]: value }));
  };

  const [userInput, setUserInput] = useState({
    title: title || "",
    summary: summary || "",
    description: description || "",
  });

  const dragStyle: CSSProperties = isDragging ? {
    opacity: 0.5,
    backgroundColor: '$f4f4f4',
    border: '1px dashed #000',
  } : {};

  return (
    <Card ref={drag} style={{ marginBottom: '8px', ...dragStyle }}>
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
