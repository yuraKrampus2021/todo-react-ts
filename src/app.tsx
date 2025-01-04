import React, { useState } from 'preact/compat'
import './app.css'
import { InputFeild } from './components/InputFeild'
import { ITodo } from './mode'
import { TodoList } from './components/TodoList'

export const App: React.FC = () => {
    const [todo, setTodo] = useState<string>('')
    const [todos, setTodos] = useState<ITodo[]>([])

    const handleAdd = (e: React.FormEvent) => {
        e.preventDefault()

        if (todo) setTodos([...todos, { id: Date.now(), todo, isDone: false }])
        setTodo('')
    }

    return (
        <div className="App">
            <span className="heading">hello</span>
            <InputFeild todo={todo} setTodo={setTodo} handleAdd={handleAdd} />
            <TodoList todos={todos} setTodos={setTodos} />
        </div>
    )
}
