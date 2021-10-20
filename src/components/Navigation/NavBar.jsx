import React from 'react'
import NavlLinks from './NavLinks'
import style from './Navigation.module.scss'

export default function NavBar() {
    return (
        <nav className={style.nav}>
            <NavlLinks />
        </nav>
        
    )
}
