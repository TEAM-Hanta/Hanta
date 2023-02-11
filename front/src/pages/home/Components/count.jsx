import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import React from 'react';
import '../../css/home.css';
import ButtonFetch from './buttonFetch';

function Count(props) {
    return (
        <div style={{ float: 'right' }}>
            <span>
                <button
                    onClick={() => {
                        ButtonFetch('like', props.value.id);
                    }}
                >
                    <FontAwesomeIcon icon="thumbs-up" />
                </button>
            </span>
            {props.value.likes === null ? 0 : props.value.likes}
            &nbsp;&nbsp;
            <FontAwesomeIcon icon="comment" />
            {props.value.reply === null ? 0 : props.value.reply}
        </div>
    );
}

export default Count;
