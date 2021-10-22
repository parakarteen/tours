import React from 'react'
import style from './Modal.module.scss'
import { MainContext } from '../../context'


export default function Modal() {
    const { cart,  id } = React.useContext(MainContext)
    

    return (
        <div className={style.modalBlock}>
            {
                cart.filter(item => item.id === id).map(item => (
                    <div key={`${item.id}_${item.title}`} className={style.modal}>
                        <p className={style.img}><img src={item.imgURL} alt="location" /></p>
                        <div className={style.description}><h1>{item.title}</h1>
                            <p>{item.description}</p>
                            <h3><span>Difficulty</span>: {item.difficulty} </h3>
                            <h3><span>Price</span>: {item.price} $</h3>
                        </div>
                    </div>
                ))
            }
        </div>
    )
}
