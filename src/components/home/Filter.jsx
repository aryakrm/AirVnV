import React, { useState, useEffect, useRef } from 'react';
import { nanoid } from 'nanoid';
import countries from '../../store/countries';
import countriesWithCities from '../../store/countriesWithCities';

function Filter() {
    const [searchedCountry, setSearchedCountry] = useState('');
    const [searchedCity, setSearchedCity] = useState('');
    const countryInputRef = useRef();
    const cityInputRef = useRef();
    const countryDropdownRef = useRef();
    const cityDropdownRef = useRef();
    const showPopupButtonRef = useRef();
    const popupRef = useRef();

    useEffect(() => {
        countryInputRef.current.addEventListener('click', (e) => {
            e.stopPropagation();
            countryDropdownRef.current.style.display = 'flex';
        });

        cityInputRef.current.addEventListener('click', (e) => {
            e.stopPropagation();
            cityDropdownRef.current.style.display = 'flex';
        });

        document.addEventListener('click', (e) => {
            countryDropdownRef.current.style.display = 'none';
            cityDropdownRef.current.style.display = 'none';
            console.log('document Clicked');
        });

        showPopupButtonRef.current.addEventListener('click', (e) => {
            e.stopPropagation();
            popupRef.current.style.display = 'flex';
        });
    }, []);

    const handleCountryChange = (e) => {
        setSearchedCountry(e.target.value);
        setSearchedCity('');
    };

    const handleCityChange = (e) => {
        setSearchedCity(e.target.value);
    };

    const filterCountries = (country) => {
        return countries
            .filter(({ name }) => {
                const searchedCountryLowerCase = country.toLowerCase();
                const countryLowerCase = name.toLowerCase();
                return (
                    searchedCountryLowerCase &&
                    countryLowerCase.startsWith(searchedCountryLowerCase)
                );
            })
            .slice(0, 10);
    };

    const filterCities = () => {
        return countriesWithCities.filter(({ country }) => {
            return country === searchedCountry;
        });
    };

    const applyFilters = (e) => {
        e.stopPropagation();
        popupRef.current.style.display = 'none';
    };

    return (
        <div className="filter-wrapper">
            <div className="filter-wrapper-button">
                <button className="filterButton" ref={showPopupButtonRef}>
                    Location
                </button>
            </div>
            <div className="filter-wrapper-popup" ref={popupRef}>
                <div className="filter-wrapper-popup-country">
                    <input
                        name="country"
                        type="text"
                        className="filter-wrapper-popup-country__input"
                        value={searchedCountry}
                        onChange={handleCountryChange}
                        placeholder="Country"
                        ref={countryInputRef}
                        autoComplete="off"
                    />
                    <ul
                        className="filter-wrapper-popup-country-dropdown"
                        ref={countryDropdownRef}
                    >
                        {filterCountries(searchedCountry).map(({ name }) => {
                            return (
                                <li
                                    className="filter-wrapper-popup-country-dropdown__item"
                                    onClick={() => setSearchedCountry(name)}
                                    key={nanoid()}
                                >
                                    {name}
                                </li>
                            );
                        })}
                    </ul>
                </div>
                <div className="filter-wrapper-popup-city">
                    <input
                        name="city"
                        type="text"
                        className="filter-wrapper-popup-city__input"
                        value={searchedCity}
                        onChange={handleCityChange}
                        placeholder="City"
                        ref={cityInputRef}
                        autoComplete="off"
                    />
                    <ul
                        className="filter-wrapper-popup-city-dropdown"
                        ref={cityDropdownRef}
                    >
                        {filterCities().map(({ cities }) => {
                            return cities
                                .filter((city) => {
                                    const searchedCityLowerCase =
                                        searchedCity.toLowerCase();
                                    const cityLowerCase = city.toLowerCase();

                                    return (
                                        searchedCityLowerCase &&
                                        cityLowerCase.startsWith(
                                            searchedCityLowerCase
                                        )
                                    );
                                })
                                .slice(0, 10)
                                .map((city) => {
                                    return (
                                        <li
                                            className="filter-wrapper-popup-city-dropdown__item"
                                            onClick={() =>
                                                setSearchedCity(city)
                                            }
                                            key={nanoid()}
                                        >
                                            {city}
                                        </li>
                                    );
                                });
                        })}
                    </ul>
                </div>
                {/* when this button is clicked, the searching filters are applied to the store */}
                <button
                    className="filter-wrapper-popup-apply filterButton"
                    onClick={applyFilters}
                >
                    Apply
                </button>
            </div>
        </div>
    );
}

export default Filter;
