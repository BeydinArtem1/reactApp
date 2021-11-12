import React from "react";
import TaskComponent from '../TaskComponent/TaskComponent';
import HeaderComponent from '../HeaderComponent/HeaderComponent';


const MainComponent = ({tasks, setTasks, goToedit, setItem }) => {
  return (<>
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
  </>
  )
}

export default MainComponent;