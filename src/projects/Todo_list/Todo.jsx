import "./Todo.css"
import {useState} from "react";

export const Todo = () => {

    const [todos, setTodos] = useState([]);

    const [inputValue, setInputValue] = useState('')

    const addTodo = () => {
        setTodos([...todos, {id: Date.now(), text: inputValue}]);
        setInputValue('')
    }

    return (
        <>
            <label>Enter your task: </label>
            <input className="input-box"
            value={inputValue}
            onChange={(e) => setInputValue(e.target.value)}
            />
            <button onClick={addTodo}>Add Task</button>
            <ul>
                {todos.map(todo => <li key={todo.id}>{todo.text}</li>)}
            </ul>
        </>
    )
}