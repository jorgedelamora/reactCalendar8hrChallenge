import './index.scss';

export default function BaseDay (props) {
    
    const {className, id} = props;
    
    return(
        <div className={className} id={id}>
            <p>{props.children}</p>
        </div>
    );
};


