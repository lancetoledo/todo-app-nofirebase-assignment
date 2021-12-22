import React from 'react'
import FilterControl from './FilterControl'
import Task from './Task'
import { deleteDoc,doc } from 'firebase/firestore'
import db from '../utils/firebase'

// #10c destructure setTasks,filterStatus,setFilterStatus,filteredTasks
function TaskList({tasks, setTasks, filterStatus, setFilterStatus, filteredTasks, setFilteredTasks}) {

    console.log(tasks)

    // #12b Create a funciton called clearCompleted that will clear completed Tasks by updating the tasks with the filtered tasks, then reset the filterStatus("all")
    const clearCompleted = () => {
        // setTasks(tasks.filter((task)=> !task.status))
        // Firebase utilize deleteDoc()
        filteredTasks.map(async (item)=> {
            if(item.status === true) {
               await deleteDoc(doc(db,"tasks", item.id))
            }
        })
    }

    return (
        <div className='todo-items-wrapper'>
            <div className='todo-items'>
    
                {/* #5 pass down tasks and setTasks for later! */}
                {/* #11 switch tasks.map to filteredTasks.map() */}
                {filteredTasks.map((item)=> {
                    return <Task 
                                task = {item}
                                tasks = {tasks}
                                setTasks={setTasks}
                            />
                })}
             
            </div>

            

            {/* Can be it's own component */}
            <div className='todo-items-info'>
                <div className='items-left'>
                   <p> {tasks.length} items left</p>
                </div>

                <FilterControl
                    filterStatus = {filterStatus}
                    setFilterStatus = {setFilterStatus}
                />

    
                <div className='items-clear'>
                    {/* #12a create an onClick that runs a function to clear completed tasks */}
                    <span onClick={clearCompleted}>Clear Completed</span>
                </div>
            </div>
        </div>
    )
}

export default TaskList
