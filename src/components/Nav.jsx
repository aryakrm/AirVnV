import React from 'react';
import { Link } from 'react-router-dom';
import BottomNavigation from '@mui/material/BottomNavigation';
import BottomNavigationAction from '@mui/material/BottomNavigationAction';
import FolderIcon from '@mui/icons-material/Folder';
import RestoreIcon from '@mui/icons-material/Restore';
import FavoriteIcon from '@mui/icons-material/Favorite';
import LocationOnIcon from '@mui/icons-material/LocationOn';

function Nav() {
    const [value, setValue] = React.useState('recents');

    const handleChange = (event, newValue) => {
        setValue(newValue);
    };
    return (
        <nav>
            <img className="logo" src="../../public/airvnv-logo.png" alt="" />
            <div className="nav_menu">
                <Link to={'/'}>Home</Link>
                <Link to={'/signin'}>SignIn</Link>
                <Link to={'/signup'}>SignUp</Link>
            </div>

            <div className="button_nav_menu">
                <BottomNavigation
                    sx={{ width: '100%', height: '100%' }}
                    value={value}
                    onChange={handleChange}
                >
                    <BottomNavigationAction
                        label="Recents"
                        value="recents"
                        icon={<RestoreIcon />}
                    />
                    <BottomNavigationAction
                        label="Favorites"
                        value="favorites"
                        icon={<FavoriteIcon />}
                    />
                    <BottomNavigationAction
                        label="Nearby"
                        value="nearby"
                        fontSize="larger"
                        icon={<LocationOnIcon />}
                    />
                </BottomNavigation>
            </div>
        </nav>
    );
}

export default Nav;
