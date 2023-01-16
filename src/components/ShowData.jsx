import React from 'react';
import { useParams } from 'react-router-dom';

function ShowData() {
    const { data } = useParams();
    return (
        <div>
            <h1>{data}</h1>
        </div>
    );
}

export default ShowData;
