import React from 'react';
import { Link } from 'react-router-dom';

function Nav() {
    return (
        <nav>
            <img className="logo" src="../../public/airVnvLogo.PNG" alt="" />
            <div className="nav_menu">
                <Link to={'/'}>Home</Link>
                <Link to={'/signin'}>SignIn</Link>
                <Link to={'/signup'}>SignUp</Link>
            </div>
            <div className="button_nav_menu">
                <Link to={'/'}></Link>
                <Link to={'/signin'}>SignIn</Link>
                <Link to={'/signup'}>SignUp</Link>
            </div>
        </nav>
    );
}

export default Nav;
