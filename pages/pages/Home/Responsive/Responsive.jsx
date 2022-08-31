import React from 'react'
import Image from 'next/image'
import responsive from './images/responsive.png'
import styles from './Responsive.module.css'
import SectionTitle from '../../../common/SectionTitle/SectionTitle'

const Responsive = () => {
  return (
    <div className={styles._area}>
        <div className="container">
            <div className="row align-items-center">
                <div className="col-lg-4">
                    <SectionTitle suptitle="Responsive" title="100% All Devices Supported" subtitle="Minim mollit non deserunt ullamco est sit aliqua dolor do amet sint. Velit officia consequat duis enim velit mollit oppurtunity." className={styles._sc_title} />
                </div>
                <div className="col-lg-7 offset-lg-1 mt-5 mt-lg-0">
                  <figure className={styles._image}>
                    <Image src={responsive} alt="Elementor Page Builder"  width={`788px`} height={`530px`}  />
                  </figure>
                </div>
            </div>
        </div>
    </div>
  )
}

export default Responsive