import React from 'react'
import style from './Footer.module.scss'

function Footer() {
    return (
        <div className={style.footerMain}>
            <div className={style.countainer}>
                <div className={style.left}>
                    <p>Plan and book your perfect trip with
                        expert advice, travel tips destination
                        information from us</p>
                </div>
                <div className={style.right}>
                    <a href="https://www.instagram.com/ogogo_academy/"><img src="/images/intagram.png" alt="instagram" /></a>
                    <a href="https://www.linkedin.com/in/karina-daudova-b768a0218/"><img src="/images/netfily.png" alt="netfily" /></a>
                    <a href="https://twitter.com/?lang=ru"><img src="/images/twitter.png" alt="twitter" /></a>
                    <a href="https://www.facebook.com/asel.kim.54"><img src="/images/facebook.png" alt="facebook" /></a>
                </div>
                <div className={style.lastItem}>
                    <p>©2020 Thousand Sunny. All rights reserved</p>
                </div>
            </div>

        </div>
    )
}

export default Footer
