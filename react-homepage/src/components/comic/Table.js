import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Table from '@material-ui/core/Table';
import TableBody from '@material-ui/core/TableBody';
import TableCell from '@material-ui/core/TableCell';
import TableContainer from '@material-ui/core/TableContainer';
import TableHead from '@material-ui/core/TableHead';
import TableRow from '@material-ui/core/TableRow';
import Paper from '@material-ui/core/Paper';

const useStyles = makeStyles({
    table: {
        maxWidth: 550,
    },
});

function createData(name, turns, day) {
    return { name, turns, day };
}

const rows = [
    createData('アオアシ', 22, "2020/10/30"),
    createData('進撃の巨人',33, "2021/02/09"),
    createData('宇宙兄弟', 39, "2021/02/17"),
    createData('鬼滅の刃', 23, "2020/12"),
    createData('BUNGO',25,"2020/12/18")
];

export default function BasicTable() {
    const classes = useStyles();
    //rowsを日付順にソート
    rows.sort(function (a, b) {
        return (a.day >= b.day ? 1 : -1);
    });
    return (
        <TableContainer component={Paper}>
            <Table className={classes.table} aria-label="simple table">
                <TableHead>
                    <TableRow>
                        <TableCell>タイトル</TableCell>
                        <TableCell align="right">巻数</TableCell>
                        <TableCell align="right">発売予定日</TableCell>
                    </TableRow>
                </TableHead>
                <TableBody>
                    {rows.map((row) => (
                        <TableRow key={row.name}>
                            <TableCell component="th" scope="row">
                                {row.name}
                            </TableCell>
                            <TableCell align="right">{row.turns}</TableCell>
                            <TableCell align="right">{row.day}</TableCell>
                        </TableRow>
                    ))}
                </TableBody>
            </Table>
        </TableContainer>
    );
}