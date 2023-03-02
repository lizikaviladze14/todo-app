import './App.css'
import {AppHeader} from "./components/app-header/app-header";
import {TodoList} from "./components/todo-list/todo-list";
import {useEffect, useState} from "react";
import {TodoTypes} from "./types/todo.types";
// import {useFetch} from "./composables/useFetch";

function App() {
    const [todos, setTodos] = useState<TodoTypes[]>([])
    const [error, setError] = useState(null)
    const [isLoading, setIsLoading] = useState(false)

    // const {
    //     call: getTodos,
    //     response: todos,
    //     error: getTodosError,
    //     loading: getTodosLoading
    // } = useFetch<TodoTypes[]>(() => fetch('http://localhost:3005/todos'))
    //
    // useEffect(() => {
    //     getTodos()
    // }, [])
    //
    // function addTodo (todoTitle: string) {
    //     if(!todoTitle) return;
    //     const {
    //         call: getTodos,
    //         response: todos,
    //         error: addTodoError,
    //         loading: addTodoLoading
    //     } = useFetch(() =>
    //         fetch('http://localhost:3005/todos', {
    //             method: 'POST',
    //             body: JSON.stringify({
    //                 title: todoTitle,
    //                 isCompleted: false
    //             }),
    //             headers: {
    //                 'Content-type': 'application/json; charset=UTF-8',
    //             },
    //         }))
    //     getTodos()
    // }

    useEffect(() => {
        const fetchData = async () => {
            setIsLoading(true);
            try {
                const response = await fetch('http://localhost:3005/todos');
                const todos = await response.json();
                setTodos(todos);
            } catch (err) {
                // @ts-ignore
                setError(err);
            } finally {
                setIsLoading(false);
            }
        };

        fetchData();
    }, []); // Only run the effect on mount
    const addTodo = async (todoTitle: string) => {
        if(!todoTitle) return
        try {
            const response = await fetch('http://localhost:3005/todos', {
                method: 'POST',
                body: JSON.stringify({
                    title: todoTitle,
                    isCompleted: false
                }),
                headers: {
                    'Content-type': 'application/json; charset=UTF-8',
                },
            });
            const newTodo = await response.json();
            setTodos([...todos, newTodo]);
        } catch(err) {
            //
        }
    }

    const toggleTodoCompletedById = (todoId: string, isCompleted: boolean) => {
        fetch(`http://localhost:3005/todos/${todoId}`, {
            method: 'PATCH',
            body: JSON.stringify({
                isCompleted: isCompleted
            }),
            headers: {
                'Content-type': 'application/json; charset=UTF-8',
            },
        })
            .then((response) => response.json())
            .then((json) => {
                setTodos((current) => {
                    const todo = current.find((todo) => todo.id === todoId)
                    if(!todo) return current
                    const index = current.indexOf(todo)
                    todo.isCompleted = json.isCompleted
                    current[index] = todo
                    return [...current]
                })
            });
    }

    const deleteTodoItem = async (todoId: string) => {
        try {
            await fetch(`http://localhost:3005/todos/${todoId}`, {
                method: 'DELETE',
            });
            setTodos(todos.filter(todo => todo.id !== todoId))
        } catch (err) {
            console.log(err)
        }
    }

  return (
    <div className="App">
      <AppHeader onAddTodo={addTodo} />
      <TodoList
          todos={todos}
          onComplete={toggleTodoCompletedById}
          onDelete={deleteTodoItem}
      />
    </div>
  )
}

export default App
