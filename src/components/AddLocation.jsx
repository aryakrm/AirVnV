import React from 'react';
import { useParams } from 'react-router-dom';
// number 3
function AddLocation() {
    const { type } = useParams();
    console.log(type);
    return (
        <div>
            <label>Add the location of your Property:</label>
            <input type="text" placeholder="Location...." />
            <button>Apply</button>
        </div>
    );
}

export default AddLocation;
