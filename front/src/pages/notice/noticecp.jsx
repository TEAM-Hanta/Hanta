import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React from "react";
import Paper from '@mui/material/Paper';
import Typography from '@mui/material/Typography';
import { makeStyles } from 'tss-react/mui';
import "../css/home.css"

const Noticecpi = makeStyles()((theme) => ({
    paper: {
      padding: theme.spacing(1),
    },
  }));

const Noticecp = (props) => {
    const {classes} = Noticecpi();
    return (
        <>
        <br/>
        <Paper style={{margin:"0 auto",display:"block", width:"300px", height:"80px"}} elevation={4} className={classes.paper}>
        <Typography variant="body1">
        <div className="ct">
            <FontAwesomeIcon style={{float:"right", paddingRight:"10px"}} icon="x"/>
                <ul>
                    <li className="bd" style={{fontSize:"15", fontWeight:"bold", paddingTop:"10px"}}>{props.value.title}</li>
                    
                    <div style={{fontSize:"12px", color:"gray"}}>{props.value.date}</div>
                </ul>
            </div>
        </Typography>
        </Paper>
        </>
    );
}
export default Noticecp;
