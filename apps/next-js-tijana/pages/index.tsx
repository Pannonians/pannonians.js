import type { NextPage } from 'next'
import Head from 'next/head'
import Image from 'next/image'
import styles from '../styles/Home.module.css'

const Home: NextPage = () => {
  return (
    <div className={styles.container}>
      <Head>
        <title>Todo app</title>
      </Head>

      <main className={styles.main}>
        <h1 className={styles.title}>
        Todo app
        </h1>

        <div>
          
        </div>

        
      </main>

      <footer className={styles.footer}>
        <a
          href="https://vercel.com?utm_source=create-next-app&utm_medium=default-template&utm_campaign=create-next-app"
          target="_blank"
          rel="noopener noreferrer"
        >
          Powered by{' '}
          <span className={styles.logo}>
            <Image src="/Skoljka_color.png" alt="Pannonians" width={50} height={50} />
          </span>
        </a>
      </footer>
    </div>
  )
}

export default Home
