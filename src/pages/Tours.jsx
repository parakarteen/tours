import React, { useState } from 'react'
import Cart from '../components/Cart'
import { MainContext } from '../context'

function Tours() {
    const { cart, loading, search } = React.useContext(MainContext)
    return (
        <div>
            <h1 style={{ marginTop: '80px', fontFamily: 'Merriweather, serif' }}>{search ? `Поиск по запросу "${search}"` : 'Destinations'}</h1>
            <Cart />
        </div>
    )
}
export default Tours
