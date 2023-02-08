import Card from 'react-bootstrap/Card';
import 'bootstrap/dist/css/bootstrap.min.css';


function Licensecard() {
    return (
        <>
        <h4 className="tittle">컴퓨터공학</h4>
            <Card className="cardo">
                <Card.Body>
                    <Card.Title>
                        <div className="name">
                        네트워크 관리사 2급
                        </div>
                        <button className="licensebutton">알림신청</button>

                    </Card.Title>
                </Card.Body>
            </Card>
            <br/>
            <Card className="cardo">
                <Card.Body>
                    <Card.Title>
                        <div className="name">
                        컴퓨터활용능력 1급
                        </div>
                        <button className="licensebutton">알림신청</button>

                    </Card.Title>
                </Card.Body>
            </Card>
            <br/>
            <Card className="cardo">
                <Card.Body>
                    <Card.Title>
                        <div className="name">
                        정보처리기사
                        </div>
                        <button className="licensebutton">알림신청</button>

                    </Card.Title>
                </Card.Body>
            </Card>
        </>
    );  
}

export default Licensecard;