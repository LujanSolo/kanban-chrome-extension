import { Card, CardHeader, CardContent, TextField, IconButton } from "@mui/material";
import DeleteIcon from "@mui/icons-material/Delete";
import { useDrag } from "react-dnd";
import { ItemTypes } from "../constants";
import { useState } from "react";
interface TaskProps {
  id: number;
  initialTitle: string;
  initialSummary: string;
  initialDescription: string;
  onDelete: (id: number) => void;
}

const Task: React.FC<TaskProps> = ({ id, initialTitle, initialSummary, initialDescription, onDelete }) => {
  const [title, setTitle] = useState(initialTitle || "");
  const [summary, setSummary] = useState(initialSummary || "");
  const [description, setDescription] = useState(initialDescription || "");

  return (
    <Card style={{ marginBottom: "8px" }}>
      <CardHeader
        title={
          <TextField
            value={title}
            onChange={(e) => setTitle(e.target.value)}
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
        <TextField
          value={summary}
          onChange={(e) => setSummary(e.target.value)}
          fullWidth
          variant="standard"
          label="Summary"
          multiline
          rows={2}
          />
        <TextField
          value={description}
          onChange={(e) => setDescription(e.target.value)}
          fullWidth
          variant="standard"
          label="Description"
          multiline
          rows={4}
        />
      </CardContent>
    </Card>
  );
};

export default Task;