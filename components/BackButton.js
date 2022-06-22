import styles from "../styles/Home.module.css"
import Link from "next/link"

const BackButton = () => {
  return (
    <button className={styles.button}>
      <Link href="/list">
        <a>Back to All Characters</a>
      </Link>
    </button>
  )
}

export default BackButton
