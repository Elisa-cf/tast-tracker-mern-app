import { useState } from 'react'
import Header from './components/Header'
import Tasks from './components/Tasks'
import AddTask from './components/AddTask'


const App = () => { 
  const [tasks, setTasks] = useState([
    {
        id: 1,
        text: "Doctors Appointment",
        day: "Feb 5th at 2:30 pm",
        reminder: true,
        
    },
    {
        id: 2,
        text: "Meeting at school",
        day: "Feb 6th at 1:30 pm",
        reminder: true,
        
    },
    {
        id: 3,
        text: "Food shooping",
        day: "Feb 5th at 2:30 pm",
        reminder: false,
        
    }
])

// adding task 

const addTask = (task) => {
const id = Math.floor(Math.random() * 1000) + 1 //create a new and random ID//
console.log(id)
const newTask = {id, ...task} //we want the id and all the things that the user will write//
setTasks([...tasks, newTask]) //we set the tasks already there and the new tasks/
}



//delete task

const deleteTask = (id) => {
 setTasks(tasks.filter((task) => task.id !== id))
}


//toggle reminder

const toggleReminder = (id) => {
setTasks(tasks.map((task) => task.id === id ? { ...task, reminder: !task.reminder } : task))
}


 return (
    <div className="container">
    <Header /> 
    <AddTask onAdd={addTask}/>
    {tasks.length > 0 ? <Tasks tasks ={tasks} onDelete={deleteTask} onToggle={toggleReminder}/> : "No more tasks"}
    </div>
  )
}

export default App;
