import React, { useState, useEffect } from 'react'
import styles from './styles.module.scss'

function Navbar({items, logo}) {

    console.log("Component rendered")

    const [expanded, setExpanded] = useState(false);
    

    // TODO extract breakpoints to a separate file
    const handleResize = () => {
        if(window.innerWidth > 700){
            setExpanded(false)
        }
    }
    
    useEffect(() => {
        window.addEventListener('resize', handleResize)
        console.log('Navbar mounted')
        return () => {
            window.removeEventListener('resize', handleResize)
            console.log('Navbar unmounted')
        }
    }, [])

    return (
        <nav className={styles.navbar}>
            <div className={styles['navbar__logo']}>
                <img src={logo.src} alt="Logo goes here" />   
                <button aria-expanded={expanded} onClick={() => setExpanded(!expanded)}>O</button>
            </div>
            <div className={`${styles[expanded ? "navbar__menu--expanded" : 'navbar__menu']}`}>
                {items.map((item, index) => (
                    <button className={styles['navbar__menu-item']} key={index}>{item.msg}</button>
                ))}
            </div>
        </nav>
    )
}

export default Navbar