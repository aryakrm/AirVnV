import React from 'react';
import { useStoreHouses } from '../state/store';

import HouseCard from '../components/HouseCard';

function Home() {
    const houses = useStoreHouses((state) => state.houses);
    console.log(houses);
    return (
        <div>
            {houses.map((house) => {
                return <HouseCard key={house.id} house={house} />;
            })}
        </div>
    );
}

export default Home;
