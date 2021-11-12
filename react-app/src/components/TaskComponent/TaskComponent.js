import React from 'react';
import axios from 'axios';
import TextComponent from '../TextComponent/TextComponent';
import './TaskComponent.scss';

const TaskComponent = ({ setTasks, index, item, goToedit, setItem }) => {
  const { _id, isCheck } = item
  const changeCheckbox = async () => {
    await axios.patch('http://localhost:8000/updateTask', {
      _id,
      isCheck: !isCheck
    }).then(res => {
      setTasks(res.data.data);
    });
  }

  const deleteTask = async () => {
    await axios.delete(`http://localhost:8000/deleteTask?_id=${_id}`).then(res => {
      setTasks(res.data.data);
    });
  }

  return (
    <div className='container'>
      <input
        type='checkbox'
        checked={isCheck}
        onChange={() => changeCheckbox(index)} />
      <TextComponent
        setItem={setItem}
        item={item}
        deleteTask={deleteTask}
        goToedit={goToedit}
      />
    </div>);
}

export default TaskComponent;