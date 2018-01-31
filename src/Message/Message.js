import React from 'react';

import './Message.css'

const Message = ({ result, error }) => {

    return (
        <div className="message">
                <div className="row">
                    <div className={error ? "alert alert-danger" : "alert alert-success"} >
                        { result || error }
                    </div>
                </div>
        </div>
    );
}

export default Message;