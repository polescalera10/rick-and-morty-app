import { useRouter } from "next/router"
import { useState } from "react"
import { useAuth } from "../context/AuthContext"

const Login = () => {
  const router = useRouter()
  const { user, login } = useAuth()
  const [data, setData] = useState({
    email: "",
    password: "",
  })

  const handleLogin = async (e) => {
    e.preventDefault()

    console.log(user)
    try {
      await login(data.email, data.password)
      router.push("/dashboard")
    } catch (err) {
      console.log(err)
    }
  }

  return (
    <div
      style={{
        width: "40%",
        margin: "auto",
      }}
    >
      <h1 className="text-center my-3 ">Login</h1>
      <form onSubmit={handleLogin}>
        <div className="mb-3" controlId="formBasicEmail">
          <p>Email address</p>
          <input
            onChange={(e) =>
              setData({
                ...data,
                email: e.target.value,
              })
            }
            value={data.email}
            required
            type="email"
            placeholder="Enter email"
          />
        </div>

        <div className="mb-3" controlId="formBasicPassword">
          <p>Password</p>
          <input
            onChange={(e) =>
              setData({
                ...data,
                password: e.target.value,
              })
            }
            value={data.password}
            required
            type="password"
            placeholder="Password"
          />
        </div>
        <button variant="primary" type="submit">
          Login
        </button>
      </form>
    </div>
  )
}

export default Login
