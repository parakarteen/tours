import React from 'react'
import { Link } from 'react-router-dom'
import { MainContext } from '../../context';
import style from './Card.module.scss'


function Card() {
    const {card, setId} =React.useContext(MainContext)
     
    return (
        <div className={style.card}>
            <div className={style.wrap}>
            <h1>Featured destinations</h1>
            <Link to="/tours"><button>View all <img src="/images/arrow.png" alt="arrow"/> </button></Link>
            </div>
            <div className={style.cardItems}>
                {
                    card.map(item => (
                            <div key={`${item.id}_${item.title}`} className={style.itemLocation}>  
                            <Link to={`/modal/${item.id}`} onClick={() => setId(item.id)}><img src={item.imgURL} alt="location" /></Link>
                                <h3>{item.title}</h3>
                                <p>{item.region}</p>
                            </div>
                    ))
                }
            </div>
        </div>
    )
}

export default Card
