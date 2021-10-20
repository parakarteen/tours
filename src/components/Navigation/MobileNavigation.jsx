import React, {useState} from 'react'
import NavLinks from './NavLinks'
import style from './Navigation.module.scss'
import {AiOutlineMenu} from 'react-icons/ai'
import {IoMdClose} from 'react-icons/io'

export default function MobileNavigation() {
    const [open, setOpen] = useState(false)

    const hamburgerIcon = <AiOutlineMenu className={style.hamburger} size='40px' color='#1ABE84;'
    onClick={() => setOpen(!open)}
    />
    const hamburgerClose = <IoMdClose className={style.hamburger} size='40px' color='#1ABE84;'
    onClick={() => setOpen(!open)}
    />
    return (
        <nav className={style.mobNav}>
            {open ? hamburgerClose : hamburgerIcon}
            {open && <NavLinks />}
        </nav>
       
    )
}
