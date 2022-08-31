import React from 'react'
import Image from 'next/image'
import Link from 'next/link'
import woocommerce from './images/woocommerce.png'
import styles from './Woocommerce.module.css'
import SectionTitle from '../../../common/SectionTitle/SectionTitle'

const Woocommerce = () => {
  return (
    <div className={styles._area}>
        <div className="container">
            <div className="row align-items-center flex-row-reverse">
                <div className="col-lg-5">
                    <SectionTitle suptitle="Get Your Online Store" title="Sell Like a Pro with WooCommerce" subtitle="Minim mollit non deserunt ullamco est sit aliqua dolor do amet sint. Velit officia consequat duis enim velit passage of Lorem Ipsum, you need to be sure there isn't anything embarrassing hidden mollit oppurtunity." className={styles._sc_title} />
                    <Link href="https://wp.devignedge.com/folioedge/shop"><span className='btn btn-primary'>View Shop Page</span></Link>
                </div>
                <div className="col-lg-7 mt-lg-0 mt-5">
                  <figure className={styles._image}>
                    <Image src={woocommerce} alt="Elementor Page Builder" width={`601px`} height={`671px`} />
                  </figure>
                </div>
            </div>
        </div>
    </div>
  )
}

export default Woocommerce