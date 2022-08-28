import React from 'react'
import styles from './Icon.module.css'
import Symble from './images/symble.svg'

const Icon = ({className, name}) => {
  return (
    <svg className={`${styles._symble}  ${className}`}>
        <use xlinkHref={`${Symble.src}#${name}`} />
    </svg>
  )
}

export default Icon