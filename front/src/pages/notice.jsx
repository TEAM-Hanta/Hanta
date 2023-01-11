import Noticecp from "../components/noticecp";
import React,{ useEffect,useState } from "react";

function Notice() {
  
  const [noti,setNoti] = useState([{id: 1, title: 'asdf', date: 'asdf' },{id: 2, title: 'asdf', date: 'asdf' }]);

  const str = 'notice'

  useEffect(() => {
      fetch(`https://localhost:8080/${str}`) //재사용
      .then((response) => response.json())
      .then((data) => setNoti(data))
      .catch(rejected => {
        console.log(rejected);
      });
  },  []);

  return (
    <>
        <div style={{paddingLeft:"15%"}}>
                <h1>알림</h1>
        </div>
        {noti?.map((props) => (
          <div key={props.id}>
          <Noticecp value = {props}/>
          </div>
        ))};
        
    </>
  );
};

export default Notice;