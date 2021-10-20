import React, {useState} from 'react'
import Cart from '../components/Cart'
import { MainContext } from '../context'

function Favorites() {
  const { favorites, onDeleteFavorites } = React.useContext(MainContext)
  const [count, setCount] = useState(0)
  

  return (
    <div className='wrap'>
      {
        favorites.map(item => (
          <div className='itemLocation' key={`${item.id}_${item.title}`} onClick={() => console.log(item.id)}>
            <img className='favorites' src={item.imgURL} alt="" />
            <h3 className='h3'>{item.title}</h3>
            <p className='p'>{item.region}</p>

            <button className='btn' onClick={()=> onDeleteFavorites(item.id)}>Delete</button> 
          </div>
        ))
      }
    </div>
  )
}

export default Favorites
