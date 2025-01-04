import { useRef } from 'preact/hooks'
import './style.css'

interface Props {
    todo: string
    setTodo: React.Dispatch<React.SetStateAction<string>>
    handleAdd: (e: React.FormEvent) => void
}

export const InputFeild = ({ todo, setTodo, handleAdd }: Props) => {
    const inputRef = useRef<HTMLInputElement>(null)

    return (
        <form
            className="input"
            onSubmit={(e) => {
                handleAdd(e)
                inputRef.current?.blur()
            }}
        >
            <input
                ref={inputRef}
                value={todo}
                onChange={(e) => {
                    setTodo(e.target.value)
                }}
                className="input__box"
                type="input"
                placeholder="Enter a task"
            />
            <button className="input__submit" type="submit">
                Go
            </button>
        </form>
    )
}
