import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import FilterAltIcon from '@mui/icons-material/FilterAlt';
import HomeIcon from '@mui/icons-material/Home';
import LoginIcon from '@mui/icons-material/Login';
import PersonAddAltIcon from '@mui/icons-material/PersonAddAlt';

function Nav() {
    const [isLocationOpen, setIsLocationOpen] = useState(false);
    const [isDateOpen, setIsDateOpen] = useState(false);
    const [isGuestsOpen, setIsGuestsOpen] = useState(false);

    const handleMouseOverLocation = () => {
        setIsLocationOpen(true);
    };
    const handleMouseOutLocation = () => {
        setIsLocationOpen(false);
    };
    const handleMouseOverDate = () => {
        setIsDateOpen(true);
    };
    const handleMouseOutDate = () => {
        setIsDateOpen(false);
    };
    const handleMouseOverGuests = () => {
        setIsGuestsOpen(true);
    };
    const handleMouseOutGuests = () => {
        setIsGuestsOpen(false);
    };

    return (
        <div>
            <nav>
                <div className="top_nav_menu">
                    <Link to={'/'}>
                        <img
                            className="logo"
                            src="../../public/airvnv-logo.png"
                            alt=""
                        />
                    </Link>
                    <div className="nav_filter">
                        <span
                            onMouseOver={handleMouseOverLocation}
                            onMouseOut={handleMouseOutLocation}
                        >
                            Anywhere
                        </span>
                        <span
                            onMouseOver={handleMouseOverDate}
                            onMouseOut={handleMouseOutDate}
                        >
                            | Any week
                        </span>
                        <span
                            onMouseOver={handleMouseOverGuests}
                            onMouseOut={handleMouseOutGuests}
                        >
                            | Add Guests
                        </span>
                        <span className="filter__icon">
                            <FilterAltIcon fontSize="large" />
                        </span>
                    </div>
                    <div className="nav_menu">
                        <Link to={'/'}>Home</Link>
                        <Link to={'/signin'}>SignIn</Link>
                        <Link to={'/signup'}>SignUp</Link>
                    </div>
                </div>
            </nav>
            <div className="filter__box__wrapper">
                <div
                    className="filter__box__location"
                    onMouseOver={handleMouseOverLocation}
                    onMouseOut={handleMouseOutLocation}
                    style={{
                        opacity: !isLocationOpen ? '0' : '1',
                        visibility: !isLocationOpen ? 'hidden' : 'visible',
                    }}
                >
                    <input type="text" placeholder="add a location" />
                    <button>apply</button>
                </div>
                <div
                    className="filter__box__date"
                    onMouseOver={handleMouseOverDate}
                    onMouseOut={handleMouseOutDate}
                    style={{
                        opacity: !isDateOpen ? '0' : '1',
                        visibility: !isDateOpen ? 'hidden' : 'visible',
                    }}
                >
                    <label>from:</label>
                    <input type="date" />
                    <label>to:</label>
                    <input type="date" />
                    <button>apply</button>
                </div>
                <div
                    className="filter__box__guests"
                    onMouseOver={handleMouseOverGuests}
                    onMouseOut={handleMouseOutGuests}
                    style={{
                        opacity: !isGuestsOpen ? '0' : '1',
                        visibility: !isGuestsOpen ? 'hidden' : 'visible',
                    }}
                >
                    <label>Adult: </label>
                    <input type="number" />
                    <label>Children: </label>
                    <input type="number" />
                    <button>apply</button>
                </div>
            </div>
            <div className="button_nav_menu">
                <Link to={'/'}>
                    <HomeIcon fontSize="large" />
                </Link>
                <Link to={'/signin'}>
                    <LoginIcon fontSize="large" />
                </Link>

                <Link to={'/signup'}>
                    <PersonAddAltIcon fontSize="large" />
                </Link>
            </div>
        </div>
    );
}

export default Nav;
