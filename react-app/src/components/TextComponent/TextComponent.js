import React from "react";
import EditIcon from '@mui/icons-material/Edit';
import DeleteOutlineIcon from '@mui/icons-material/DeleteOutline';
import './TextComponent.scss';

const TextComponent = ({ item, setEdit, deleteTask }) => {
  return (
    <div className='textDiv'>
      <p>{item.text}</p>
      <EditIcon onClick={() => setEdit(true)} />
      <DeleteOutlineIcon onClick={() => deleteTask()} />
    </div>)
}

export default TextComponent;