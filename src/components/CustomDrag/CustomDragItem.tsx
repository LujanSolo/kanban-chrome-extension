interface CustomDragItemProps {
  taskTitle: string;
  summary?: string;
  description?: string;
}

const CustomDragItem: React.FC<CustomDragItemProps> = ({ taskTitle, summary, description }) => {
  return (
    <div style={{
      padding: '16px',
      marginBottom: '16px',
      minWidth: '250px',
      maxWidth: '500px',
      backgroundColor: 'f9f7f3',
      border: '1px solid #ccc',
      borderRadius: '4px',
      boxShadow: '0 4px 8px 0 rgba(0,0,0,0.2)',
      transition: '0.3s',
      cursor: 'move',
      display: 'flex',
      flexDirection: 'column',
      justifyContent: 'space-between',
      height: 'auto'
    }}>
      <div style={{ marginBottom: '8px', fontWeight: 'bold', color: 'black' }}>{taskTitle}</div>
      {summary && <div style={{ marginBottom: '8px' }}>{summary}</div>}
      {description && <div style={{ whiteSpace: 'pre-wrap' }}>{description}</div>}
    </div>
  )
}

export default CustomDragItem;