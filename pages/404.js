import Head from "next/head"
import BackButton from "../components/BackButton"
import styles from "../styles/Home.module.css"

export default function Custom404() {
  return (
    <div className={styles.container}>
      <Head>
        <title>404 - Page Not Found</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main className={styles.main}>
        <BackButton />
        <h1>404 - Page Not Found</h1>
      </main>
    </div>
  )
}
