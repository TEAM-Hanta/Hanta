import Card from 'react-bootstrap/Card';
import 'bootstrap/dist/css/bootstrap.min.css';

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
    return (
        <>
            {
                value.map((val) =>
                    <Card className="cardo">
                        <Card.Body>
                            <Card.Title>
                                <div className="name">
                                    {val.name}
                                </div>
                                <button className="licensebutton">알림신청</button>
                            </Card.Title>
                        </Card.Body>
                    </Card>
                )
            }
        </>
    )
}

export default Licensecard;