import React from 'react';
import { Link } from 'react-router-dom';
// number 7
function AddOffers() {
    return (
        <div>
            {' '}
            <h1>Offers:</h1>
            <label>Wifi:</label>
            <input type="checkbox" />
            <label>Kitchen:</label>
            <input type="checkbox" />
            <label>Parking:</label>
            <input type="checkbox" />
            <label>Pets:</label>
            <input type="checkbox" />
            <label>TV:</label>
            <input type="checkbox" />
            <label>Pool:</label>
            <input type="checkbox" />
            <label>Smoke:</label>
            <input type="checkbox" />
            <button>Apply</button>
            <Link to={'/add-property/add-price'}>
                <button>Next</button>
            </Link>
        </div>
    );
}

export default AddOffers;
