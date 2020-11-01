import React from 'react';
import './Add.css'
import Calender from './calender';

export default function Add(props) {
    return (
        <form name="todoform" onSubmit={props.onSubmit}>
            <div class="todo">
                <h2>Form</h2>
                <div class="input-area">
                    <div class="button-area">
                        <button type="submit" class="form-button">Create</button>
                        <button type="reset" class="form-button">Clear</button>
                    </div>

                    <label>Deadline</label>
                    <Calender />

                    <label>Title</label>
                    <input name="title" type="text" class="title-text" size="22" />

                    <label>Detail</label>
                    <textarea name="content" class="content-text" rows="4" cols="24"></textarea>
                </div>
            </div>
        </form>
    );
};