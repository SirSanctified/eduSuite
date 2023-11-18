import { useAppDispatch } from "../../app/store"
import { Button } from "../ui/button"
import { logout } from "../../features/auth/authSlice"

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
      <Button onClick={logoutUser}>Logout</Button>
    </div>
  )
}

export default Logout