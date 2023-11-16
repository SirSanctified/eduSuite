import { useAppDispatch } from "../../app/store"
import { logout } from "./authSlice"

const Logout = () => {
  const dispatch = useAppDispatch()

  const logoutUser = () => {
    try {
      dispatch(logout())
    } catch (error) {
      console.log(error)
    }
  }
  return (
    <div>
      <h1>Logout</h1>
      <button onClick={logoutUser}>Logout</button>
    </div>
  )
}

export default Logout