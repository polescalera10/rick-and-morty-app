import { useState } from "react"
import Head from "next/head"
import Link from "next/link"
import styles from "../../styles/Home.module.css"

const api = "https://rickandmortyapi.com/api/character/"

export async function getServerSideProps({ query }) {
  const { id } = query
  const res = await fetch(`${api}${id}`)
  const data = await res.json()
  return {
    props: {
      data,
    },
  }
}

export default function Character({ data }) {
  const [isFav, setIsFav] = useState(false)
  const { name, image, gender, location, origin, species, status } = data

  return (
    <div className={styles.container}>
      <Head>
        <title>{name}</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main className={styles.main}>
        <button className={styles.button}>
          <Link href="/">
            <a>Back to All Characters</a>
          </Link>
        </button>

        <h1>{name}</h1>
        <div>
          <div>
            <img src={image} alt={name} />
          </div>
          {isFav ? (
            <button onClick={() => setIsFav(!isFav)} className={styles.button}>
              Remove from favs
            </button>
          ) : (
            <button onClick={() => setIsFav(!isFav)} className={styles.button}>
              Add to favs
            </button>
          )}

          <div>
            <h2>Character Details</h2>
            <ul>
              <li>
                <strong>Name:</strong> {name}
              </li>
              <li>
                <strong>Status:</strong> {status}
              </li>
              <li>
                <strong>Gender:</strong> {gender}
              </li>
              <li>
                <strong>Species:</strong> {species}
              </li>
              <li>
                <strong>Location:</strong> {location?.name}
              </li>
              <li>
                <strong>Originally From:</strong> {origin?.name}
              </li>
            </ul>
          </div>
        </div>
      </main>
    </div>
  )
}
