import React from 'react';
import { Link } from 'react-router-dom';
import SearchIcon from '@mui/icons-material/Search';
import HomeIcon from '@mui/icons-material/Home';
import LoginIcon from '@mui/icons-material/Login';
import PersonAddAltIcon from '@mui/icons-material/PersonAddAlt';

function Nav() {
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
                        <span>Anywhere</span>
                        <span>| Any week</span>
                        <span>| add guests</span>
                        <button>
                            <SearchIcon fontSize="large" />
                        </button>
                    </div>
                    <div className="nav_menu">
                        <Link to={'/'}>Home</Link>
                        <Link to={'/signin'}>SignIn</Link>
                        <Link to={'/signup'}>SignUp</Link>
                    </div>
                </div>
            </nav>
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
