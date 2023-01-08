import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React from "react";
import Paper from '@mui/material/Paper';
import Typography from '@mui/material/Typography';
import { makeStyles } from 'tss-react/mui';
import "../css/home.css"

const Noticecp = makeStyles()((theme) => ({
    paper: {
      padding: theme.spacing(1),
    },
  }));

export default () => {
    const {classes} = Noticecp();

    return (
        <>
        <Paper style={{marginLeft:"15%",marginRight:"15%"}} elevation={4} className={classes.paper}>
        <Typography variant="body1">
        <div className="ct">
            <FontAwesomeIcon style={{float:"right", paddingRight:"10px"}} icon="x"/>
                <ul>
                    <li className="bd">[자격증] ooo 접수기간은 2013년 5월 10일 ~ 5월 13일 입니다.</li>
                    <br/>
                    <div style={{fontSize:"12px"}}>2023.05.09 12:00:00</div>
                </ul>
            </div>
        </Typography>
        </Paper>

        <br/>

        <Paper style={{marginLeft:"15%",marginRight:"15%"}} elevation={4} className={classes.paper}>
        <Typography variant="body1">
        <div className="ct">
            <FontAwesomeIcon style={{float:"right", paddingRight:"10px"}} icon="x"/>
                <ul>
                    <li className="bd">[시험] 1학기 중간고사는 2023년 4월 17일 ~ 4월 21 입니다.</li>
                    <br/>
                    <div style={{fontSize:"12px"}}>2023.04.10 12:00:00</div>
                </ul>
            </div>
        </Typography>
        </Paper>

        <br/>

        <Paper style={{marginLeft:"15%",marginRight:"15%"}} elevation={4} className={classes.paper}>
        <Typography variant="body1">
        <div className="ct">
            <FontAwesomeIcon style={{float:"right", paddingRight:"10px"}} icon="x"/>
                <ul>
                    <li className="bd">[댓글] 다산관에서 에어팟...글에 댓글이 달렸습니다.</li>
                    <br/>
                    <div style={{fontSize:"12px"}}>2023.01.09 17:38:10</div>
                </ul>
            </div>
        </Typography>
        </Paper>

        <br/>

        <Paper style={{marginLeft:"15%",marginRight:"15%"}} elevation={4} className={classes.paper}>
        <Typography variant="body1">
        <div className="ct">
            <FontAwesomeIcon style={{float:"right", paddingRight:"10px"}} icon="x"/>
                <ul>
                    <li className="bd">[댓글] 근처 식당 추천좀 해주세...글에 댓글이 달렸습니다.</li>
                    <br/>
                    <div style={{fontSize:"12px"}}>2023.04.19 13:28:10</div>
                </ul>
            </div>
        </Typography>
        </Paper>

        <br/>

        <Paper style={{marginLeft:"15%",marginRight:"15%"}} elevation={4} className={classes.paper}>
        <Typography variant="body1">
        <div className="ct">
            <FontAwesomeIcon style={{float:"right", paddingRight:"10px"}} icon="x"/>
                <ul>
                    <li className="bd">[댓글] 어제 고백했는데 차였어...글에 댓글이 달렸습니다.</li>
                    <br/>
                    <div style={{fontSize:"12px"}}>2023.03.31 15:31:10</div>
                </ul>
            </div>
        </Typography>
        </Paper>
        </>
    );
}
