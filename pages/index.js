import Head from 'next/head'
import styles from '../styles/Home.module.css'
import Nav from '../components/nav';

export default function Home() {
  return (
    <div className={styles.container}>
      <Head>
        <title>Create Next App</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Nav />
      <main className={styles.main}>
        <h1 className={styles.title}>
          Codelab Next.js 2nd Library
        </h1>

        <p className={styles.description}>
          코드랩 Next.js 2기 수업을 통해 나온 산출물입니다.
        </p>
        <div className="text-center">
          <button className="btn btn-primary btn-large">바로 시작하기</button>
        </div>
        
      </main>

      <footer className={styles.footer}>
        <a
          href="https://vercel.com?utm_source=create-next-app&utm_medium=default-template&utm_campaign=create-next-app"
          target="_blank"
          rel="noopener noreferrer"
        >
          Powered by{' '}
          <img src="/vercel.svg" alt="Vercel Logo" className={styles.logo} />
        </a>
      </footer>
    </div>
  )
}
