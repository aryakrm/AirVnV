import React from 'react';
import { Link } from 'react-router-dom';
// number 6
function AddImages() {
    return (
        <div>
            <label>Cover Photo:</label>
            <input type="image" />
            <label>Second Photo:</label>
            <input type="image" />
            <label>Third Photo:</label>
            <input type="image" />
            <label>Forth Photo:</label>
            <input type="image" />
            <label>Fifth Photo:</label>
            <input type="image" />

            <button>Add Photos</button>
            <Link to={'/add-property/add-offers'}>
                <button>Next</button>
            </Link>
        </div>
    );
}

export default AddImages;
