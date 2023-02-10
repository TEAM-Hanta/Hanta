import './error.css';

function ErrorMessage(props) {
    return <div className="bar error">{props.error}</div>;
}

export default ErrorMessage;
