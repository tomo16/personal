import React from 'react';
import './todos.css'
import CancelIcon from '@material-ui/icons/Cancel';
import Icon from '../../pictures/laugh.png';
import Icon2 from '../../pictures/angry.png';
import DoneIcon from '@material-ui/icons/Done';
import ReplayIcon from '@material-ui/icons/Replay';
import Calender from './TodosCalender';

export default function Todos(props) {
    const className = props.done ? 'done' : 'undone';
    const status = props.done ? <ReplayIcon /> : <DoneIcon />;
    const statusCode = props.done ? "Finish" : "Done";

    return (
        <div className={className}>
            <div className={props.done === false ? "Todo" : "FinishTodo"}>
                <div class="status">
                    <a href="" onClick={(e) => { e.preventDefault(); props.setTodoStatus(props) }}>{status}</a>
                    <div class="cancel">
                        <a href="" onClick={(e) => { e.preventDefault(); props.deleteTodoState(props) }}><CancelIcon /></a>
                    </div>
                </div>

                <table>
                    <tr>
                        <th>Deadline:</th>
                        <td><span><Calender day={props.deadline} index={props.index}
                            changeStorage={props.changeStorage} title={props.title} content={props.content}
                            done={props.done} /></span></td>
                    </tr>
                    <tr>
                        <th>Title：</th>
                        <td>{props.title}</td>
                    </tr>
                    <tr>
                        <th>Detail：</th>
                        <td>
                            {props.content}
                        </td>
                    </tr>
                </table>

                <div class="figure">
                    <img src={(statusCode === "Finish") ? Icon : Icon2} width="60" height="60" />
                </div>
            </div>
        </div>
    );
};