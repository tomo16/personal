import React,{useState} from 'react';
import { makeStyles } from '@material-ui/core/styles';
import { green } from '@material-ui/core/colors';
import FormGroup from '@material-ui/core/FormGroup';
import FormControlLabel from '@material-ui/core/FormControlLabel';
import Checkbox from '@material-ui/core/Checkbox';
import CheckBoxOutlineBlankIcon from '@material-ui/icons/CheckBoxOutlineBlank';
import CheckBoxIcon from '@material-ui/icons/CheckBox';
import Favorite from '@material-ui/icons/Favorite';
import FavoriteBorder from '@material-ui/icons/FavoriteBorder';

const useStyles = makeStyles((theme) => ({
    root: {
        flexGrow: 1,
        backgroundColor: theme.palette.background.paper,
    },
    label:{
        display:"block",
        
        
        
    },
}));

export default function Stock(props) {
    const newList=[];//✔状態保持（最初はfalse）
    for(var i = 0;i<props.List.length;i++){
        newList.push(
            false
        );
    };
    const [states, setState] = React.useState(
        []
    );
    const classes = useStyles();
    const handleChange = (event) => {
        
        setState(event.target.checked );
    };
    const checkList = [];
    for(var i = 0;i<props.List.length;i++){
        checkList.push(
            <FormControlLabel
                control={<Checkbox checked={states[i]} onChange={handleChange} name="checkedA"/>}
                label={props.List[i]} class = {classes.label} 
            />
        );
        /*storageList.push({
            
        })*/
    };
    console.log(states[2]);
    //storageに保存
    //let local = JSON.stringify(list);
    //localStorage.setItem("saveTodoList", local);
    return (
        <div className={classes.root}>
            {checkList}
        </div>
        
    );
}