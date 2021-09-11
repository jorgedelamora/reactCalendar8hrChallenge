import './index.scss';
import BaseButton from '../buttons';

const NavBar = (props) => {

    const {date, switchMonth} = props;
    const dateFormated = `${date.getMonth() + 1}-${date.getFullYear()}`;

    return (
        <div className="navbar">
            <div className="showDate">
                <h4>{dateFormated}</h4>
            </div>
            <div className="buttons">
                <BaseButton onClick={() => {switchMonth(-1)}}>Prev</BaseButton>
                <BaseButton onClick={() => {switchMonth(+1)}}>Next</BaseButton>
            </div>
        </div>
    )
}

export default NavBar
