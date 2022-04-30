import Link from "next/link"
import { useAuth } from "../context/AuthContext"
import { useRouter } from "next/router"

const Navbar = () => {
  const { user, logout } = useAuth()
  const router = useRouter()

  return (
    <div
      style={{
        display: "flex",
        justifyContent: "space-between",
        padding: "1rem",
        alignItems: "center",
      }}
    >
      <Link href="/">
        <p>Rick and Morty App</p>
      </Link>
      <div>
        {user ? (
          <div style={{ display: "flex", gap: "1rem" }}>
            <Link href={"/favs"}>My favs</Link>
            <div
              onClick={() => {
                logout()
                router.push("/login")
              }}
            >
              Logout
            </div>
          </div>
        ) : (
          <div style={{ display: "flex", gap: "1rem" }}>
            <Link href="/signup">
              <div>Signup</div>
            </Link>
            <Link href="/login">
              <div>Login</div>
            </Link>
          </div>
        )}
      </div>
    </div>
  )
}

export default Navbar
