import {React, useState } from 'react'
import Image from 'next/image'
import Link from 'next/link'
import styles from './Navbar.module.css'
import Logo from './images/logo-light.svg'
import { MdMenuOpen,MdClose } from 'react-icons/md';
import Icon from '../../common/Icon/Icon'


const Navbar = () => {
  const [isMobileMenu, setIsMobileMenu] = useState(false);
  return (
    <div className={`${isMobileMenu && styles.mobile_nav_open} ${styles._main_area}`} >
      <div className="container">
        <div className={styles._row} >
          <div className={styles._logo} >
            <Link href='/home'><Image src={Logo} alt="Vercel Logo" width={193} height={42} /></Link>
          </div>
          <div className={styles._menu} >
            <button onClick={() => setIsMobileMenu(!isMobileMenu)} className={`${styles._toggle} btn btn-none`} ><MdClose /></button>
            <ul>
              <li><Link href='/'>Intro</Link></li>
              <li><Link href='/'>Demos</Link></li>
              <li><Link href='/'>Documentation</Link></li>
              <li><Link href='/'>Support</Link></li>
            </ul>
          </div>
          <div className={styles._action} >
            <Link href='/' ><span className={`btn btn-primary`}><Icon name={`ic-envato`} className={styles._icon} />Purchase Now</span></Link>
            <button onClick={() => setIsMobileMenu(!isMobileMenu)} className={`${styles._toggle} btn btn-none`} ><MdMenuOpen /></button>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Navbar