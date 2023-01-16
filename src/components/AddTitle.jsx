import React from 'react';
import { Link } from 'react-router-dom';
// number 4
function AddTitle() {
    return (
        <div>
            <label>Title of your Property:</label>
            <input type="text" placeholder="Title...." />
            <button>Apply</button>
            <Link to={'/add-property/add-details'}>
                <button>Next</button>
            </Link>
        </div>
    );
}

export default AddTitle;
