import React, { useEffect, useState } from 'react';
import { useParams, Link } from 'react-router-dom';
import { useStoreProperties } from '../state/store';
// number 3
function AddLocation() {
    const [location, setLocation] = useState('');

    const addPropertySpecs = useStoreProperties(
        (state) => state.addPropertySpecs
    );

    const newPropertySpecs = useStoreProperties(
        (state) => state.newPropertySpecs
    );

    useEffect(() => {
        addPropertySpecs('location', location);
        console.log(newPropertySpecs);
    }, [location]);

    const changeHandler = (e) => {
        setLocation(e.target.value);
    };

    return (
        <div>
            <label>Add the location of your Property:</label>
            <input
                type="text"
                placeholder="Location...."
                value={location}
                onChange={changeHandler}
            />

            <Link to={'/add-property/add-title'}>
                <button>Next</button>
            </Link>
        </div>
    );
}

export default AddLocation;
