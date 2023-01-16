import React from 'react';
import { Link } from 'react-router-dom';
// number 1
function AddAboutYourPlace() {
    return (
        <div>
            <h1>Welcome!</h1>
            <Link to={`/add-property/add-type`}>
                <button>Next</button>
            </Link>
        </div>
    );
}

export default AddAboutYourPlace;
