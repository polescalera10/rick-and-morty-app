import { useState, useEffect } from "react"
import Head from "next/head"
import Link from "next/link"
import styles from "../styles/Home.module.css"

const api = "https://rickandmortyapi.com/api/character/"

export async function getServerSideProps() {
  const res = await fetch(api)
  const data = await res.json()
  return {
    props: {
      data,
    },
  }
}

export default function Home({ data }) {
  const { info, results: defaultResults = [] } = data
  const [results, updateResults] = useState(defaultResults)
  const [page, updatePage] = useState({
    ...info,
    current: api,
  })

  const { current } = page

  useEffect(() => {
    if (current === api) return

    async function request() {
      const res = await fetch(current)
      const nextData = await res.json()

      updatePage({
        current,
        ...nextData.info,
      })

      if (!nextData.info?.prev) {
        updateResults(nextData.results)
        return
      }

      updateResults((prev) => {
        return [...prev, ...nextData.results]
      })
    }

    request()
  }, [current])

  function handleLoadMore() {
    updatePage((prev) => {
      return {
        ...prev,
        current: page?.next,
      }
    })
  }

  function handleOnSubmitSearch(e) {
    e.preventDefault()

    const { currentTarget = {} } = e
    const fields = Array.from(currentTarget?.elements)
    const fieldQuery = fields.find((field) => field.name === "query")

    const value = fieldQuery.value || ""
    const endpoint = `${api}/character/?name=${value}`

    updatePage({
      current: endpoint,
    })
  }

  return (
    <div className={styles.container}>
      <Head>
        <title>Rick and Morty App</title>
        <meta name="description" content="Generated by create next app" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main className={styles.main}>
        <h1 className={styles.title}>Rick and Morty</h1>

        <form className={styles.search} onSubmit={handleOnSubmitSearch}>
          <input className={styles.input} name="query" type="search" />
          <button className={styles.button}>Search</button>
        </form>

        <ul className={styles.grid}>
          {results.map((result) => {
            const { id, name, image } = result

            return (
              <Link href={`/character/${id}`} key={id} className={styles.card}>
                <a>
                  <img src={image} alt={`${name} Thumbnail`} />
                  <h3>{name}</h3>
                </a>
              </Link>
            )
          })}
        </ul>
        <button className={styles.button} onClick={handleLoadMore}>
          Load More
        </button>
      </main>
    </div>
  )
}