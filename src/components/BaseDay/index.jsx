import './index.scss';

export default function BaseDay (props) {
    
    const {className} = props;
    
    return(
        <div className={className}>
            <p>{props.children}</p>
        </div>
    );
};


