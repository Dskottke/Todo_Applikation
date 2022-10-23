import React from 'react';
import {ToDo} from "../Models/ToDo";
import Board from "./Board";
import '../Css/BoardOverview.css';

type boardOverViewProps = {
    todos: ToDo[],
    updateToDo: (todo: ToDo) => void,
    deleteToDo: (id: string) => void
}


function BoardOverview(props: boardOverViewProps) {
    const openTodos: ToDo[] = props.todos.filter(stat => stat.status === "OPEN")
    const inProgressToDo: ToDo[] = props.todos.filter((stat => stat.status === "IN_PROGRESS"))
    const doneToDo: ToDo[] = props.todos.filter((stat => stat.status === "DONE"))


    return (
        <div className="board_overview">
            <Board title={"Open"} todos={openTodos} updateToDo={props.updateToDo} deleteToDo={props.deleteToDo}/>
            <Board title={"In Progress"} todos={inProgressToDo} updateToDo={props.updateToDo}
                   deleteToDo={props.deleteToDo}/>
            <Board title={"Done"} todos={doneToDo} updateToDo={props.updateToDo} deleteToDo={props.deleteToDo}/>
        </div>
    );
}

export default BoardOverview;