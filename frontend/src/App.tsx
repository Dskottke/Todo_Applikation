import React, {useEffect, useState} from 'react';
import './Css/App.css';
import Header from "./Components/Header";
import axios from "axios";
import {ToDo} from "./Models/ToDo";
import {getNextStatus} from "./Service/getNextStatus";
import BoardOverview from "./Components/BoardOverview";
import AddToDo from "./Components/AddToDo";


function App() {

    const [todoList, setTodoList] = useState<ToDo[]>([])

    useEffect(() => {
        getAllTodo()
    }, [])


    const getAllTodo = () => {
        axios.get("/api/todo")
            .then((response) => response.data)
            .then(setTodoList)
    }

    const addToDo = (description: string) => {
        const newtoDO = {
            description: description,
            status: "OPEN"
        }

        axios.post("/api/todo", newtoDO)
            .catch(error => console.log("post error " + error))
            .then(getAllTodo)
    }
    const updateToDo = (todo: ToDo) => {
        const toDoToUpdate = {
            id: todo.id,
            description: todo.description,
            status: getNextStatus(todo.status)

        }
        axios.put(`/api/todo/${todo.id}`,toDoToUpdate)
            .then(getAllTodo)
    }
    const deleteToDo = (id:string) => {
        axios.delete(`/api/todo/${id}`)
            .then(getAllTodo)
    }

    return (
        <div>

            <Header/>
            <AddToDo addToDo={addToDo}/>
            <BoardOverview todos={todoList} updateToDo={updateToDo} deleteToDo={deleteToDo}></BoardOverview>

        </div>

    );

}

export default App;
