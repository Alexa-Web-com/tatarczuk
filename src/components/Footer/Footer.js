import React from 'react'
import style from './Footer.module.css'
import logo from '../../assets/logo.png'


const Footer = () => {
    return (
        <div className={style.background}>
            <div className={style.container}>
                <a href='/privacy-policy' className={`${style.text} ${style.link}`}>Polityka prywatności</a>
                <p className={style.text}>Copyright © tatarczuk.com.pl 2023</p>
                <a href="https://alexa-web.com" className={style.designedBy} target="_blank" rel="noopener noreferrer">
                    <span className={`${style.text} ${style.textLeft}`}>Designed by</span>
                    <img className={style.logo} src={logo} alt='logo' />
                    <span className={`${style.text} ${style.textRight}`}>alexa-web.com</span>
                </a>
            </div>
        </div>
    )
}

export default Footer