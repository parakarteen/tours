import React from 'react'

import MobileNavigation from './MobileNavigation'
import NavBar from './NavBar'
import style from './Navigation.module.scss'


function Navigation() {
    return (
        <div>
            
            <NavBar />
            <MobileNavigation />
        </div>
    )
}

export default Navigation
