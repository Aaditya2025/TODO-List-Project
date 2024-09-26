// import { createContext, useContext } from "react";

// export const TodoContext = createContext({
//     Todos : [
//         {
//             id: 1, 
//             todo: "Todo msg",
//             comleted: false, 
//         }
//     ], 
//     addTodo:(todo) => {}, 
//     updateTodo: (id, todo) => {}, 
//     deleteTodo: (id) => {}, 
//     toggleComplete: (id) => {}
// }) 

// export const TodoInfo = () => {
//     return useContext(TodoContext)
// }

// export const ToDoProvider = TodoContext.Provider

import { useContext,createContext } from "react";


 export const container = createContext({
    
        Todos:[
            {
                id:1,
                todo:"todo msg",
                completed:false
            }
        ],
        addTodo:(todo)=>{},
        updateTodo:(id,todo)=>{},
        deleteTodo:(id)=>{},
        toggleComplete:(id)=>{},
        

});

export const TodoInfo = ()=>{
    return useContext(container);
}

export const ToDoProvider = container.Provider;