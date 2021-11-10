import React, { useState, useEffect } from 'react';
import axios from 'axios';
import HeaderComponent from './components/HeaderComponent/HeaderComponent';
import TaskComponent from './components/TaskComponent/TaskComponent';
import './App.scss';

const App = () => {

  const [tasks, setTasks] = useState([]);
 
  useEffect(() => {
    axios.get('http://localhost:8000/allTasks').then(res => {
      setTasks(res.data.data);
    });
  }, []);
  

  return (
    <div className='main'>
     <HeaderComponent tasks={tasks} setTasks={setTasks} />
      <div className='content'>
        {
          tasks.map((item, index) => <TaskComponent tasks={tasks} setTasks={setTasks} index={index} item={item} />)
        }
      </div>
    </div>
  );
}

export default App;
