import React from 'react';
import { useStoreProperties } from '../state/store';
import Nav from '../components/Nav';
import PropertyCard from '../components/PropertyCard';

function Home() {
    const properties = useStoreProperties((state) => state.properties);
    console.log(properties);
    return (
        <main>
            <Nav />
            <section className="cards">
                {properties.map((property) => {
                    return (
                        <PropertyCard key={property.id} property={property} />
                    );
                })}
            </section>
        </main>
    );
}

export default Home;
