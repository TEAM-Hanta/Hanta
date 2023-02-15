import Dropdown from 'react-bootstrap/Dropdown';
import 'bootstrap/dist/css/bootstrap.min.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import ButtonFetch from './buttonFetch';

function Report(props) {
    return (
        <button style={{border:"none", backgroundColor:"white", float:"right"}}>
        <Dropdown>
            <Dropdown.Toggle variant="">
                <FontAwesomeIcon style={{ fontSize: '35px' }} icon="ellipsis-vertical" />
            </Dropdown.Toggle>

            <Dropdown.Menu style={{ backgroundColor: 'lightgray', fontWeight: 'bold' }}>
                <Dropdown.Item
                    onClick={() => {
                        ButtonFetch('', props.value.id, 'delete');
                    }}
                    style={{ fontWeight: 'bold' }}
                >
                    삭제
                </Dropdown.Item>
                <Dropdown.Item
                    onClick={() => {
                        ButtonFetch('report', props.value.id);
                    }}
                    style={{ fontWeight: 'bold' }}
                >
                    신고
                </Dropdown.Item>
                <Dropdown.Item href="/note" style={{ fontWeight: 'bold' }}>
                    쪽지보내기
                </Dropdown.Item>
            </Dropdown.Menu>
        </Dropdown>
        </button>
    );
}

export default Report;
