const CustomDragItem: React.FC = ({ title }) => {
  return(
    <div style={{ padding: '16px', marginBottom: '16px', minWidth: '250px', backgroundColor: 'white', border: '1px solid #ccc', borderRadius: '4px', boxShadow: '0 4px 8px 0 rgba(0,0,0,0.2)', transition: '0.3s', cursor: 'move', display: 'flex', flexDirection: 'column', justifyContent: 'space-between', height: '100%'}}>
      {title}
    </div>
  )
}

export default CustomDragItem;