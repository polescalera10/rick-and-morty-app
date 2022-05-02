import { useState } from "react"
import Head from "next/head"
import Link from "next/link"
import styles from "../../styles/Home.module.css"
import { useAuth } from "../../context/AuthContext"
import { useFavs } from "../../context/FavsContext"

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

const Character = ({ data }) => {
  const { add, remove, favorites } = useFavs()
  const [isFav, setIsFav] = useState(
    favorites.some((char) => char.id === data.id)
  )
  const { name, image, gender, location, origin, species, status, id } = data
  const { user } = useAuth()

  const addFavs = async () => {
    setIsFav(!isFav)
    add(user.uid, data)
  }

  const removeFavs = () => {
    setIsFav(!isFav)
    remove(user.uid, data)
  }

  return (
    <div className={styles.container}>
      <Head>
        <title>{name}</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main className={styles.main}>
        <h1>{name}</h1>
        <div>
          <div>
            <img src={image} alt={name} />
          </div>
          {isFav ? (
            <button onClick={() => removeFavs(id)} className={styles.button}>
              Remove from favs
            </button>
          ) : (
            <button onClick={() => addFavs(id)} className={styles.button}>
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
          <button className={styles.button}>
            <Link href="/list">
              <a>Back to All Characters</a>
            </Link>
          </button>
        </div>
      </main>
    </div>
  )
}

export default Character
