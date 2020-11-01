import React, { useState, } from 'react';
import { withStyles } from '@material-ui/core/styles';
import Paper from '@material-ui/core/Paper';
import Grid from '@material-ui/core/Grid';
import Recipe from './recipe';
import Stock from './Stock';
const useStyles = {
    root: {
        flexGrow: 1,
    },
    paper: {

        textAlign: 'center',

    },
};

class Cook extends React.Component {
    constructor() {
        super();
        this.state = {
            comicList: JSON.parse(localStorage.getItem('saveComicList')),
            stockList: ["にんじん", "じゃがいも", "たまねぎ", "ピーマン（緑系）", "ネギ", "キノコ類", "コーン", "なす", "油揚げ", "キャベツ", "大根（根野菜）"],
            stockList2: ["豚こま", "豚バラ", "鯖缶", "秋刀魚缶", "ツナ缶", "トマト缶", "焼き鳥缶", "鰯缶", "海藻類", "ハム"],
            stockList3: ["ごはん", "パスタ", "うどん", "そば", "そうめん"]
        }
    };
    //在庫リストでチェックついてるやつを保存
    searchState() {

    };

    render() {
        return (
            <div>
                <Grid container spacing={1}>
                    <Grid item xs={12}>
                        <h2>Cook</h2>
                    </Grid>
                    <Grid item xs={2}>
                        <Paper className={this.props.classes.paper}>
                            在庫1<Stock List={this.state.stockList} type={1} />
                        </Paper>
                    </Grid>
                    <Grid item xs={2}>
                        <Paper className={this.props.classes.paper}>
                            在庫2<Stock List={this.state.stockList2} type={2} />
                        </Paper>
                    </Grid>
                    <Grid item xs={2}>
                        <Paper className={this.props.classes.paper}>

                            在庫3<Stock List={this.state.stockList3} type={3} />
                        </Paper>
                    </Grid>
                    <Grid item xs={6}>
                        <Recipe searchState={this.searchState.bind(this)} />
                    </Grid>


                </Grid>
            </div>
        );
    }
}
export default withStyles(useStyles)(Cook);
/* 在庫2<Stock List={this.state.stockList2} type={2}/>
在庫3<Stock List={this.state.stockList3} type={3}/>*/