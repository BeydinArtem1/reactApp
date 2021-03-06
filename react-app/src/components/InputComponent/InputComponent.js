import React, { useState } from 'react';
import axios from 'axios';
import Button from '@mui/material/Button';
import TextField from '@mui/material/TextField';
import './InputComponent.scss';

const InputComponent = ({ item, setTasks, goToMain }) => {
  const [text, setText] = useState(item.text);
  const { _id, isCheck } = item;

  const saveTask = async () => {
    if (text.trim()) {
      await axios.patch('http://localhost:8000/updateTask', {
        _id,
        text,
        isCheck
      }).then(res => {
        setTasks(res.data.data);
      });
    } else {
      alert('this field is invalid');
    }
  }

  return (
    <div className='InputDiv'>
      <TextField
        id="outlined-basic"
        label="Edit task"
        variant="outlined"
        type='text'
        className='edit-input'
        value={text}
        onChange={(e) => setText(e.target.value)}
      />
      <Button
        variant="contained"
        color="success"
        onClick={() => {
            saveTask();
            goToMain();
          }
        }
      >
        Save
      </Button>
      <Button
        variant="contained"
        onClick={() => goToMain()}
      >
        Back
      </Button>
    </div>)
}

export default InputComponent;