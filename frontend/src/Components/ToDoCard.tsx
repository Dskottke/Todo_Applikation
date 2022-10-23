import React from 'react';
import {ToDo} from "../Models/ToDo";
import "../Css/ToDoCard.css"

type cardProps = {
    todo: ToDo,
    updateToDo: (todo: ToDo) => void,
    deleteToDo: (id: string) => void
}

function ToDoCard(props: cardProps) {
    return (
        <article>
            <div className={"todocard_id"}>ID: {props.todo.id}</div>
            <div className={"todo_description"}>{props.todo.description}</div>
            <section className={"card_buttons"}>
                {props.todo.status !== "DONE" && <button onClick={() => props.updateToDo(props.todo)}>advance</button>}
                <button onClick={() => props.deleteToDo(props.todo.id)}>delete</button>
            </section>
        </article>
    );
}

export default ToDoCard;