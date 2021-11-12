import React, { useState, useEffect } from 'react';
import {
  Switch,
  Route,
  Redirect,
  useHistory
} from 'react-router-dom';
import axios from 'axios';
import HeaderComponent from './components/HeaderComponent/HeaderComponent';
import TaskComponent from './components/TaskComponent/TaskComponent';
import InputComponent from './components/InputComponent/InputComponent';
import './App.scss';

const App = () => {
  const [items, setItem] = useState({});
  const [tasks, setTasks] = useState([]);
  const history = useHistory();

  const goToedit = (item) => {
    history.push(`/edit/:_id${item._id}`);
  }

  const goToTask = () => {
    history.push('/task');
  }

  useEffect(() => {
    axios.get('http://localhost:8000/allTasks').then(res => {
      setTasks(res.data.data);
    });
  }, []);

  return (
    <div className='main'>
      <h1>ToDo List</h1>
      <Switch>
        <Route path="/main">
          <HeaderComponent tasks={tasks} setTasks={setTasks} />
          <div className='content'>
            {
              tasks.sort((a, b) => (a.isCheck - b.isCheck)).map((item, index) =>
                <TaskComponent
                  key={`task-${index}`}                  
                  setTasks={setTasks}
                  index={index}
                  item={item}
                  goToedit={goToedit}
                  setItem={setItem}
                />)
            }
          </div>
        </Route>
        <Route path="/edit/:id">
          <InputComponent
            item={items}
            setTasks={setTasks}
            goToTask={goToTask}
          />
        </Route>
        <Redirect from="/" to="/main" />
      </Switch>
    </div>
  );
}

export default App;
