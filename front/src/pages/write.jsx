import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import "../css/write.css"

function Write() {

  const onSubmitHandler = (e) => {
      const text = e.target.text.value;
      const done = e.target.done.value;
      fetch('http://localhost:8080/add', {
          method : 'POST',
          headers: {
              'Content-Type': 'application/json',
          },
          body: JSON.stringify({
              text,
              done,
          }),
      });
  };
    return (
        <>
         <form onSubmit={onSubmitHandler}>
        <div style={{paddingLeft:"15%"}}>
        <h1><FontAwesomeIcon icon="arrow-left"/>
        
        <button className="button">올리기</button>
        </h1>
        </div>       
        <div className='Write'>
            <div>
        <input type='text' id='title_txt' placeholder='제목' name="text"/>
            </div>
        
            <div>
        <textarea id='content_txt' placeholder='글을 작성해보세요.' name="done"/>
            </div>
        </div>
         </form>  
        </>
    )
  }

export default Write;