import React, { useState } from 'react'

const Task = ({ task, handleToggole, handleDelete, handleEdit, editedText,setEditedText,handleUpdate }) => {
    const [lineThrough, setLineThrough] = useState(task.checked)
    const [editMood, setEditMood] = useState(false)

    const handleChange = () => {
        handleToggole(task.id)
        setLineThrough(prev => !prev)
    }


    const changeEdit = () => {
        handleEdit(task.id)
        setEditMood(prev => !prev)
    }

    const handleDone = () => {
        setEditMood(prev => !prev)
        handleUpdate(task.id)
    }

    return (
        <>
            <li className='task'>
                {!editMood && (
                    <>
                        <div style={{ display: 'flex'}}>
                            <input  type="checkbox" onChange={handleChange} checked={task.checked} />
                            <p className={lineThrough ? 'checked' : ''} style={{ marginLeft: '7px' }}>{task.text}</p>
                        </div>
                        <div>
                            <button onClick={handleDelete} className='btn'>X</button>
                            <button onClick={changeEdit} className='btn'>Edit</button>
                        </div>
                    </>
                )}
                {editMood && (
                    <div className='todo'>
                        <input className='edit-input' type="text" onChange={e => setEditedText(e.target.value)} value={editedText} />
                        <button onClick={handleDone}>Ok</button>
                    </div>
                )}
            </li>
        </>
    )
}

export default Task

// whenever we press at edit button we're gona activate the edit mode
// we wnna access the text and show it up to 
// we're gonna update the editedText with whatever in the certain task that we're deling with