import React from 'react'
import ToDo from './ToDo'

const ToDoList = ({tasks}) => (
    <React.Fragment>
        <h1 className="m-3">Liste de tâches</h1>
        <ul className="list-group m-3">
            {
                tasks.map((task) => <ToDo task={task} key={task.id} />)
            }
        </ul>
    </React.Fragment>
)

export default ToDoList