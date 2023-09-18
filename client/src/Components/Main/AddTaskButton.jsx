import React from 'react'

const AddTaskButton = ({ref}) => {
    return (
        <button onClick={() => ref.current.focus()} className=' btn btn-primary  '>Add a Task </button>
    )
}

export default AddTaskButton