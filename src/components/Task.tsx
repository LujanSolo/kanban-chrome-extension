import { Paper, Typography, IconButton } from "@mui/material";
import DeleteIcon from "@mui/icons-material/Delete";

interface TaskProps {
  title: string;
  description: string;
  onDelete: () => void;
}

const Task: React.FC<TaskProps> = ({ title, description, onDelete }) => {
  return (
    <Paper elevation={2} style={{ padding: '8px', marginBottom: '8px' }}>
      <Typography variant="subtitle1" gutterBottom>
        {title}
      </Typography>
      <Typography variant="body2" color="textSecondary">
        {description}
      </Typography>
      <IconButton aria-label="delete" color="error" size="small" onClick={onDelete}>
        <DeleteIcon fontSize="small" />
      </IconButton>
    </Paper>
  );
};

export default Task;