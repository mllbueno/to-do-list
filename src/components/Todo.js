import React from "react";

const Todo = (props) => {

    return (
        <div className="todo">
            <li className={`todo-item ${props.todo.done ? "completed" : ""}`}>{props.todo.name}</li>
            <button className="complete-btn" onClick={() => props.onCompleteClick(props.todo.id)}>
                <i className="fas fa-check"></i>
            </button>
            <button className="trash-btn" onClick={() => props.onDeleteClick(props.todo.id)}>
                <i className="fas fa-trash"></i>
            </button>
        </div>
    )
}

export default Todo;
