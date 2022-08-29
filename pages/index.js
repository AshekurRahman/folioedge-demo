import Head from 'next/head'
import Image from 'next/image'
import styles from '../styles/Home.module.css'
import Header from './components/Header/Header'
import Navbar from './components/Navbar/Navbar'

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
      </main>
    </div>
  )
}
