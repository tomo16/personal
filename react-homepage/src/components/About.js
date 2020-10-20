import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Paper from '@material-ui/core/Paper';
import Grid from '@material-ui/core/Grid';
import Today from './comic/Today';
import Table from './comic/Table';
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


export default function About() {
    const classes = useStyles();
    const day = new Date();

    return (
        <div className={classes.root}>
            <Grid container spacing={3}>
                <Grid item xs={12}>
                    <h3>Comic</h3>
                </Grid>
                <Grid item xs={12} sm={6}>
                    <Paper className={classes.paper}>今日の日付<Today day={day} /></Paper>
                </Grid>
                <Grid item xs={12} sm={6}>
                    <Paper className={classes.paper}>次の購入日</Paper>
                    
                </Grid>
                <Grid item xs={6}>
                </Grid>
                <Grid item xs={6}>
                    <Paper className={classes.paper} style={{ maxHeight: 300, overflow: 'auto' }}><Table /></Paper>
                </Grid>

            </Grid>
        </div>
    );
}