import React from 'react'
import SectionTitle from '../../../common/SectionTitle/SectionTitle';
import styles from './Features.module.css'
import Icon from '../../../common/Icon/Icon'

const Features = () => {
  return (
    <div className={styles._area}>
        <div className="container">
            <div className="row justify-content-center">
                <div className="col-lg-7">
                    <SectionTitle suptitle="Core Features" title="Constantly Update With New Features." />
                </div>
            </div>
            <div className={styles.gridrow}>
              <div className="row g-0">
                <div className="col-xl-3 col-lg- 4 col-sm-6">
                  <div className={styles._featurebox}>
                    <div className={styles._boxicon}>
                      <Icon name={`oneclickinstall`} className={styles._icon} width="23px" height="32px" />
                    </div>
                    <p className={styles._boxtitle}>One Click Install</p>
                  </div>
                </div>
                <div className="col-xl-3 col-lg- 4 col-sm-6">
                  <div className={styles._featurebox}>
                    <div className={styles._boxicon}>
                      <Icon name={`woocommerce`} className={styles._icon} width="38px" height="23px" />
                    </div>
                    <p className={styles._boxtitle}>WooCommerce</p>
                  </div>
                </div>
                <div className="col-xl-3 col-lg- 4 col-sm-6">
                  <div className={styles._featurebox}>
                    <div className={styles._boxicon}>
                      <Icon name={`googlefonts`} className={styles._icon} width="38px" height="38px" />
                    </div>
                    <p className={styles._boxtitle}>Free Google Fonts</p>
                  </div>
                </div>
                <div className="col-xl-3 col-lg- 4 col-sm-6">
                  <div className={styles._featurebox}>
                    <div className={styles._boxicon}>
                      <Icon name={`mailchimp`} className={styles._icon} width="30px" height="32px" />
                    </div>
                    <p className={styles._boxtitle}>Mailchimp</p>
                  </div>
                </div>
                <div className="col-xl-3 col-lg- 4 col-sm-6">
                  <div className={styles._featurebox}>
                    <div className={styles._boxicon}>
                      <Icon name={`animationeffect`} className={styles._icon} width="32px" height="32px" />
                    </div>
                    <p className={styles._boxtitle}>Animation Effect</p>
                  </div>
                </div>
                <div className="col-xl-3 col-lg- 4 col-sm-6">
                  <div className={styles._featurebox}>
                    <div className={styles._boxicon}>
                      <Icon name={`solidiconpacks`} className={styles._icon} width="34px" height="28px" />
                    </div>
                    <p className={styles._boxtitle}>Solid Icon Packs</p>
                  </div>
                </div>
                <div className="col-xl-3 col-lg- 4 col-sm-6">
                  <div className={styles._featurebox}>
                    <div className={styles._boxicon}>
                      <Icon name={`elementor`} className={styles._icon} width="28px" height="28px" />
                    </div>
                    <p className={styles._boxtitle}>Elementor Builder</p>
                  </div>
                </div>
                <div className="col-xl-3 col-lg- 4 col-sm-6">
                  <div className={styles._featurebox}>
                    <div className={styles._boxicon}>
                      <Icon name={`contactform7`} className={styles._icon} width="34px" height="32px" />
                    </div>
                    <p className={styles._boxtitle}>Contact Form 7</p>
                  </div>
                </div>
                <div className="col-xl-3 col-lg- 4 col-sm-6">
                  <div className={styles._featurebox}>
                    <div className={styles._boxicon}>
                      <Icon name={`developerfriendly`} className={styles._icon} width="32px" height="32px" />
                    </div>
                    <p className={styles._boxtitle}>Developer Friendly</p>
                  </div>
                </div>
                <div className="col-xl-3 col-lg- 4 col-sm-6">
                  <div className={styles._featurebox}>
                    <div className={styles._boxicon}>
                      <Icon name={`smoothtransition`} className={styles._icon} width="32px" height="32px" />
                    </div>
                    <p className={styles._boxtitle}>Smooth Transition</p>
                  </div>
                </div>
                <div className="col-xl-3 col-lg- 4 col-sm-6">
                  <div className={styles._featurebox}>
                    <div className={styles._boxicon}>
                      <Icon name={`paralaxeffect`} className={styles._icon} width="34px" height="32px" />
                    </div>
                    <p className={styles._boxtitle}>Paralax Effect</p>
                  </div>
                </div>
                <div className="col-xl-3 col-lg- 4 col-sm-6">
                  <div className={styles._featurebox}>
                    <div className={styles._boxicon}>
                      <Icon name={`browsercompability`} className={styles._icon} width="34px" height="34px" />
                    </div>
                    <p className={styles._boxtitle}>Browser Compability</p>
                  </div>
                </div>
                <div className="col-xl-3 col-lg- 4 col-sm-6">
                  <div className={styles._featurebox}>
                    <div className={styles._boxicon}>
                      <Icon name={`swiperslider`} className={styles._icon} width="35px" height="34px" />
                    </div>
                    <p className={styles._boxtitle}>Swiper Slider</p>
                  </div>
                </div>
                <div className="col-xl-3 col-lg- 4 col-sm-6">
                  <div className={styles._featurebox}>
                    <div className={styles._boxicon}>
                      <Icon name={`moveeffect`} className={styles._icon} width="32px" height="34px" />
                    </div>
                    <p className={styles._boxtitle}>Mouse Move Effect</p>
                  </div>
                </div>
                <div className="col-xl-3 col-lg- 4 col-sm-6">
                  <div className={styles._featurebox}>
                    <div className={styles._boxicon}>
                      <Icon name={`speedperformance`} className={styles._icon} width="32px" height="34px" />
                    </div>
                    <p className={styles._boxtitle}>Speed Performance</p>
                  </div>
                </div>
                <div className="col-xl-3 col-lg- 4 col-sm-6">
                  <div className={styles._featurebox}>
                    <div className={styles._boxicon}>
                      <Icon name={`customersupport`} className={styles._icon} width="34px" height="34px" />
                    </div>
                    <p className={styles._boxtitle}>Customer Support</p>
                  </div>
                </div>
              </div>
            </div>
        </div>
    </div>
  )
}

export default Features