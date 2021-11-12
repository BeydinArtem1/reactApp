import React, { useState, useEffect } from 'react';
import {
  Switch,
  Route,
  Redirect,
  useHistory
} from 'react-router-dom';
import axios from 'axios';
import InputComponent from './components/InputComponent/InputComponent';
import MainComponent from './components/MainComponent/MainComponent'
import './App.scss';

const App = () => {
  const [item, setItem] = useState({});
  const [tasks, setTasks] = useState([]);
  const history = useHistory();

  const goToedit = (item) => {
    history.push(`/edit/:_id${item._id}`);
  }

  const goToMain = () => {
    history.push('/main');
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
          <MainComponent
            tasks={tasks}
            setTasks={setTasks}
            goToedit={goToedit}
            setItem={setItem}
          />
        </Route>
        <Route path="/edit/:id">
          <InputComponent
            item={item}
            setTasks={setTasks}
            goToMain={goToMain}
          />
        </Route>
        <Redirect from="/" to="/main" />
      </Switch>
    </div>
  );
}

export default App;
