import React, { useState, useEffect } from 'react'
import style from './Guides.module.scss'
import axios from 'axios'


function Guides() {
    const [guides, setGuides] = useState([])
    const [currentPage, setCurrentPage] = useState(1)
    const [guidesPerPage] = useState(1)

    useEffect(() => {
        async function getGuides() {
            try {
                const res = await axios.get('https://61644909b55edc00175c1e84.mockapi.io/guides')
                setGuides(res.data)
            }
            catch (error) {
                alert("Произошла ошибка :(")
            }
        }

        getGuides()
    }, [])

    const lastGuidexIndex = currentPage * guidesPerPage
    const firstGuidexIndex = lastGuidexIndex - guidesPerPage
    const currentGuides = guides.slice(firstGuidexIndex, lastGuidexIndex)

    const nextPage = () => { if (currentPage < 5) { setCurrentPage(next => next + 1) } }
    const prevPage = () => { if (currentPage > 1) { setCurrentPage(prev => prev - 1) } }


    return (
        <div className={style.countainer}>
            <h1>Guides</h1>
            <div>
                {
                    currentGuides.map((item, i) => (
                        <div key={item.id} className={style.guides}>
                            <div className={style.left}>
                                <img src={item.stars} alt="point" />
                                <p>{item.description}</p>
                                <h3>{item.name}</h3>
                                <h6>{item.profession}</h6>
                            </div>
                            <div className={style.right}>
                                <img src={item.imgURL} alt="guide" />
                                <div className={style.btns}>
                                    <button onClick={prevPage}><img className={style.btnItem} width={35} src='./images/prev.png' alt="prev" /></button>
                                    <button onClick={nextPage}><img className={style.btnItem} width={35} className={style.btnItem} src="./images/next.png" alt="next" /></button>
                                </div>
                            </div>
                        </div>
                    ))
                }

            </div>
        </div>
    )
}

export default Guides
