import React from 'react';
import useStorePropertiesFilters from '../store/store-propertiesFilters';
import useStoreProperties from '../store/store';
import PropertyCard from '../components/home/PropertyCard';
import Filter from '../components/home/Filter';

function Home() {
    const properties = useStoreProperties((state) => state.properties);
    const filterProps = useStorePropertiesFilters((state) => state.filterProps);
    console.log(properties);

    const filterPropertiesLocation = (filters) => {
        if (
            filters === undefined ||
            filters === null ||
            Object.keys(filters).length === 0
        ) {
            return undefined;
        }
        return properties.filter((property) => {
            return filters.location === property.location;
        });
    };

    return (
        <main>
            <Filter></Filter>
            <section className="cards">
                {(filterPropertiesLocation(filterProps) &&
                    filterPropertiesLocation(filterProps).map((property) => {
                        return (
                            <PropertyCard
                                key={property.id}
                                property={property}
                            />
                        );
                    })) ||
                    properties.map((property) => {
                        return (
                            <PropertyCard
                                key={property.id}
                                property={property}
                            ></PropertyCard>
                        );
                    })}
            </section>
        </main>
    );
}

export default Home;
