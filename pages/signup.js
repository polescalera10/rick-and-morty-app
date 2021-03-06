import { useState } from "react"
import Head from "next/head"
import { useAuth } from "../context/AuthContext"
import styles from "../styles/Home.module.css"
import { useRouter } from "next/router"

const Signup = () => {
  const router = useRouter()
  const { signup } = useAuth()
  const [data, setData] = useState({
    email: "",
    password: "",
  })

  const handleSignup = async (e) => {
    e.preventDefault()

    try {
      await signup(data.email, data.password)
      router.push("/list")
    } catch (err) {
      console.log(err)
    }
  }

  return (
    <div className={styles.container}>
      <Head>
        <title>Rick and Morty App</title>
        <meta name="description" content="Generated by create next app" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <main className={styles.main}>
        <h1>Sign Up</h1>
        <form onSubmit={handleSignup}>
          <div>
            <p>Email</p>
            <input
              className={styles.input}
              type="email"
              placeholder="Enter email"
              required
              onChange={(e) =>
                setData({
                  ...data,
                  email: e.target.value,
                })
              }
              value={data.email}
            />
          </div>

          <div>
            <p>Password</p>
            <input
              className={styles.input}
              type="password"
              placeholder="Password"
              required
              onChange={(e) =>
                setData({
                  ...data,
                  password: e.target.value,
                })
              }
              value={data.password}
            />
          </div>

          <button className={styles.button} type="submit">
            Signup
          </button>
        </form>
      </main>
    </div>
  )
}

export default Signup
