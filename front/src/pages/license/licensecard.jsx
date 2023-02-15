import Card from 'react-bootstrap/Card';
import 'bootstrap/dist/css/bootstrap.min.css';   
import React, { useState,useEffect } from "react";
import { NotificationContainer, NotificationManager } from 'react-notifications';
import 'react-notifications/lib/notifications.css'; 



function Licensecard({ value }) {
    const array = value.read()
    return (
        <>
            {
                array.map((v) => {
                    return (
                        <>
                            <h4 className="title">{v[0].major}</h4>
                            <List value={v} />
                        </>
                    )
                })
            }
        </>
    );
}

function List({ value }) {
    console.log({value})

	const [showReply, setShowReply] = useState(value.value.map(() => false));

	const handleReplyClick = (index) => () =>
		setShowReply((prevState) => {
			const newState = [...prevState];
			newState[index] = !newState[index];
			return newState;
            
		});	

    const handleButtonClick = (name) => {
        NotificationManager.info('알림신청완료!',name, 3000);
    }
    return (
        <>
            {
                value.map((val,idx) =>
                <div key={idx}>

                    <Card className="cardo" style={{marginBottom:"10px", marginTop:"10px"}}>
                        <Card.Body>
                            <Card.Title>
                                <div className="name">
                                    {val.name}
                                </div>
                                <button onClick={handleReplyClick(idx)}>알림신청</button>
                                <button className="licensebutton" onClick={handleButtonClick(val.name)}>알림신청</button>
                                {showReply[idx] && (
                                    <form><NotificationContainer />
								</form>
                                )} 
                            </Card.Title>
                        </Card.Body>
                    </Card>
                </div>
                )
            }
        </>
    )
}

export default Licensecard;