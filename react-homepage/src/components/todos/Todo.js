import React from 'react'
import Add from './Add';
import List from './List';
import './todo.css';

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
        //storageに保存
        let local = JSON.stringify(todolist);
        localStorage.setItem("saveTodoList", local);
        e.target.title.value = '';
        e.target.content.value = '';
    }

    //✔押下時
    setTodoStatus(clickTodo) {
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
        todolist.splice(clickTodo.index, 1);
        let local = JSON.stringify(todolist);
        localStorage.setItem('saveTodoList', local);//削除後のやつをストレージへ保存
        this.setState({ todolist });
    }

    //storageの値が変更されたとき
    changeStorage() {
        const todolist = JSON.parse(localStorage.getItem('saveTodoList'));//ソート後のデータが正しく入っている
        this.setState({ todolist:todolist});
        console.log(todolist);
    }

    render() {
        //todolistを日付でソート
        this.state.todolist.sort(function (a, b) {
            return (a.deadline >= b.deadline ? 1 : -1);
        });


        return (
            <div class="app-area">
                <div class="subtitle">
                    <h1 class="title">TodoList</h1>
                </div>

                <div class="comp">
                    <div class="compLeft">
                        <Add onSubmit={this.handleSubmit.bind(this)} todolist={this.state.todolist} deleteList={this.state.deleteList} />
                    </div>
                    <div class="compRight">
                        <List todoList={this.state.todolist} changeStorage={this.changeStorage.bind(this)} setTodoStatus={this.setTodoStatus.bind(this)} deleteTodoState={this.deleteTodoState.bind(this)} />
                    </div>
                </div>
            </div>
        );
    }
}
export default Todo;