import './index.scss';

export default function theCalendar (props) {
    
    return(
        <div className="calendar">
            {props.children}
        </div>
    );
}