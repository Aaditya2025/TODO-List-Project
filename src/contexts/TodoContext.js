import { createContext, useContext } from "react";

export const TodoContext = createContext({
    todos : [
        {
            id: 1, 
            todo: "Todo msg",
            comleted: false, 
        }
    ], 
    addTodo:(todo) => {}, 
    updateTodo: (id, todo) => {}, 
    deleteTodo: (id) => {}, 
    toggleComplete: (id) => {}
}) 

export const useToDo = () => {
    return useContext(TodoContext)
}

export const ToDoProvider = TodoContext.Provider