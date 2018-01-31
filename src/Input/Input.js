import React from 'react';

import './Input.css';

const Input = ({ sides, onButtonClick, onInputChange }) => {
    sides = sides || [];

    const inputs = sides.map((side, index, sides) => 
        <input key={index} value={sides[index]} className="form-control side col-lg-3" type="number" placeholder="e.g. 42" onChange={onInputChange} />);

    return (
        <form>
            <div className="row">
                { inputs }
            </div>
            <div className="row">
                <input className="btn btn-primary" type="button" value="Check figure" onClick={onButtonClick} />
            </div>
        </form>
    );
}

export default Input;