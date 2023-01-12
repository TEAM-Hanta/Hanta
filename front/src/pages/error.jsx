import ErrorHandler from "../components/error_handler";

function Error() {
    const {error} = ErrorHandler();
    return (
        <>
            <div style={{fontSize:"50px", textAlign:"center"}}>잘못된 접근입니다.</div>
        </>
    )
}

export default Error;