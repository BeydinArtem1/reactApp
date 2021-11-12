import React from "react";
import EditIcon from '@mui/icons-material/Edit';
import DeleteOutlineIcon from '@mui/icons-material/DeleteOutline';
import './TextComponent.scss';

const TextComponent = ({ item, deleteTask, goToedit, setItem }) => {
  const { text, isCheck } = item;
  return (
    <div className='textDiv'>
      <p className={isCheck ? 'text-Checked' : 'text'} >{text}</p>     
      <EditIcon
        visibility={isCheck ? 'hidden' : 'visible'}
        onClick={() => {
          setItem(item);          
          goToedit(item);
        }
        } />      
      <DeleteOutlineIcon onClick={() => deleteTask()} />
    </div>)
}

export default TextComponent;