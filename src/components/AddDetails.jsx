import React from 'react';
// number 5
function addDetails() {
    return (
        <div>
            <h1>Details</h1>
            <label>Guests:</label>
            <input type="number" />
            <label>Bedrooms:</label>
            <input type="number" />
            <label>Beds:</label>
            <input type="number" />
            <label>Baths:</label>
            <input type="number" />

            <Link>
                <button>Next</button>
            </Link>
        </div>
    );
}

export default addDetails;
