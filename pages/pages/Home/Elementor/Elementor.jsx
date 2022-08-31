import React from 'react'
import Image from 'next/image'
import eleimage from './images/ele-image.png'
import styles from './Elementor.module.css'
import SectionTitle from '../../../common/SectionTitle/SectionTitle'

const Elementor = () => {
  return (
    <div className={styles._area}>
        <div className="container">
            <div className="row align-items-center flex-row-reverse">
                <div className="col-lg-4 offset-lg-1">
                    <SectionTitle suptitle="Page Builder" title="Elementor Page Builder" subtitle="We used #1 free WordPress website builder(Drag & Drop) - Elementor as page builder. This page builder is Simple. Powerful. Flexible. Experience the power of 100% visual design and build websites that load faster, and speed up the process of building them." className={styles._sc_title} />
                </div>
                <div className="col-lg-7 mt-5 mt-lg-0">
                  <figure className={styles._image}>
                    <Image src={eleimage} alt="Elementor Page Builder"  width={`957px`} height={`696px`}  />
                  </figure>
                </div>
            </div>
        </div>
    </div>
  )
}

export default Elementor