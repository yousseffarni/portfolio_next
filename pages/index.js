import Head from 'next/head'
import Link from 'next/link'
import styles from '../styles/Home.module.css'


export default function Home(props) {

  return (
    <div className={'w-100 '+styles.container}>
      <Head>
        <title>Youssef Farni</title>
        <meta name="description" content="Created by Youssef Farni" />
        <link rel="icon" href="/favicon-32x32.ico" />
      </Head>

      <main className={styles.main}>
        <h1 className={styles.title}>
          {props.Language=='fr'?'Bonjeur ':'Welcome to'} <Link href="/" >My Web Site</Link>
        </h1>

        <p className={styles.description}>
          Choose an Option to get Started
        </p>

        <div className={styles.grid}>
          <a href="/Portfolio" className={'h-100 '+styles.card}>
            <h2>Portfolio &rarr;</h2>
            <p>Find out more information about déveloper Youssef Farni and its Latest Projects</p>
          </a>

          <a href="/Store" className={'h-100 '+styles.card}>
            <h2>Store &rarr;</h2>
            <p>Discover the Latest Projects and Applications in Our Store</p>
          </a>
        </div>
      </main>

      <footer className={styles.footer}>
        <a href="/" target="_blank" rel="noopener noreferrer">
          Developed by Youssef Farni {new Date().getFullYear()} , Using Next.JS 
        </a>
      </footer>
    </div>
  )
}
