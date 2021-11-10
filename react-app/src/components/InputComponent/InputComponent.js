import React from "react";
import SaveAltIcon from '@mui/icons-material/SaveAlt';
import ArrowBackIcon from '@mui/icons-material/ArrowBack';
import './InputComponent.scss';

const InputComponent = ({ text, setText, setEdit, saveTask }) => {
  return (
    <div className='InputDiv'>
      <input
        type='text'
        className='edit-input'
        value={text}
        onChange={(e) => setText(e.target.value)}
      />
      <SaveAltIcon onClick={() => {
        setEdit(false);
        saveTask();
      }
      }
      />
      <ArrowBackIcon onClick={() => setEdit(false)} />
    </div>)
}

export default InputComponent;