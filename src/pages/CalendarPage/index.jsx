import './index.scss';
import BaseDay from '../../components/BaseDay';
import TheCalendar from '../../components/theCalendar';

export default function CalendarPage (props) {

    const month = [];
    const daysInMonth = 36;

    for (let i = 1; i <= daysInMonth; i++){
        month.push(i);
    }

    return(
    <div className="calendarPage">
        <h1>Calendar</h1>
        <TheCalendar>
            {
                month.map(( day ) => {
                return <BaseDay key={day}>{day}</BaseDay>;
             })
            }
        </TheCalendar>

    </div>
    );
}