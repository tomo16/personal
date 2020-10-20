import React, { useState } from 'react';
import DateFnsUtils from '@date-io/date-fns'; // choose your lib
import jaLocale from "date-fns/locale/ja";
import {
    DatePicker,
    MuiPickersUtilsProvider,
} from '@material-ui/pickers';
import format from "date-fns/format";

class ExtendedUtils extends DateFnsUtils {
    getCalendarHeaderText(date) {
        return format(date, "yyyy MMM", { locale: this.locale });
    }
    getDatePickerHeaderText(date) {
        return format(date, "MMMd日", { locale: this.locale });
    }
}
export default function Calender() {
    const [selectedDate, handleDateChange] = useState(new Date());
    const handleChange = (data) =>{
        handleDateChange(data);//表示変更
    };
    return (
        <MuiPickersUtilsProvider utils={ExtendedUtils} locale={jaLocale}>
            <DatePicker name="deadline" value={selectedDate} format="yyyy/MM/dd(E)" onChange={handleChange} okLabel="決定" cancelLabel="キャンセル" />
        </MuiPickersUtilsProvider>
    );
}
