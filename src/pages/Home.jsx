import React from 'react';
import { useStoreHouses } from '../state/store';
import Nav from '../components/Nav';

import HouseCard from '../components/HouseCard';

function Home() {
    const houses = useStoreHouses((state) => state.houses);
    console.log(houses);
    return (
        <main>
            <Nav />
            <section className="cards">
                {houses.map((house) => {
                    return <HouseCard key={house.id} house={house} />;
                })}
            </section>
        </main>
    );
}

export default Home;
