import Button from '../UI/Button/Button'
import React from 'react'
import { Link } from 'react-router-dom'
import style from './Description.module.scss'


function Description() {
    return (
        <div className={style.wrap}>
            <div className={style.left}>
                <img src="/images/Thousand.png" alt="person" />
            </div>

            <div className={style.right}>
                <h1>A new way to explore the world </h1>
                <p>For decades travellers have reached for Lonely Planet books when looking to plan and execute their perfect
                    trip, but now, they can also let Lonely Planet Experiences lead the way</p>
                   <Link className={style.about} to='/about'><Button> Learn More</Button></Link>
            </div>
        </div>
    )
}

export default Description
