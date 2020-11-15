import React, { useEffect, useRef, useState } from "react";
import { useKretsloop } from "../hooks/kretsloop";

const todoStyle = {
    padding: "12px",
}

const doneStyle = {
    opacity: 0.4,
}

export function Todo(props) {
    const [state, setState] = useKretsloop({
        route: `todo/${props.todoId}`,
        state: {
            description: props.desc,
            done: false,
        },
    });
    const editInput = useRef();
    useEffect(() => {editInput.current && editInput.current.focus();});
    const [edit, setEdit] = useState(false);

    return (
      <div style={state.done ? {...todoStyle, ...doneStyle} : todoStyle}>
        <div className="card">
        <div className="card-header">
            <strong className="mr-auto">
                {state.done ? "Done - " : ""}[TODO-{props.todoId}]
            </strong>
            <div className="btn-group btn-group-sm float-right" role="group" aria-label="Basic example">
                <button className="btn btn-primary" onClick={() => setState({...state, done: !state.done})}>
                    { state.done ? "Restore" : "Done"}
                </button>
                <button className="btn btn-secondary" onClick={() => setEdit(true)}>Edit</button>
                <button className="btn btn-danger" onClick={() => props.deleteTodo(props.todoId)}>
                    Delete
                </button>
            </div>
        </div>
        <div className="card-body">
            {
                edit ?
                <form className="input-group mb-3" onSubmit={() => setEdit(false)}>
                    <input
                    ref={editInput}
                    type="text"
                    className="form-control"
                    name="description"
                    onChange={(e) => setState({...state, description: e.target.value})}
                    placeholder="To-Do description"
                    value={state.description}
                    aria-describedby="button-addon2"/>
                    <div className="input-group-append">
                    <button className="btn btn-primary" type="submit" id="button-addon2">
                        Save
                    </button>
                    </div>
                </form>
                :
                state.description
            }
        </div>
        </div>

      </div>
    );
}