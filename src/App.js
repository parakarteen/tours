import style from './App.module.scss'
import { Route } from "react-router";
import { MainContext } from "./context";
import Header from './components/Header';
import Home from './pages/Home';
import Tours from './pages/Tours'
import About from './pages/About';
import Footer from './components/Footer/Footer';
import Modal from './components/Modal/Modal';
import { useState, useEffect } from 'react'
import axios from 'axios';
import Favorites from './pages/Favorites';

function App() {
  const [card, setCard] = useState([])
  const [cart, setCart] = useState([])
  const [favorites, setFavorites] = useState([])
  const [id, setId] = useState()
  const [search, setSearch] = useState('')

  useEffect(() => {
    async function myData() {
      try {
        const responseCard = await axios.get("https://61658a7acb73ea00176420ac.mockapi.io/card?page=1&limit=4")
        const responseCart = await axios.get("https://61658a7acb73ea00176420ac.mockapi.io/card")
        const responseFavorites = await axios.get("https://61658a7acb73ea00176420ac.mockapi.io/favorites")
        setCard(responseCard.data)
        setCart(responseCart.data)
        setFavorites(responseFavorites.data)
      }
      catch (error) {
        alert("Произошла ошибка :(")
      }
    }
    myData()

  }, [])

  const onAddFavorites = async (obj, id) => {
    try {
      const { data } = await axios.post('https://61658a7acb73ea00176420ac.mockapi.io/favorites', obj[id])
      setFavorites(prev => [...prev, data])
    }
    catch (error) {
      alert('Произошла ошибка...')
    }
  }

  const onDeleteFavorites = id => {
    axios.delete(`https://61658a7acb73ea00176420ac.mockapi.io/favorites/${id}`)
    setFavorites(prev => prev.filter(item => item.id !== id))
  }

  return (
    <MainContext.Provider value={{ card, setId, id, cart, favorites, onAddFavorites, search, setSearch, onDeleteFavorites }}>
      <div>
        <div className={style.wrapper}>
          <Header />
          <Route path="/" exact>
            <Home />
          </Route>

          <Route path='/tours'>
            <Tours />
          </Route>

          <Route path='/about'>
            <About />
          </Route>
          <Route path={`/modal/${id}`}>
            <Modal />
          </Route>

          <Route path='/favorites'>
            <Favorites />
          </Route>
        </div>
        <Footer />
      </div>
    </MainContext.Provider>

  );
}

export default App;
