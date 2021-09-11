import './index.scss';
import BaseDay from '../../components/BaseDay';
import { useState, useEffect } from 'react';

export default function TheCalendar(props) {
    const [selectedDate, setSelectedDate] = useState(new Date());
    const [currentMonth, setCurrentMonth] = useState([]);
    const week = ['Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday', 'Sunday'];
    let daysInMonth = getDaysInMonth(selectedDate.getMonth(), selectedDate.getFullYear());
    let monthStart = getMonthStart(selectedDate.getMonth(), selectedDate.getFullYear());

    function getMonthStart(month, year) {
        let day = new Date(year, month, 1).getDay();
        console.log(day);
        if(day === 0){
            console.log('isSunday');
            day = 7;
        }
        day--;
        console.log('day before return', day);
        return day;
    }
    
    function getDaysInMonth (month, year) {
        return new Date(year, month, 0).getDate();
    }



    useEffect(() => {
        const month = [];
        let uniqueKey = 0;
        for (let i = 1; i <= daysInMonth; i++) {
            if (monthStart !== 0) {
                month.push('no value' + uniqueKey);
                monthStart--;
                uniqueKey++;
                i = 0;
            } else {
                month.push(i);
            }
        }
        setCurrentMonth(month);
    }, [selectedDate]);

    return (
        <>
            <div className="calendar">
                {
                    week.map((day) => {
                        return <BaseDay key={day} className="weekdays">{day}</BaseDay>;
                    })
                }
                {
                    currentMonth.map((day) => {
                        return <BaseDay className="square" key={day}>{day}</BaseDay>;
                    })
                }
            </div>
        </>
    );
}