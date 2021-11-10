import React, { useState } from 'react';
import axios from 'axios';
import EditIcon from '@mui/icons-material/Edit';
import DeleteOutlineIcon from '@mui/icons-material/DeleteOutline';
import SaveAltIcon from '@mui/icons-material/SaveAlt';
import ArrowBackIcon from '@mui/icons-material/ArrowBack';
import './TaskComponent.scss'

const TaskComponent = ({ tasks, setTasks, index, item }) => {
  const [edit, setEdit] = useState(false);
  const [text, setText] = useState(item.text);
  const changeCheckbox = async (index) => {
    let { _id, text, isCheck } = tasks[index];
    await axios.patch('http://localhost:8000/updateTask', {
      _id,
      text,
      isCheck: !isCheck
    }).then(res => {
      setTasks(res.data.data);
    });
  }

  const saveTask = async () => {
    let { _id, isCheck} = tasks[index];
    await axios.patch('http://localhost:8000/updateTask', {
      _id,
      text,
      isCheck
    }).then(res => {
      setTasks(res.data.data);
    });
  }

  const deleteTask = async () => {
    await axios.delete(`http://localhost:8000/deleteTask?_id=${tasks[index]._id}`).then(res => {
      setTasks(res.data.data);
    })
  }

  return (
    <div key={`task-${index}`} className='container'>
      <input
        type='checkbox'
        checked={item.isCheck}
        onChange={() => changeCheckbox(index)} />
      {edit
        ? <div>
          <input value={text} onChange={(e) => setText(e.target.value)} />
          <SaveAltIcon onClick={() => {
            setEdit(false);
            saveTask();
          }
          } />
          <ArrowBackIcon onClick={() => setEdit(false)} />
        </div>
        : <div>
          <p>{item.text}</p>
          <EditIcon onClick={() => setEdit(true)} />
          <DeleteOutlineIcon onClick={() => deleteTask()} />
        </div>}
    </div>);
}

export default TaskComponent;