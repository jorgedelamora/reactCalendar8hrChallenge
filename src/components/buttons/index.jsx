import  './index.scss';

const BaseButton = (props) => {

    const {onClick} = props;

    return (
        <button onClick={onClick}>
            {props.children}
        </button>
    );
}

export default BaseButton;
