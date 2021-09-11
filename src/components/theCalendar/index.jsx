import './index.scss';
import BaseDay from '../../components/BaseDay';
import Navbar from '../../components/TheNavbar';
import { useState, useEffect, useRef } from 'react';

export default function TheCalendar(props) {
    const [selectedDate, setSelectedDate] = useState(new Date());
    const [currentMonth, setCurrentMonth] = useState([]);
    const week = ['Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday', 'Sunday'];
    let daysInMonth = getDaysInMonth(selectedDate.getMonth(), selectedDate.getFullYear());
    let monthStart = getMonthStart(selectedDate.getMonth(), selectedDate.getFullYear());

    function getMonthStart(month, year) {
        let day = new Date(year, month, 1).getDay();
        if (day === 0) {
            day = 7;
        }
        day--;
        return day;
    }

    function getDaysInMonth(month, year) {
        return new Date(year, month, 0).getDate();
    }

    function checkToday() {
        let today = new Date();
        const todayInCalendar = today.getDate();
        const todaySelected = document.querySelector(`#day${todayInCalendar}`);
        if(!todaySelected){
            return;
        }
        if(todaySelected){
            todaySelected.style.backgroundColor = "white";
            todaySelected.style.color = "black";
        }
        if ((selectedDate.getFullYear() === today.getFullYear()) &&
        (selectedDate.getMonth() === today.getMonth())) {
            console.log('inside if statement');

            todaySelected.style.backgroundColor = "green";
            todaySelected.style.color = "white";
        }
    }

    function switchMonth(direction){
        let newYear = selectedDate.getFullYear();
        let newMonth = selectedDate.getMonth() + direction;
        if(newMonth > 11){
            newMonth = 0;
            newYear ++;
        }else if(newMonth < 0){
            newMonth = 11;
            newYear --;
        }
        const newDate = new Date(newYear, newMonth);
        setSelectedDate(newDate);
    }


    useEffect(() => {
        const month = [];
        let uniqueKey = 100;
        for (let i = 1; i <= daysInMonth; i++) {
            if (monthStart !== 0) {
                month.push(uniqueKey);
                monthStart--;
                uniqueKey++;
                i = 0;
            } else {
                month.push(i);
            }
        }
        setCurrentMonth(month);
    }, [selectedDate]);


    const isFirstRun = useRef(true);

    useEffect(() => {
        if(isFirstRun.current){
            isFirstRun.current = false;
            return;
        }
        checkToday();
    }, [currentMonth]);

    return (
        <>  
            <Navbar date={selectedDate} switchMonth={switchMonth}></Navbar>
            <div className="calendar">
                {
                    week.map((day) => {
                        return <BaseDay key={day} className="weekdays">{day}</BaseDay>;
                    })
                }
                {
                    currentMonth.map((day) => {
                        return <BaseDay id={"day" + day} className={day >= 100 ? "noValue" : "square"} key={day}>{day}</BaseDay>;
                    })
                }
            </div>
        </>
    );
}