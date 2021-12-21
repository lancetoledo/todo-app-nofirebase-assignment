import React from 'react'
import Task from './Task'

// #10c destructure setTasks,filterStatus,setFilterStatus,filteredTasks
function TaskList({tasks}) {

    console.log(tasks)

    // #12b Create a funciton called clearCompleted that will clear completed Tasks by updating the tasks with the filtered tasks, then reset the filterStatus("all")


    return (
        <div className='todo-items-wrapper'>
            <div className='todo-items'>
    
                {/* #5 pass down tasks and setTasks for later! */}
                {/* #11 switch tasks.map to filteredTasks.map() */}
                {tasks.map((item)=> {
                    return <Task 
                                task = {item}
                            />
                })}
             
            </div>

            

            {/* Can be it's own component */}
            <div className='todo-items-info'>
                <div className='items-left'>
                   <p> {tasks.length} items left</p>
                </div>

              {/* #8 Create a FilterControl component  and pass down filterStatus and setFilterStatus*/}
                <div className='item-statuses'>
                    <span>All</span>
                    <span>Active</span>
                    <span>Completed</span>
                </div>

            {/* #9 In FilterControl create a function that onClick the status gets set to the span that was clicked */}


    
                <div className='items-clear'>
                    {/* #12a create an onClick that runs a function to clear completed tasks */}
                    <span>Clear Completed</span>
                </div>
            </div>
        </div>
    )
}

export default TaskList
