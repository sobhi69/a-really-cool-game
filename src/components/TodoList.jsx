import React, { useEffect } from 'react'
import { useState } from 'react'
import Task from './Task'
const TodoList = () => {
    const [text, setText] = useState('')
    const [tasks, setTasks] = useState(JSON.parse(localStorage.getItem('todos')) || [])
    const [editedText, setEditedText] = useState('')

    useEffect(() => {
        localStorage.setItem('todos', JSON.stringify(tasks))
    }, [])


    useEffect(() => {
        localStorage.setItem('todos', JSON.stringify(tasks))
    }, [tasks])

    const handleClick = (text) => {
        const newTask = {
            id: Date.now(),
            text,
            checked: false,
        }

        if (text.trim() !== '') {
            setTasks([...tasks, newTask])
        }
        setText('')
    }

    const handleToggole = (id) => {
        setTasks(tasks.map(t => {
            if (t.id === id) {
                return { ...t, checked: !t.checked }
            } else {
                return t
            }
        }))

    }

    const handleDelete = (id) => {
        setTasks(tasks.filter(t => t.id !== id))
    }

    const handleEdit = (id) => {
        tasks.map(t => {
            if (t.id === id) {
                setEditedText(t.text)
            }
        })

        // we wanna do two things here 
        // first thing we wnna access the text at this spacific task that we're at
    }

    const handleUpdate = (id) => {
        setTasks(tasks.map(t => {
            if (t.id === id) {
                return {...t, text:editedText}
            } else {
                return t
            }
        }))
    }

    return (
        
        <div className='container'>
            <input className='input-user' type="text" onChange={(e) => setText(e.target.value)} value={text} />
            <button className='add-btn' onClick={() => handleClick(text)}>Add</button>
            <ul className='tasks'>
                {tasks.map(task => (
                    <Task
                        key={task.id}
                        task={task}
                        handleToggole={() => handleToggole(task.id)}
                        handleDelete={() => handleDelete(task.id)}
                        handleUpdate={() => handleUpdate(task.id)}
                        text={text}
                        editedText={editedText}
                        setEditedText={setEditedText}
                        handleEdit={() => handleEdit(task.id)}
                    />
                ))}
            </ul>
        </div>
    )
}

export default TodoList
