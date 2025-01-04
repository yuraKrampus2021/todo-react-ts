import './style.css'
import { ITodo } from '../mode'
import { SingleTodo } from './SingleTodo'

interface Props {
    todos: ITodo[]
    setTodos: React.Dispatch<React.SetStateAction<ITodo[]>>
}

export const TodoList = ({ todos, setTodos }: Props) => {
    return (
        <div className="todos">
            {todos.map((todo) => (
                <SingleTodo key={todo.id} todo={todo} todos={todos}
                setTodos={setTodos} />
            ))}
        </div>
    )
}
