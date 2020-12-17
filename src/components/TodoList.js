import React from "react";
import Todo from "./Todo";

const TodoList = (props) => {

    const onDeleteClick = (id) => {
        props.setTodo(props.todo.filter(task => task.id !== id));
    }

    const onCompleteClick = (id) => {
        props.setTodo(props.todo.map(task => {
            if(task.id === id){
                return {
                    ...task,
                    done: !task.done
                }
            }
            return task
        }));
    }


    return (
        <div className="todo-container">
            <ul className="todo-list">
                {props.todo.map(task => <Todo todo={task} onDeleteClick={onDeleteClick} onCompleteClick={onCompleteClick}/>)}
            </ul>
        </div>
    )
}

export default TodoList;
