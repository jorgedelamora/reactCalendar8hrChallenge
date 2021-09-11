import './index.scss';

export default function BaseDay (props) {
    return(
        <div className="square">
            <p>{props.children}</p>
        </div>
    );
};


