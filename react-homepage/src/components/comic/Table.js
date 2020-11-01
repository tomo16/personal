import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Table from '@material-ui/core/Table';
import TableBody from '@material-ui/core/TableBody';
import TableCell from '@material-ui/core/TableCell';
import TableContainer from '@material-ui/core/TableContainer';
import TableHead from '@material-ui/core/TableHead';
import TableRow from '@material-ui/core/TableRow';
import Paper from '@material-ui/core/Paper';
import Typography from '@material-ui/core/Typography'
import CancelIcon from '@material-ui/icons/Cancel';
import Today from './Today';
const useStyles = makeStyles({
    table: {
        maxWidth: 650,
    },
});

function createData(name, turns, day) {
    return { name, turns, day };
}

const rows = [
    createData('アオアシ', 22, "2020/10/30"),
    createData('進撃の巨人', 33, "2021/02/09"),
    createData('宇宙兄弟', 39, "2021/02/17"),
    createData('鬼滅の刃', 23, "2020/12"),
    createData('BUNGO', 25, "2020/12/18")
];
function calculateDate(){
    const day = new Date();
    const month = day.getMonth() + 1;
    const days = day.getDate();

    let str = rows[0].day.split('/');
    if(month == str[1]){
        return str[2] - days; 
    }
}
export default function BasicTable(props) {
    const classes = useStyles();
    const ComicList = props.table;
    //rowsを日付順にソート
    ComicList.sort(function (a, b) {
        return (a.ReleaseDay >= b.ReleaseDay ? 1 : -1);
    });
    const buyDay = calculateDate();
    return (
        <div>
            <Typography>次の購入日まであと　{buyDay}日</Typography>

            <TableContainer component={Paper}>
                <Table className={classes.table} aria-label="simple table">
                    <TableHead>
                        <TableRow>
                            <TableCell>タイトル</TableCell>
                            <TableCell align="right">巻数</TableCell>
                            <TableCell align="right">発売予定日</TableCell>
                            <TableCell align="right">削除</TableCell>
                        </TableRow>
                    </TableHead>
                    <TableBody>
                        {ComicList.map((row) => (
                            <TableRow key={row.title}>
                                <TableCell component="th" scope="row">
                                    {row.title}
                                </TableCell>
                                <TableCell align="right">{row.turns}</TableCell>
                                <TableCell align="right">{row.ReleaseDay}</TableCell>
                                <TableCell align="right"><a href="" onClick={(e) => { e.preventDefault(); props.deleteComicState(props) }}><CancelIcon /></a></TableCell>
                            </TableRow>
                        ))}
                    </TableBody>
                </Table>
            </TableContainer>
        </div>
    );
}