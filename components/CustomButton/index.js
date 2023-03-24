import React from 'react'
import styles from './styles.module.scss'

function CustomButton(props) {
  return (
    <button className={styles['custom-button']} {...props}>
        {props.msg}
    </button>
  )
}

export default CustomButton