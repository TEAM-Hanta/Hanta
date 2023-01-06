import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React, { Component } from 'react';
import "../css/write.css"

class Write extends Component {
  constructor(props) {
    super(props)
  }

  render() {

    return (
        <>
        <div style={{paddingLeft:"15%"}}>
        <h1><FontAwesomeIcon icon="arrow-left"/>
        <button className="button">올리기</button>
        </h1>
        </div>
        

          
          
        <div className='Write'>
            <div>
        <input type='text' id='title_txt' placeholder='제목'/>
            </div>
        
            <div>
        <textarea id='content_txt' placeholder='글을 작성해보세요.'></textarea>
            </div>
        </div>
          

           
        </>
    )
  }
}

export default Write;


