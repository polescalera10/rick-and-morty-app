import "../styles/globals.css"
import Navbar from "../components/Navbar"
import { AuthContextProvider } from "../context/AuthContext"
import { useRouter } from "next/router"
import ProtectedRoute from "../components/ProtectedRoute"
import { FavsContextProvider } from "../context/FavsContext"

const noAuthRequired = ["/", "/login", "/signup"]
function MyApp({ Component, pageProps }) {
  const router = useRouter()
  return (
    <AuthContextProvider>
      <FavsContextProvider>
        <Navbar />
        {noAuthRequired.includes(router.pathname) ? (
          <Component {...pageProps} />
        ) : (
          <ProtectedRoute>
            <Component {...pageProps} />
          </ProtectedRoute>
        )}
      </FavsContextProvider>
    </AuthContextProvider>
  )
}

export default MyApp
