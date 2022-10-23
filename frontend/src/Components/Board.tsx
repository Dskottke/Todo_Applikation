import React from 'react';
import {ToDo} from "../Models/ToDo";
import ToDoCard from "./ToDoCard";
import '../Css/Board.css';

type boardProps = {
    title:string
    todos: ToDo[]
    updateToDo: (todo: ToDo) => void,
    deleteToDo: (id: string) => void
}

function Board(props: boardProps) {


    return (
        <div className={"board"}>
            <h1>{props.title}</h1>
            {props.todos.map(todo => <ToDoCard todo={todo} updateToDo={props.updateToDo} deleteToDo={props.deleteToDo} key={todo.id}/>)}
        </div>
    );
}

export default Board;