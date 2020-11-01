import React, { useState, } from 'react';
import { withStyles } from '@material-ui/core/styles';
import Paper from '@material-ui/core/Paper';
import Grid from '@material-ui/core/Grid';
import Today from './Today';
import Table from './Table';
import Add from './Add';
const useStyles = {
    root: {
        flexGrow: 1,
    },
    paper: {

        textAlign: 'center',

    },
};

class Comic extends React.Component {
    constructor() {
        super();
        this.state = {
            comicList: JSON.parse(localStorage.getItem('saveComicList')),
        }
    };
    AddList(e) {
        e.preventDefault();
        const title = e.target.title.value;
        const comicList = this.state.comicList.slice();
        const turns = e.target.turns.value;
        const ReleaseDay = e.target.deadline.value;

        comicList.push({
            title: title,
            turns: turns,
            ReleaseDay: ReleaseDay,
        });

        this.setState({ comicList });

        //storageに保存
        let local = JSON.stringify(comicList);
        localStorage.setItem("saveComicList", local);
        e.target.title.value = '';
        e.target.turns.value = '';
    };
    //deleteしたとき
    deleteComicState(clickTodo) {
        const comicList = this.state.comicList.slice();

        comicList.splice(clickTodo.index, 1);
        let local = JSON.stringify(comicList);
        localStorage.setItem('saveComicList', local);//削除後のやつをストレージへ保存
        this.setState({ comicList });
    }
    render() {
        return (
            <div>
                <Grid container spacing={1}>
                    <Grid item xs={12}>
                        <h3>Comic</h3>
                    </Grid>
                    <Grid item xs={12}>
                        <Paper className={this.props.classes.paper}>今日の日付<Today day={new Date()} /></Paper>
                    </Grid>
                    <Grid item xs={3}>
                        <Add onSubmit={this.AddList.bind(this)} />
                    </Grid>
                    <Grid item xs={6}>
                        <Paper className={this.props.classes.paper} style={{ maxHeight: 450, overflow: 'auto' }}><Table table={this.state.comicList} 
                        deleteComicState={this.deleteComicState.bind(this)}/></Paper>
                    </Grid>


                </Grid>
            </div>
        );
    }
}
export default withStyles(useStyles)(Comic);

/*
export default function About() {
    const classes = useStyles();
    const day = new Date();
    const [comicList, setComic] = useState([]);

    function AddList(e){
        e.preventDefault();
        const title = e.target.title.value;
        const comicList = this.state.comicList.slice();
        const turns = e.target.turns.value;
        const ReleaseDay = e.target.deadline.value;

        comicList.push({
            title: title,
            turns: turns,
            ReleaseDay: ReleaseDay,
        });
    };

    return (
        <div className={classes.root}>
            <Grid container spacing={1}>
                <Grid item xs={12}>
                    <h3>Comic</h3>
                </Grid>
                <Grid item xs={12}>
                    <Paper className={classes.paper}>今日の日付<Today day={day} /></Paper>
                </Grid>
                <Grid item xs={3}>
                    <Add onSubmit={this.AddList.bind(this)} />
                </Grid>
                <Grid item xs={6}>
                    <Paper className={classes.paper} style={{ maxHeight: 300, overflow: 'auto' }}><Table /></Paper>
                </Grid>


            </Grid>
        </div>
    );
}*/