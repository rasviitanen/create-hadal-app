import React, { useState } from "react";
import { Todo } from './Todo.jsx'
import { useKretsloop } from "../hooks/kretsloop";

export function TodoTracker(props) {
    const [state, setState] = useKretsloop({
        route: "todo-collection",
        state: {
            todos: [],
            id: 0,
        }
    });
    const [newTodoDesc, setNewTodoDesc] = useState("");

    const handleTodoDescChange = (e) => setNewTodoDesc(e.target.value);

    const createTodo = (e) => {
        e.preventDefault();
        console.log("Curr state is: ", state);
        setState({
            todos: state.todos.concat({desc: newTodoDesc, id: state.id}),
            id: state.id + 1,
        });
        setNewTodoDesc("");
    };

    const deleteTodo = (id) => {
        setState({
            ...state,
            todos: state.todos.filter(todo => todo.id !== id),
        });
    };

    return (
        <div>
            <form className="input-group mb-3" onSubmit={createTodo}>
                <input
                type="text"
                className="form-control"
                name="description"
                onChange={handleTodoDescChange}
                placeholder="To-Do description"
                value={newTodoDesc}
                aria-describedby="button-addon2"/>
                <div className="input-group-append">
                <button className="btn btn-primary" type="submit" id="button-addon2">
                    Create
                </button>
                </div>
            </form>
            {state.todos.map(todo => {
                return (
                    <Todo
                        key={todo.id}
                        desc={todo.desc}
                        todoId={todo.id}
                        deleteTodo={deleteTodo}
                    />
                );
            })}
        </div>
    );
}