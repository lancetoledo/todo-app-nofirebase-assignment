import React from 'react'

// #5 add tasks and setTasks as props will use later!
function Task({task}) {

    // #2 Create a useState of the mutableTask

    // #3 Create a function that when click the task status will be true on the frontend and backend(data)



    return (
        <div className='todo-item'>
            <div className='check'>
                {/* #4a Add a ternary that if the mutableTask is true add the class "checked" to it*/}
                <div className='check-mark'>

                </div>
            </div>
            <div className='todo-text'>
                {task.text}
            </div>
        </div>
    )
}

export default Task
