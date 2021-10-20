import React from 'react'
import { Link } from 'react-router-dom'
import style from './Navigation.module.scss'

export default function NavlLinks() {
    return (
        <ul >
        <Link className={style.navItem} to="/">Home</Link>
        <Link className={style.navItem} to="/tours">Destinations</Link>
        <Link className={style.navItem} to="/about">About</Link>
        <Link className={style.navItem} to="/favorites">Favorites</Link>
         </ul>
    )
}
