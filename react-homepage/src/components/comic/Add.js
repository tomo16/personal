import React, { Component } from 'react';
import '../todos/Add.css'
import Calender from '../todos/calender';

class Add extends Component {
    render() {
        return (
            <form name="comicForm" onSubmit={this.props.onSubmit}>
                <div class="comic">
                    <div class="input-area">
                        <div class="button-area">
                            <button type="submit" class="form-button">Add</button>
                            <button type="reset" class="form-button">Clear</button>
                        </div>

                        <label>Title</label>
                        <input name="title" type="text" class="title-text" size="22"/>
                        
                        <label>Number of turns</label>
                        <input name="turns" class="turns-text"  size="3"></input>

                        <label>Release date</label>
                        <Calender/>
                    </div>
                </div>
            </form>
        );
    }
};

export default Add;