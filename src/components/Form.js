import React from "react";

const Form = (props) => {

    const onInputChange = (ev) => props.onInputChange(ev);

    return (
        <form>
            <input type="text" value={props.inputText} className="todo-input" onChange={ev => onInputChange(ev.target.value)}/>
            <button className="todo-button" type="submit" onClick={(e) => props.handleAddTodoClick(e)}>
                <i className="fas fa-plus-square"></i>
            </button>
            <div className="select">
                <select name="todos" className="filter-todo">
                <option value="all">All</option>
                <option value="completed">Completed</option>
                <option value="uncompleted">Uncompleted</option>
                </select>
            </div>
        </form>
    )
}

export default Form;