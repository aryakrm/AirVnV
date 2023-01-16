import React from 'react';
// number 1
function AddAboutYourPlace() {
    return (
        <div>
            <h1>Welcome!</h1>
            <Link to={`/add-proprety/add-type`}>
                <button>Next</button>
            </Link>
        </div>
    );
}

export default AddAboutYourPlace;
