import React from 'react'
import Image from 'next/image'
import eleimage from './images/ele-image.png'
import styles from './Responsive.module.css'
import SectionTitle from '../../../common/SectionTitle/SectionTitle'

const Responsive = () => {
  return (
    <div className={styles._area}>
        <div className="container">
            <div className="row align-items-center flex-row-reverse">
                <div className="col-lg-4">
                    <SectionTitle suptitle="Page Builder" title="Elementor Page Builder" subtitle="We used #1 free WordPress website builder(Drag & Drop) - Elementor as page builder. This page builder is Simple. Powerful. Flexible. Experience the power of 100% visual design and build websites that load faster, and speed up the process of building them." className={styles._sc_title} />
                </div>
                <div className="col-lg-8">
                  <Image src={eleimage} alt="Elementor Page Builder" layout='responsive' />
                </div>
            </div>
        </div>
    </div>
  )
}

export default Responsive