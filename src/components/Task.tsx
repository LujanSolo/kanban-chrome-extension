import { Paper, Typography, IconButton } from "@mui/material";
import DeleteIcon from "@mui/icons-material/Delete";

interface TaskProps {
  id: number;
  title: string;
  description: string;
  onDelete: (id: number) => void;
}

const Task: React.FC<TaskProps> = ({ id, title, description, onDelete }) => {
  return (
    <Paper elevation={2} style={{ padding: '8px', marginBottom: '8px' }}>
      <Typography variant="subtitle1" gutterBottom>
        {title}
      </Typography>
      <Typography variant="body2" color="textSecondary">
        {description}
      </Typography>
      <IconButton aria-label="delete" color="error" size="small" onClick={() => onDelete(id)}>
        <DeleteIcon fontSize="small" />
      </IconButton>
    </Paper>
  );
};

export default Task;