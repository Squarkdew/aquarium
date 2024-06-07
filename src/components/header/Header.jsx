import React from 'react';
import cls from "./Header.module.scss"
import { Link } from 'react-router-dom';

function Header(props) {
    return (
        <div className={cls.header}>
            <div className={cls.links}>
                <Link className={cls.link_home}>Home</Link>
                <Link className={cls.link_service}>Service</Link>
                <Link className={cls.link_shop}>Shop</Link>
                <Link className={cls.link_experience}>Experience</Link>
            </div>
            <Link to="/"><h1 className={cls.logo}>AquaticKingdom</h1></Link>
            <button className={cls.button1}>Explore now</button>
        </div>
    );
}

export default Header;