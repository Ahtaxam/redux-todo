import { addTodo, deleteTodo,updateTodo } from "./TodoAction";
import { ADD_TODO,UPDATE_TODO,DELETE_TODO } from "./TodoType";

const initialState = {
    todoList: []
}


const TodoReducer = (state = initialState, action) => {
    switch (action.type) {
        case ADD_TODO:
            return {
                ...state,
                todoList: [...state.todoList, action.payload]
            }
        case DELETE_TODO:
            return {
                ...state,
                todoList: state.todoList.filter((elem) => elem.id !== action.payload)
            }
        default:
            return state
    }
}

export default TodoReducer