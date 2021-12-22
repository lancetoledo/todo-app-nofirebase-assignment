import React, { useState } from 'react'
import { addDoc, collection } from 'firebase/firestore'
import db from '../utils/firebase'

function TaskInput({tasks, setTasks}) {

    const createId = (array) => {
        // Store the new array into ids
        const ids = array.map((item)=>item.id)
        return Math.max(...ids) + 1
    }
    
    // Save what I wrote in the input field into a state?
    const [input, setInput] = useState('')
    // when i type, a function should run that saves the states of the input
    const handleChange = (e) => {
        setInput(e.target.value)
    }

    // I need a function that runs when I submit
    const handleForm = async (e) => {
        e.preventDefault()
        // ADD what I put in input to the tasks array

        // ONLY CREATE OBJECT IF THERE IS AN INPUT?
        // Create an object with whatever I wrote in input as the text:

        if(input) {
            // const newTask = {
            //     id: createId(tasks),
            //     text: input.trim(),
            //     status: false
            // }
            // // ADD a new task to the tasks state (add a new task to the data array)
            // // How do we update the tasks state?

            // // tasks -> [{id:},{text:},{}]
            // // tasks -> newTask

            // setTasks([newTask,...tasks])

            // // Reset Input
            // // WHat state do I want to reset?
            // console.log(input)
            // setInput('')

            // with Firebase
            const collectionRef = collection(db, "tasks")
            const payload = {
                text: input.trim(),
                status: false
            }


           await addDoc(collectionRef, payload)
           setInput('')
        }

    }

    return (
        <div className='new-todo'>
            <div className='check'>
                <div className='check-mark'></div>
            </div>
            <div className='new-todo-input'>
                <form onSubmit={handleForm} >
                    <input value ={input} onChange={handleChange} type="text" placeholder="Create a new todo..."></input>
                </form>
            </div>
        </div>
    )
}

export default TaskInput
