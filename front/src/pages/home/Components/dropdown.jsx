import Dropdown from 'react-bootstrap/Dropdown';
import 'bootstrap/dist/css/bootstrap.min.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

function Report() {
    return (
        <Dropdown>
            <Dropdown.Toggle variant="">
                <FontAwesomeIcon style={{ fontSize: '35px' }} icon="ellipsis-vertical" />
            </Dropdown.Toggle>

            <Dropdown.Menu style={{ backgroundColor: 'lightgray', fontWeight: 'bold' }}>
                <Dropdown.Item href="#/action-1" style={{ fontWeight: 'bold' }}>
                    신고
                </Dropdown.Item>
                <Dropdown.Item href="#/action-2" style={{ fontWeight: 'bold' }}>
                    캡쳐
                </Dropdown.Item>
                <Dropdown.Item href="/note" style={{ fontWeight: 'bold' }}>
                    쪽지보내기
                </Dropdown.Item>
            </Dropdown.Menu>
        </Dropdown>
    );
}

export default Report;
