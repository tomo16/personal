import React, { Component,useEffect } from 'react';
import Todo from './Todos';

import './List.css'
import { makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles((theme) => ({
    root: {
        flexGrow: 1,
    },
    paper: {
        padding: theme.spacing(2),
        textAlign: 'center',
        color: theme.palette.text.secondary,
    },
}));

export default function List(props) {
    const todolist = [];

    //表示数の制限（todolistにはちゃんと格納されている）
    for (var i = 0; i < props.todolist.length; i++) {
        todolist.push(
            <Todo index={i} deadline={props.todolist[i].deadline} title={props.todolist[i].title}
                content={props.todolist[i].content} done={props.todolist[i].done}
                changeStorage={props.changeStorage} setTodoStatus={props.setTodoStatus} deleteTodoState={props.deleteTodoState} />
        );
    }
    console.log(todolist);
    return (
        <div class="list-area">
            <div class="subBar">
                TasksBoard
            </div>

            <div class="board">
                {todolist}
            </div>
        </div>

    );

}


/*
<div class="list-area">
<div class="subBar">
                    TasksBoard

                </div>

<div class="board">
                    {todolist}
                </div>
                </div>*/