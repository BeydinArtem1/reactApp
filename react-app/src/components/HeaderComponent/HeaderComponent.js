import React, { useState } from "react";
import axios from "axios";
import Button from '@mui/material/Button';
import TextField from '@mui/material/TextField';
import './HeaderComponent.scss';

const HeaderComponent = ({ tasks, setTasks }) => {
  const [text, setText] = useState('');

  const addNewTask = async () => {
    if (text.trim()) {
      await axios.post('http://localhost:8000/createTask', {
        text,
        isCheck: false
      }).then(res => {
        setText(''.trim());
        tasks.push(res.data.data);
        setTasks([...tasks]);
      });
    } else {
      alert('this field is invalid');
      setText('');
    }    
  }

  return (<header>    
    <div className='header'>
      <TextField
        id="filled-basic"
        label=""
        variant="filled"
        value={text}
        onChange={(e) => setText(e.target.value)} />
      <Button
        onClick={() => addNewTask()}
        variant="contained">
        Add Task
      </Button>
    </div>
  </header>)
}

export default HeaderComponent
