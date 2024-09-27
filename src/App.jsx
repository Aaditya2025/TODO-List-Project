import { useEffect, useState } from 'react'
import './App.css'
import { ToDoProvider } from './contexts'
import TodoForm from './components/TodoForm'
import TodoItem from './components/TodoItem'

function App() {
  const [Todos, setTodos] = useState([])

  const addTodo = (todo)  => {
    setTodos((prev) => [{id: Date.now(), ...todo}, ...prev]) 
  } 

  const updateTodo = (id, todo) => {
    setTodos((prev) => prev.map((prevTodo) => (prevTodo.id === id ? todo : prevTodo)))
  }


  const deleteTodo = (id) => {
    setTodos((prev) => prev.filter((prevTodo)  => prevTodo.id !== id))
  }

  const toggleComplete = (id) => {
    setTodos((prev) => prev.map((prevTodo) => prevTodo.id  === id ? {...prevTodo, completed: !prevTodo.completed} : prevTodo ))
  }

  useEffect(() => {
    const todos = JSON.parse(localStorage.getItem("todos")) 

    if(Todos && Todos.length  > 0) {
      setTodos(todos)
    }
  }, [])

  useEffect(() => {
    localStorage.setItem("todos", JSON.stringify(Todos))
  },[Todos, setTodos])

  return (
    <ToDoProvider value={{Todos, addTodo, updateTodo, deleteTodo, toggleComplete}}>
    <div className="bg-slate-300  min-h-screen py-8 px-4">
                <div className="w-full max-w-3xl mx-auto shadow-2xl rounded-xl bg-gray-900 p-6 text-white">
                <h1 className="text-4xl font-extrabold text-center  mb-8 ">TODO DASHBOARD</h1>
                    <div className="mb-6">
                        <TodoForm/>
                    </div>
                    <div className="space-y-4"> 
                        {Todos.map((todo) => (
                          <div key={todo.id} className='w-full'>
                            <TodoItem todo={todo}/>
                          </div>
                        ))}
                    </div>
                </div>
            </div>
    </ToDoProvider>
  )
}

export default App
