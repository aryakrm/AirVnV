import React, { useState } from 'react';
import { Link } from 'react-router-dom';
// number 2
// id
// type
// createdAt
//
function AddType() {
    const [property, setProperty] = useState({});
    const [type, setType] = useState('');

    const handleRadioChange = (e) => {
        setType(e.target.value);
    };

    return (
        <div>
            <label>Choose or Add Type of your Property:</label>
            <label htmlFor="flat">Flat</label>
            <input
                id="flat"
                value="flat"
                type="radio"
                checked={type === 'flat'}
                onChange={handleRadioChange}
            />
            <label htmlFor="cabin">Cabin</label>
            <input
                id="cabin"
                value="cabin"
                type="radio"
                checked={type === 'cabin'}
                onChange={handleRadioChange}
            />
            <label htmlFor="house">House</label>
            <input
                id="house"
                value="house"
                type="radio"
                checked={type === 'house'}
                onChange={handleRadioChange}
            />
            <label htmlFor="room">Room</label>
            <input
                id="room"
                value="room"
                type="radio"
                checked={type === 'room'}
                onChange={handleRadioChange}
            />

            <button>Save</button>

            <Link to={`/add-property/add-location/${property}`}>Next</Link>
        </div>
    );
}

export default AddType;
