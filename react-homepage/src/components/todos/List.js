import React from 'react';
import Todos from './Todos';
import './List.css'


export default function List(props) {
    const todoList = [];

    //Todosコンポーネント格納
    for (var i = 0; i < props.todoList.length; i++) {
        todoList.push(
            <Todos index={i} deadline={props.todoList[i].deadline} title={props.todoList[i].title}
                content={props.todoList[i].content} done={props.todoList[i].done}
                changeStorage={props.changeStorage} setTodoStatus={props.setTodoStatus} deleteTodoState={props.deleteTodoState} />
        );
    }
    
    return (
        <div class="list-area">
            <div class="subBar">
                TasksBoard
            </div>

            <div class="board">
                {todoList}
            </div>
        </div>

    );

}