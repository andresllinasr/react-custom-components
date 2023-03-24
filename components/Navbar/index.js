import React, { useState, useEffect } from 'react'
import styles from './styles.module.scss'
import CustomButton from '../CustomButton'


function Navbar({buttons, logo}) {

    console.log("Component rendered")

    const [theme, setTheme] = useState('light');

    useEffect(() => {
            console.log('Navbar mounted')
        return () => {
            console.log('Navbar unmounted')
        }
    }, [])

    const handleClick = () => setTheme(theme === 'light' ? 'dark' : 'light')


  return (
    <nav className={styles.navbar}>
        <div className={styles['navbar__logo']}>
            {logo}
        </div>
        <div className={styles['navbar__menu']}>
                {buttons.map((item, index) => (
                    <li className={styles['navbar__menu-item']} key={index}>
                        <CustomButton msg={item.msg}/>
                    </li>
                ))}
            <CustomButton onClick={handleClick} msg={"Count: " + theme}/>
        </div>
    </nav>
  )
}

export default Navbar