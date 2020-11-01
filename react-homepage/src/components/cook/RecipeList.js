import React from 'react';
import PropTypes from 'prop-types';
import { makeStyles } from '@material-ui/core/styles';
import AppBar from '@material-ui/core/AppBar';
import Tabs from '@material-ui/core/Tabs';
import Tab from '@material-ui/core/Tab';
import Typography from '@material-ui/core/Typography';
import Box from '@material-ui/core/Box';
import RecipeCards from './RecipeCards';
import SearchIcon from '@material-ui/icons/Search';
import { WrapText } from '@material-ui/icons';
import './RecipeList.css'

const useStyles = makeStyles((theme) => ({
    root: {
        flexGrow: 1,
        backgroundColor: theme.palette.background.paper,
        flexDirection:"row",
        flexGrow:1,
        flex:1,
        backgroundColor:"red",
        height:"60vh",
    },

    list:{
        flexWrap:"wrap",

    }
}));
function createData(name, amount) {
    return { name, amount };
}
const DonBaseList = [
    createData("Aどん", "豚バラ100ｇ"),
    createData("Bどん", "豚こま100ｇ"),
    createData("Cどん", "鯖缶1個"),
    createData("Dどん", "秋刀魚缶1個"),
    createData("Eどん", "鯖缶1個"),
    createData("Fどん", "鯖缶1個"),
    createData("Gどん", "鯖缶1個"),
];
const PastaBaseList=[
    createData("Aパスタ", "豚バラ100ｇ"),
    createData("Bパスタ", "豚こま100ｇ"),
    createData("Cパスタ", "鯖缶1個"),
    createData("Dパスタ", "秋刀魚缶1個"),
    createData("Eパスタ", "鯖缶1個"),
    createData("Fパスタ", "鯖缶1個"),
    createData("Gパスタ", "鯖缶1個"),
];
const MenBaseList=[
    createData("Aうどん", "豚バラ100ｇ"),
    createData("Bそば", "豚こま100ｇ"),
    createData("Cうどん", "鯖缶1個"),
    createData("Dうどん", "秋刀魚缶1個"),
    createData("Eうどん", "鯖缶1個"),
    createData("Fうどん", "鯖缶1個"),
    createData("Gうどん", "鯖缶1個"),
];

export default function RecipeList(props) {
    const classes = useStyles();

    const List = []; 
    let copyList=DonBaseList.slice();;
    
    switch(props.type){
        case 1:
            copyList = DonBaseList.slice();
            break;
        case 2:
            copyList = PastaBaseList.slice();
            break;
        case 3:
            copyList = MenBaseList.slice();
            break;
    }

    for (var i = 0; i < copyList.length; i++) {
        List.push(<RecipeCards title={copyList[i].name} amount={copyList[i].amount} />);
    }

    return (
        <div class="board">
            {List}
        </div>
    );
}