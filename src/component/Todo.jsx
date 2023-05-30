import React, {useState} from 'react'
import { useDispatch } from 'react-redux'
import { addTodo } from '../redux/Todo/TodoAction'

function Todo() {
    const dispatch = useDispatch();
    const [todo, setTodo] = useState("");
    const handleTodo = () => {
        if(todo === "") {
            alert("Please Enter a Todo")
            return
        }
        dispatch(addTodo(todo))
        setTodo("")
    }
  return (
    <div className='TodoBox'>
        <input type="text" required className='addTodo' onChange={(e) => setTodo(e.target.value)} value={todo}/>
        <button className='addTodoBtn' onClick={handleTodo}>Add Todo</button>
    </div>
  )
}

export default Todo