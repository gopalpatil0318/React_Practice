import React, { useState } from 'react'

function Tasks() {

  const dailyTasks= [];

  const [tasks , setTasks] = useState(dailyTasks);
  const [newTask,setNewTask] = useState('');


  const addTasks = () => {
    setTasks([...tasks,newTask])
    setNewTask('')
  }

  const deleteTask = (index) => {
    const updatedTasks = tasks.filter((_, i) => i !== index);
    setTasks(updatedTasks);
  };

  return (
    <div>
      <h1>
        Your Tasks
      </h1>
      <div class="Task">
        <ul>
          
          {
            tasks.map((tasks,index)=>{
              if(tasks != '')
              {
                return(
                  <li  key={index} > {tasks} <i class="material-icons" onClick={()=> deleteTask(index)}>delete</i></li>
                )
              }
            })
          }
        </ul>
      </div>

      <input type="text" value={newTask} onChange={(e) => setNewTask(e.target.value)} placeholder="Enter Tasks" />
      <button onClick={ addTasks }>Add Tasks</button>
    </div>
  )
}

export default Tasks


