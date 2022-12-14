import {React, useState, useEffect} from 'react'
import Link from 'next/link';
import Image from 'next/image'
import { MdOutlineBolt } from 'react-icons/md';
import styles from './Header.module.css'
import image1 from './Images/screen-1.png'
import image2 from './Images/screen-2.png'
import image3 from './Images/screen-3.png'
import image4 from './Images/screen-4.png'
import image5 from './Images/screen-5.png'
import image6 from './Images/screen-6.png'
import image7 from './Images/screen-7.png'

const Header = () => {
  const [offsetY, setOffsetY] = useState(0);
  const handleScroll = () => setOffsetY(window.pageYOffset);

  useEffect( () => {
    window.addEventListener('scroll', handleScroll);

    return () => window.addEventListener('scroll', handleScroll);
  }, [] );

  return (
    <div className={styles._main_area}>
        <div className="container">
            <div className="row justify-content-center text-center">
                <div className="col-xl-8 col-lg-8 col-md-10">
                    <h2 className={styles._title}>Folioedge - Personal Portfolio WordPress Theme</h2>
                    <p className={styles._sub_title}>Discover the theme that gives you the freedom to create, design, manage and develop your business. Over 100+ interface blocks.</p>
                    <Link href="/"><span className="btn btn-outline-primary" >Explore Demos <MdOutlineBolt /> </span></Link>
                </div>
            </div>
        </div>
        <div className={styles._images}>
          <div className={`${styles._imagecon} container`}>            
            <div className={styles._image1} style={{transform: `translate(-${offsetY * 0.2}px, -${offsetY * 0.2}px) rotate(-${offsetY * 0.04}deg)`}} >
              <Image src={image1} width={`580px`} height={`374px`} />
            </div>
            <div className={styles._image2} style={{transform: `translate(-${offsetY * 0.2}px, -${offsetY * 0.2}px) rotate(-${offsetY * 0.04}deg)`}} >
              <Image src={image2} width={`580px`} height={`374px`} />
            </div>
            <div className={styles._image3} style={{transform: `translate(-${offsetY * 0.2}px, -${offsetY * 0.2}px) rotate(-${offsetY * 0.04}deg)`}} >
              <Image src={image3} width={`580px`} height={`374px`} />
            </div>
            <div className={styles._image4} style={{transform: `translate(${offsetY * 0.2}px, -${offsetY * 0.2}px) rotate(${offsetY * 0.04}deg)`}} >
              <Image src={image4} width={`580px`} height={`374px`} />
            </div>
            <div className={styles._image5} style={{transform: `translate(${offsetY * 0.2}px, -${offsetY * 0.2}px) rotate(${offsetY * 0.04}deg)`}} >
              <Image src={image5} width={`580px`} height={`374px`} />
            </div>
            <div className={styles._image6} style={{transform: `translate(${offsetY * 0.2}px, -${offsetY * 0.2}px) rotate(${offsetY * 0.04}deg)`}} >
              <Image src={image6} width={`580px`} height={`374px`} />
            </div>
            <div className={styles._image7} >
              <div style={{transform: `translateY(-${offsetY * 0.1}px)`}} >
                <Image src={image7} width={`831px`} height={`471px`} />
              </div>
            </div>
          </div>
        </div>
    </div>
  )
}

export default Header