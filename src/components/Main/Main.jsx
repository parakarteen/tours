import React, { useState } from 'react'
import Button from '../UI/Button/Button'
import style from './Main.module.scss'
import Select from 'react-select';

function Main() {
    const [startDate, setStartDate] = useState();
    console.log(startDate);

    const options = [
        {id:1,  value: 'Issyk-Kul', label: 'Issyk-Kul' },
        {id:2, value: 'Kol-Tor', label: 'Kol-Tor' },
        {id:3, value: 'Sary-Chelek', label: 'Sary-Chelek' },
        {id:4, value: 'Kel-Suu', label: 'Kel-Suu' },

    ];
     
    return (
        <div className={style.main}>
            <div className={style.left}>
                <h1>Explore and Travel</h1>
                <p>Holiday finder</p>
                <img src="/images/line.png" alt="line" />
                <div className={style.mainDrop}>
                    <div className={style.leftDrop}>
                        <Select className={style.dropDown} options={options} placeholder='Location' />
                    </div>
                    <div>
                        <input className={style.input} type="date" value={startDate} onChange={(e) => setStartDate(e.target.value)} />
                    </div>
                </div>
                <Button>Explore</Button>
            </div>

            <div className={style.right}>
                <img src="./images/human.png" alt="human" />
            </div>
        </div>
    )
}

export default Main