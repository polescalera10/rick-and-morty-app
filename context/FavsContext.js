import { createContext, useContext, useCallback, useState } from "react"
import { database } from "../config/firebase"
import { setDoc, doc } from "firebase/firestore"

const FavsContext = createContext({})

export const useFavs = () => useContext(FavsContext)

export const FavsContextProvider = ({ children }) => {
  const [favorites, setFavorites] = useState([])

  const add = useCallback(
    (userId, data) => {
      setFavorites((current) => [...current, data])
      setDoc(doc(database, "Users", userId), {
        favs: favorites,
      })
    },
    [setFavorites]
  )

  const remove = useCallback(
    (userId, data) => {
      const newArr = favorites.filter((character) => {
        return character.id !== data.id
      })
      setFavorites(newArr)
      setDoc(doc(database, "Users", userId), {
        favs: favorites,
      })
    },
    [setFavorites]
  )
  console.log(favorites)
  return (
    <FavsContext.Provider value={{ favorites, add, remove }}>
      {children}
    </FavsContext.Provider>
  )
}
