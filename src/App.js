import './App.css';
import TaskInput from './components/TaskInput';
import TaskList from './components/TaskList';
import { useState, useEffect } from 'react'
import { onSnapshot,collection } from 'firebase/firestore';
import db from './utils/firebase';


const data = [
  { id: 1, text: "Finish contacts hw", status: false },
  { id: 2, text: "Study react hooks", status: false },
  { id: 3, text: "Finish Clever programmer challenge", status: false },
  { id: 4, text: "Run 1 mile", status: false },
  { id: 5, text: "Finish errands", status: false },
  { id: 6, text: "Complete Todo App", status: false },
  
];



function App() {

  // Create a state that holds the data arr
  const [tasks,setTasks] = useState(data)

  // #6 create a state that holds the current filterStatus
  const [filterStatus, setFilterStatus] = useState("all")

  // #10a Create a state that holds filteredTasks and map through that instead of tasks in TaskList.js
  const [filteredTasks, setFilteredTasks] = useState(tasks)

  // // #7 useEffect that has a handleFilter() function
  // useEffect(()=> {
  //   // #7b Handle function should have a if statement that depending on the filterStatus it will setFilteredTasks() with the filtered tasks
  //   const handleFilter = () => {
  //     if(filterStatus === "active") {
  //       console.log("FILTER STATUS IS ACTIVE")
  //       return setFilteredTasks(tasks.filter((task)=>task.status === false))
  //     }
  //     else if (filterStatus === "completed") {
  //       console.log("STATUS IS COMPLETED")
  //       // If the filter status is completed I should setFilteredTasks to only the tasks that have the status of true
  //       return setFilteredTasks(tasks.filter((task)=> task.status === true))
  //     }
  //     else {
  //       console.log("IS ALL")
  //       // If the status is all setFilteredTasks to tasks
  //       return setFilteredTasks(tasks)
  //     }
  //   }
  //   handleFilter()
  // }, [tasks,filterStatus])


  // Make a useEffect that uses onSnapshot
  useEffect(()=>{
    const unsub = onSnapshot(collection(db,"tasks"),(snapshot)=>{
      let todos = snapshot.docs.map(doc=> ({...doc.data(), id: doc.id}))
      const handleFilter = () => {
        if(filterStatus === "active") {
          console.log("FILTER STATUS IS ACTIVE")
          return setFilteredTasks(todos.filter((task)=>!task.status))
        }
        else if (filterStatus === "completed") {
          console.log("STATUS IS COMPLETED")
          // If the filter status is completed I should setFilteredTasks to only the todos that have the status of true
          return setFilteredTasks(todos.filter((task)=> task.status))
        }
        else {
          console.log("IS ALL")
          // If the status is all setFilteredTasks to todos
          return setFilteredTasks(todos)
        }
      }
      handleFilter()
    }) 
    return unsub
  },[tasks,filterStatus])
  

console.log(filteredTasks)



  return (
    <div className="App">
      <div className='container'>
        <div className='header'>
          <div className='title'>
            TODO
          </div>
          <div className='theme'>
            <img src='./images/icon-sun.svg' alt='theme'/>
          </div>
        </div>
        {/* Add a todo item to the tasks */}
        <TaskInput
          tasks = {tasks}
          setTasks = {setTasks}
         />

        {/* Component that holds the task list */}
        {/* #10b pass down filterStatus, setFilterStatus, filteredTasks to the component */}
        <TaskList
          tasks = {tasks}
          setTasks = {setTasks}
          filterStatus = {filterStatus}
          setFilterStatus = {setFilterStatus}
          filteredTasks = {filteredTasks}
          setFilteredTasks = {setFilteredTasks}
        />
      </div>
    </div>
  );
}

export default App;
