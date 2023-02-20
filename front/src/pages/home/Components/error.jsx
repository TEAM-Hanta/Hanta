import './error.css';

function ErrorMessage(props) {
    return <div className="bar error" style={{margin:"0 auto", display:"block", width:"360px", fontSize:"15px"}}>{props.error}</div>;
}

export default ErrorMessage;
