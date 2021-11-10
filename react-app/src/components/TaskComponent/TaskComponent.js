import React, { useState } from 'react';
import axios from 'axios';
import InputComponent from '../InputComponent/InputComponent';
import TextComponent from '../TextComponent/TextComponent';
import './TaskComponent.scss';

const TaskComponent = ({ tasks, setTasks, index, item }) => {
  const [edit, setEdit] = useState(false);
  const [text, setText] = useState(item.text);

  const changeCheckbox = async () => {
    const { _id, isCheck } = item;
    await axios.patch('http://localhost:8000/updateTask', {
      _id,
      isCheck: !isCheck
    }).then(res => {
      setTasks(res.data.data);
    });
  }

  const saveTask = async () => {
    const { _id, isCheck } = item;
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
    });
  }

  return (
    <div className='container'>
      <input
        type='checkbox'
        checked={item.isCheck}
        onChange={() => changeCheckbox(index)} />
      {
        edit
          ? <InputComponent
            text={text}
            setText={setText}
            setEdit={setEdit}
            saveTask={saveTask}
          />
          : <TextComponent
            item={item}
            setEdit={setEdit}
            deleteTask={deleteTask}
          />
      }      
    </div>);
}

export default TaskComponent;