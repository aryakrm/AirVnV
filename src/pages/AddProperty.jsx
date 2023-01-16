import React from 'react';
import { Link } from 'react-router-dom';

function AddProperty() {
    return (
        <div>
            AddProperty
            <Link to={'/add-property/add-about-your-place'}>
                <button>Continue</button>
            </Link>
        </div>
    );
}

export default AddProperty;
