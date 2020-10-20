import React, { Component } from 'react';
import './todos.css'
import CancelIcon from '@material-ui/icons/Cancel';
import Icon from '../../pictures/laugh.png';
import Icon2 from '../../pictures/angry.png';
import DoneIcon from '@material-ui/icons/Done';
import ReplayIcon from '@material-ui/icons/Replay';

import Calender from './TodosCalender';
class Todos extends Component {
    constructor() {
        super();
        this.state = {
            dayLine: "0"
        }
    }
    render() {
        const className = this.props.done ? 'done' : 'undone';
        const status = this.props.done ? <ReplayIcon /> : <DoneIcon />;
        const statusCode = this.props.done ? "Finish" : "Done";
        const windowWidth = document.documentElement.clientWidth;
        //console.log(this.props.deadline);//formの値が正しく送られている

        return (

            <div className={className}>

                <div className={this.props.done === false ? "Todo" : "FinishTodo"}>

                    <div class="status">
                        <a href="" onClick={(e) => { e.preventDefault(); this.props.setTodoStatus(this.props) }}>{status}</a>
                        <div class="cancel">
                            <a href="" onClick={(e) => { e.preventDefault(); this.props.deleteTodoState(this.props) }}><CancelIcon /></a>
                        </div>
                    </div>

                    <table>
                        <tr>
                            <th>Deadline:</th>
                            <td><span><Calender day={this.props.deadline} index={this.props.index}
                                        changeStorage={this.props.changeStorage} title={this.props.title} content={this.props.content}
                                        done={this.props.done}/></span></td>
                        </tr>

                        <tr>
                            <th>Title：</th>
                            <td>{this.props.title}</td>
                        </tr>

                        <tr>
                            <th>Detail：</th>
                            <td>
                                {this.props.content}
                            </td>
                        </tr>
                    </table>
                    <div class="figure">
                        <img src={(statusCode === "Finish") ? Icon : Icon2} width="60" height="60" />
                    </div>

                </div>

            </div>
        );
    }

};
export default Todos;
