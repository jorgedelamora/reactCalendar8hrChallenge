import './index.scss';
import TheCalendar from '../../components/theCalendar';

export default function CalendarPage (props) {

    return(
    <div className="calendarPage">
        <h1>Calendar</h1>
        <TheCalendar></TheCalendar>
    </div>
    );
}