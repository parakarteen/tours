import React from 'react'
import style from './Button.module.scss'

function Button({children}) {
    return (
        <div className={style.Button}>
            {children}
        </div>
    )
}

export default Button
