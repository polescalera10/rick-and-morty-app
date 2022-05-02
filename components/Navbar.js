import Link from "next/link"
import { useAuth } from "../context/AuthContext"
import { useRouter } from "next/router"

const Navbar = () => {
  const { user, logout } = useAuth()
  const router = useRouter()

  return (
    <div
      style={{
        position: "absolute",
        width: "98vw",
      }}
    >
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
                  router.push("/")
                }}
              >
                Log Out
              </div>
            </div>
          ) : (
            <div style={{ display: "flex", gap: "1rem" }}>
              <Link href="/signup">
                <div>Sign Up</div>
              </Link>
              <Link href="/login">
                <div>Log In</div>
              </Link>
            </div>
          )}
        </div>
      </div>
    </div>
  )
}

export default Navbar
