import React from 'react';
import { Link } from 'react-router-dom';
// number 9
function AddReview() {
    return (
        <div>
            Review Of Property you are adding..
            <Link to={'/add-property/complete'}>
                <button>Next</button>
            </Link>
        </div>
    );
}

export default AddReview;
