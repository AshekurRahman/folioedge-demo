import Head from 'next/head'
import Image from 'next/image'
import styles from '../styles/Home.module.css'
import Demos from './pages/Home/Demos/Demos'
import Header from './pages/Home/Header/Header'
import InnterPages from './pages/Home/InnterPages/InnterPages'
import Navbar from './pages/Home/Navbar/Navbar'
import Responsive from './pages/Home/Responsive/Responsive'

export default function Home() {
  return (
    <div className={styles._wrapper}>
      <Head>
        <title>Folioedge - Demo Panel</title>
        <meta name="description" content="Folioedge is a personal portfolio website wordpress theme" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main className={styles.main}>
        <Navbar />
        <Header />
        <Demos />
        <InnterPages />
        <Responsive />
      </main>
    </div>
  )
}
