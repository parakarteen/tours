import React, { useState } from 'react'
import { MainContext } from '../../context'
import { Link } from 'react-router-dom'
import style from './Cart.module.scss'

function Cart() {
    const [isFavorite, setIsFavorite] = useState(true)
    const { cart, setId, onAddFavorites, search, setSearch } = React.useContext(MainContext)

    const onClickFavorite = (id) => {
        onAddFavorites(cart, id - 1)
    }

    const filterTours = cart.filter(tour => {
        return tour.title.toLowerCase().includes(search.toLowerCase())
    })

    return (
        <div className={style.card}>
            <div className={style.wrap}>
                <div></div>
                <div className={style.searchBlock}>
                    <img src="/images/search.png" alt="lupa" />
                    <input
                        type="text"
                        value={search}
                        placeholder="Search..."
                        onChange={(e) => setSearch(e.target.value)} />
                    {search && <img src="images/close.png" alt="close" onClick={() => setSearch('')} />}
                </div>
            </div>
            <div className={style.cardItems}>
                {
                    filterTours.map(item => (
                        <div key={`${item.id}_${item.title}`} className={style.itemLocation}>
                            <img className={style.favotites} onClick={() => onClickFavorite(item.id)} src='/images/true.png' alt="star" />
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

export default Cart
