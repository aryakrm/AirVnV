import React from 'react';
import { Link } from 'react-router-dom';
// number 8
function AddPrice() {
    return (
        <div>
            <label>Price of your Property:</label>
            <input type="number" />
            <span>$</span>

            <Link>
                <button>Next</button>
            </Link>
        </div>
    );
}

export default AddPrice;
