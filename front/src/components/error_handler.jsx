
import React from "react";
import "../css/home.css"
import ErrorBoundary from "./errorboundary";

const ErrorHandler = (error_handler) => {
    try {
        throw new Error("404 Error");
    }
    catch (err) {
        console.error(err);
    }
}

export default ErrorHandler;