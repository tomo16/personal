import React, { Component } from 'react';
import './Add.css'
import Calender from './calender';

import jaLocale from "date-fns/locale/ja";
import format from 'date-fns/format';
import { addDays } from 'date-fns';
class Add extends Component {


    constructor(props) {
        super(props);
        this.updateAnimatedStatus = (target) => {
            this.setState({ isAnimated: target.checked });
        };
        this.updateDroppedDownStatus = (target) => {
            this.setState({ isDroppedDown: target.checked });
        };
        this.updateDropDownCssClass = (target) => {
            this.setState({ dropDownCssClass: target.checked });
        };
    }

    selectMonth(index,event){
        const selectMonth = event.target.value;
    }
    render() {
        //残りのタスクを計算して今週締め切りの数を表示
        let thisCounter = 0;//7日いない締め切りのタスク数
        let nextCounter = 0;//来週締め切りのタスク数
        let thisWeek = format(addDays(new Date(), 7), 'yyyy/MM/dd', { local: jaLocale });//今日から7日後
        let nextWeek = format(addDays(new Date(), 14), 'yyyy/MM/dd', { local: jaLocale });//今日から7日後
        let today=new Date();

        for (let i = 0; i < this.props.todolist.length; i++) {
            if (this.props.todolist[i].deadline <= thisWeek && this.props.todolist[i].done == false) {
                thisCounter++;
            } else if (this.props.todolist[i].deadline <= nextWeek && this.props.todolist[i].done == false) {
                nextCounter++;
            }
        }
        let history = [];
        for (let i = 0; i < this.props.deleteList.length; i++) {
            //historyLine.push(this.props.deleteList[i].deleteDeadline);
            //historyTitle.push(this.props.deleteList[i].deleteTitle);
            history.push(this.props.deleteList[i].deleteDeadline + ":" + this.props.deleteList[i].deleteTitle + "\n");
        }

        //deleteListを日付でソート
        history.sort(function (a, b) {
            let left = a.split(':');
            let right = b.split(':');
            return (left[0] >= right[0] ? 1 : -1);
        });

        return (
            <form name="todoform" onSubmit={this.props.onSubmit}>
                <div class="todo">
                    <h2>Form</h2>
                    <div class="input-area">
                        <div class="button-area">
                            <button type="submit" class="form-button">Create</button>
                            <button type="reset" class="form-button">Clear</button>
                        </div>

                        <label>Deadline</label>
                        <Calender/>

                        <label>Title</label>
                        <input name="title" type="text" class="title-text" size="22"/>
                        
                        <label>Detail</label>
                        <textarea name="content" class="content-text" rows="4" cols="24"></textarea>
                    </div>
                </div>
            </form>
        );
    }
};

export default Add;
