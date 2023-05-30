import { ADD_TODO, DELETE_TODO,UPDATE_TODO} from "./TodoType";

const addTodo = (data) => {

    return {
        type: ADD_TODO,
        payload: {
            id: new Date().getTime().toString(),
            data: data
        }
    }
}

const deleteTodo = (id) => {
    return {
        type: DELETE_TODO,
        payload: id
    }
}


const updateTodo = (data) => {
    return {
        type: UPDATE_TODO,
        payload: data
    }
}


export { addTodo, deleteTodo, updateTodo }