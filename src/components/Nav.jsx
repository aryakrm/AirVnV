import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import FilterAltIcon from '@mui/icons-material/FilterAlt';
import HomeIcon from '@mui/icons-material/Home';
import LoginIcon from '@mui/icons-material/Login';
import PersonAddAltIcon from '@mui/icons-material/PersonAddAlt';
import FormControlLabel from '@mui/material/FormControlLabel';
import { styled } from '@mui/material/styles';
import Switch from '@mui/material/Switch';
import Stack from '@mui/material/Stack';
import Typography from '@mui/material/Typography';

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
    const MaterialUISwitch = styled(Switch)(({ theme }) => ({
        width: 62,
        height: 34,
        padding: 7,
        '& .MuiSwitch-switchBase': {
            margin: 1,
            padding: 0,
            transform: 'translateX(6px)',
            '&.Mui-checked': {
                color: '#fff',
                transform: 'translateX(22px)',
                '& .MuiSwitch-thumb:before': {
                    backgroundImage: `url('data:image/svg+xml;utf8,<svg xmlns="http://www.w3.org/2000/svg" height="20" width="20" viewBox="0 0 20 20"><path fill="${encodeURIComponent(
                        '#fff'
                    )}" d="M4.2 2.5l-.7 1.8-1.8.7 1.8.7.7 1.8.6-1.8L6.7 5l-1.9-.7-.6-1.8zm15 8.3a6.7 6.7 0 11-6.6-6.6 5.8 5.8 0 006.6 6.6z"/></svg>')`,
                },
                '& + .MuiSwitch-track': {
                    opacity: 1,
                    backgroundColor:
                        theme.palette.mode === 'dark' ? '#8796A5' : '#aab4be',
                },
            },
        },
        '& .MuiSwitch-thumb': {
            backgroundColor:
                theme.palette.mode === 'dark' ? '#003892' : '#001e3c',
            width: 32,
            height: 32,
            '&:before': {
                content: "''",
                position: 'absolute',
                width: '100%',
                height: '100%',
                left: 0,
                top: 0,
                backgroundRepeat: 'no-repeat',
                backgroundPosition: 'center',
                backgroundImage: `url('data:image/svg+xml;utf8,<svg xmlns="http://www.w3.org/2000/svg" height="20" width="20" viewBox="0 0 20 20"><path fill="${encodeURIComponent(
                    '#fff'
                )}" d="M9.305 1.667V3.75h1.389V1.667h-1.39zm-4.707 1.95l-.982.982L5.09 6.072l.982-.982-1.473-1.473zm10.802 0L13.927 5.09l.982.982 1.473-1.473-.982-.982zM10 5.139a4.872 4.872 0 00-4.862 4.86A4.872 4.872 0 0010 14.862 4.872 4.872 0 0014.86 10 4.872 4.872 0 0010 5.139zm0 1.389A3.462 3.462 0 0113.471 10a3.462 3.462 0 01-3.473 3.472A3.462 3.462 0 016.527 10 3.462 3.462 0 0110 6.528zM1.665 9.305v1.39h2.083v-1.39H1.666zm14.583 0v1.39h2.084v-1.39h-2.084zM5.09 13.928L3.616 15.4l.982.982 1.473-1.473-.982-.982zm9.82 0l-.982.982 1.473 1.473.982-.982-1.473-1.473zM9.305 16.25v2.083h1.389V16.25h-1.39z"/></svg>')`,
            },
        },
        '& .MuiSwitch-track': {
            opacity: 1,
            backgroundColor:
                theme.palette.mode === 'dark' ? '#8796A5' : '#aab4be',
            borderRadius: 20 / 2,
        },
    }));

    return (
        <div>
            <nav>
                <div className="top_nav_menu">
                    <Link to={'/'}>
                        <img
                            className="logo"
                            src="./logo.png"
                            alt="AirVnV Logo"
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
                            Any week
                        </span>
                        <span
                            onMouseOver={handleMouseOverGuests}
                            onMouseOut={handleMouseOutGuests}
                        >
                            Add Guests
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
                    <div className="toggleTheme">
                        <FormControlLabel
                            control={
                                <MaterialUISwitch
                                    sx={{ m: 1 }}
                                    defaultChecked
                                />
                            }
                        />
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
