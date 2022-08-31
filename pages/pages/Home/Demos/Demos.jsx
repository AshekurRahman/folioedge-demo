import React from 'react'
import Link from 'next/link'
import SectionTitle from '../../../common/SectionTitle/SectionTitle';
import styles from './Demo.module.css'
import image1 from './images/home_1.jpg';
import image2 from './images/home_2.jpg';
import image3 from './images/home_3.jpg';
import image4 from './images/home_4.jpg';
import image5 from './images/home_5.jpg';
import image6 from './images/home_6.jpg';

const Demos = () => {
  return (
    <div className={styles._area}>
        <div className="container">
            <div className="row justify-content-center">
                <div className="col-lg-7">
                    <SectionTitle suptitle="Demo Home Pages" title="6 Unique Demo Home Pages With Awesome Layouts" />
                </div>
            </div>
            <div className="row g-5">
                <div className="col-lg-6">
                    <Link href="http://wp.devignedge.com/folioedge/" >
                        <div className={styles._demo_item} >
                            <div className={styles._demo_image} style={{backgroundImage: `url(${image1.src})`}}></div>
                            <div className={styles._demo_title}>Homepage One</div>
                        </div>                        
                    </Link>
                </div>
                <div className="col-lg-6">                    
                    <Link href="http://wp.devignedge.com/folioedge/home-2" >
                        <div className={`${styles._demo_item} ${styles._right}`}>
                            <div className={styles._demo_image} style={{backgroundImage: `url(${image2.src})`}}></div>
                            <div className={styles._demo_title}>Homepage Two</div>
                        </div>                      
                    </Link>
                </div>
                <div className="col-lg-6">          
                    <Link href="http://wp.devignedge.com/folioedge/home-3" >
                        <div className={styles._demo_item}>
                            <div className={styles._demo_image} style={{backgroundImage: `url(${image3.src})`}}></div>
                            <div className={styles._demo_title}>Homepage Three</div>
                        </div>                   
                    </Link>
                </div>
                <div className="col-lg-6"> 
                    <Link href="http://wp.devignedge.com/folioedge/home-4" >
                        <div className={`${styles._demo_item} ${styles._right}`}>
                            <div className={styles._demo_image} style={{backgroundImage: `url(${image4.src})`}}></div>
                            <div className={styles._demo_title}>Homepage Four</div>
                        </div>                 
                    </Link>
                </div>
                <div className="col-lg-6">
                    <Link href="http://wp.devignedge.com/folioedge/home-5" >
                        <div className={styles._demo_item}>
                            <div className={styles._demo_image} style={{backgroundImage: `url(${image5.src})`}}></div>
                            <div className={styles._demo_title}>Homepage Five</div>
                        </div>             
                    </Link>
                </div>
                <div className="col-lg-6">
                    <Link href="http://wp.devignedge.com/folioedge/home-6" >
                        <div className={`${styles._demo_item} ${styles._right}`}>
                            <div className={styles._demo_image} style={{backgroundImage: `url(${image6.src})`}}></div>
                            <div className={styles._demo_title}>Homepage Six</div>
                        </div>           
                    </Link>
                </div>
            </div>
        </div>
    </div>
  )
}

export default Demos