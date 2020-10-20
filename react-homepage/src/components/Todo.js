import React from 'react'
import Add from './todos/Add';
import List from './todos/List';
import './todos/todo.css';
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

class Todo extends React.Component {
    constructor() {
        super();
        this.state = {
            todolist: JSON.parse(localStorage.getItem('saveTodoList')),//
            deleteList: [],
        }
    }

    handleSubmit(e) {
        e.preventDefault();
        const title = e.target.title.value;
        const todolist = this.state.todolist.slice();
        const content = e.target.content.value;
        const deadline = e.target.deadline.value;

        todolist.push({
            deadline: deadline,
            title: title,
            content: content,
            done: false,
        });
        this.setState({ todolist });
        //複数の値をstorageに保存,この時点でソートはしてない
        let local = JSON.stringify(todolist);
        localStorage.setItem("saveTodoList", local);//storageにcreateボタン押すたびに保存していく
        let jsonObj = localStorage.getItem("saveTodoList");
        e.target.title.value = '';
        e.target.content.value = '';
    }

    setTodoStatus(clickTodo) {//完了にする押下時
        const todolist = this.state.todolist.slice();
        const todo = todolist[clickTodo.index];
        todo.done = !todo.done;
        todolist[clickTodo] = todo;
        let local = JSON.stringify(todolist);
        localStorage.setItem('saveTodoList', local);
        this.setState({ todolist });//すべてのメモを返す
    }
    //deleteしたとき
    deleteTodoState(clickTodo) {
        const todolist = this.state.todolist.slice();
        const deleteList = this.state.deleteList.slice();
        const delDeadline = todolist[clickTodo.index].deadline;
        const delTitle = todolist[clickTodo.index].title;

        deleteList.push({
            deleteIndex: clickTodo.index,
            deleteDeadline: delDeadline,
            deleteTitle: delTitle,
        })

        this.setState({ deleteList });
        //console.log(deleteList);//削除するリスト

        todolist.splice(clickTodo.index, 1);
        let local = JSON.stringify(todolist);
        localStorage.setItem('saveTodoList', local);//削除後のやつをストレージへ保存
        this.setState({ todolist });
    }

    //storageの値が変更されたとき
    changeStorage() {
        const todolist = JSON.parse(localStorage.getItem('saveTodoList'));
        this.setState({ todolist });
        console.log(todolist);
    }

    render() {
        //todolistを日付でソート,deadlineに「2020/10/08」みたいな感じで入っている
        this.state.todolist.sort(function (a, b) {
            return (a.deadline >= b.deadline ? 1 : -1);
        });

        return (

            <div className="app" class="app-area">
                <div class="subtitle">
                    <h1 class="title">TodoList</h1>
                </div>

                <div class="comp">
                    <div className="compLeft">
                        <Add onSubmit={this.handleSubmit.bind(this)} todolist={this.state.todolist} deleteList={this.state.deleteList} />
                    </div>
                    <div className="compRight">
                        <List todolist={this.state.todolist} changeStorage={this.changeStorage.bind(this)} setTodoStatus={this.setTodoStatus.bind(this)} deleteTodoState={this.deleteTodoState.bind(this)} />
                    </div>
                </div>

            </div>

        );
    }
}


export default Todo;