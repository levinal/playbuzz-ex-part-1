import React from 'react';
import { ReactComponent as Logo } from '../../assets/svg/logo.svg'
import avatar from '../../assets/png/avatar.png';

import HamburgerBtn from '../SideMenu/HamburgerBtn';
import './Navbar.css'

const navbar = props => (
    <header className="topbar">
        <nav className="topbar__navigation">
            <div className="topbar__logo"><Logo /></div>
            <div className="nav-middle-space" />
            <div className="topbar__navigation-items">
                <ul>
                    <li><a>Explore</a></li>
                    <li><a>Subscriptions</a></li>
                    <li><a>Channels</a></li>
                    <li><img alt="" src={avatar} /></li>
                </ul>
            </div>
            <div>
                <HamburgerBtn />
            </div>
        </nav>
    </header>
);

export default navbar;