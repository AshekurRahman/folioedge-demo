import React from 'react'
import Image from 'next/image'
import { MdOutlineBolt } from 'react-icons/md';
import styles from './Header.module.css'
import image1 from './Images/screen-1.png'
import image2 from './Images/screen-2.png'
import image3 from './Images/screen-3.png'
import image4 from './Images/screen-4.png'
import image5 from './Images/screen-5.png'
import image6 from './Images/screen-6.png'

const Header = () => {
  return (
    <div className={styles._main_area}>
        <div className="container">
            <div className="row justify-content-center text-center">
                <div className="col-lg-7">
                    <h2 className={styles._title}>Folioedge - Personal Portfolio WordPress Theme</h2>
                    <p className={styles._sub_title}>Discover the theme that gives you the freedom to create, design, manage and develop your business. Over 100+ interface blocks.</p>
                    <a href="/" className="btn btn-outline-primary">Explore Demos <MdOutlineBolt /></a>
                </div>
            </div>
        </div>
        <div className={styles._images}>
          <div className={styles._image1}>
            <Image src={image1} width={`831px`} height={`471px`} />
          </div>
          <div className={styles._image2}>
            <Image src={image2} width={`580px`} height={`374px`} />
          </div>
          <div className={styles._image3}>
            <Image src={image3} width={`580px`} height={`374px`} />
          </div>
          <div className={styles._image4}>
            <Image src={image4} width={`580px`} height={`374px`} />
          </div>
          <div className={styles._image5}>
            <Image src={image5} width={`580px`} height={`374px`} />
          </div>
          <div className={styles._image6}>
            <Image src={image6} width={`580px`} height={`374px`} />
          </div>
        </div>
    </div>
  )
}

export default Header