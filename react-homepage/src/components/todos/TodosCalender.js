import React, { useState, useEffect } from 'react';
import { makeStyles } from '@material-ui/core/styles';
import DateFnsUtils from '@date-io/date-fns'; // choose your lib
import jaLocale from "date-fns/locale/ja";
import {
    DatePicker,
    MuiPickersUtilsProvider,
} from '@material-ui/pickers';
import format from "date-fns/format";

class ExtendedUtils extends DateFnsUtils {
    getCalendarHeaderText(date) {
        return format(date, "yyyy MMM", { locale: this.locale });
    }
    getDatePickerHeaderText(date) {
        return format(date, "MMMd日", { locale: this.locale });
    }

}


const useStyles = makeStyles((theme) => ({
    picker: {
        width: '9ch',
        height: '4vh',
        margin: "0 5px",
    },
}));


export default function Calender(props) {
    let [selectedDate, handleDateChange] = useState(0);
    const classes = useStyles();
    const todoList1 = (JSON.parse(localStorage.getItem('saveTodoList'))).slice();//storage()のデータ//追加したやつは最後尾
    var weeks = ["日", "月", "火", "水", "木", "金", "土"];
    //propsが変わるたびに、selectedDateにセットしなおす(Todosを追加していくとき)
    useEffect(() => {
        handleDateChange(props.day);
    }, [props.day]);
     //deadlineでソート
    todoList1.sort(function (a, b) {
        return (a.deadline >= b.deadline ? 1 : -1);
    });
    useEffect(() => {
        handleDateChange(props.day);
    }, [todoList1]);
    console.log(todoList1);
    //deadlineを変更したとき
    const handleChange = (data) => {
        let dataDay = String(data.getFullYear() + "/" + (data.getMonth() + 1) + "/" + ("0" + data.getDate()).slice(-2) + "(" + weeks[data.getDay()] + ")");
        console.log(todoList1);
        //handleDateChange(data);//表示変更

    
        //選択されたデータを日付だけ変更して新しく追加
        todoList1.push({
            deadline: dataDay,
            title: todoList1[props.index].title,
            content: todoList1[props.index].content,
            done: todoList1[props.index].done,
        });
        

        console.log(todoList1, selectedDate, props.index);//変更したやつが、最後尾にはいっている

        todoList1.splice(props.index, 1);//index番目を削除


        let local = JSON.stringify(todoList1);
        localStorage.setItem('saveTodoList', local);//変更後のやつをストレージへ保存

        props.changeStorage();//storage変更されたらboardの再レンダリングする
        handleDateChange(data);//表示変更

    }

    return (
        <MuiPickersUtilsProvider utils={ExtendedUtils} locale={jaLocale} >
            <DatePicker className={classes.picker} name="deadline" value={selectedDate} format="yyyy/MM/dd(E)" onChange={handleChange} okLabel="決定" cancelLabel="キャンセル" />
        </MuiPickersUtilsProvider>
    );
}
