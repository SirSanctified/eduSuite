import './App.css'
import Login from './features/auth/login'
import Logout from './features/auth/logout'

function App() {

  return (
    <>
      <div className="App" style={{ display: 'flex', justifyContent: 'space-between', padding: '20px', color: 'white' }}>
        <Login />
        <Logout />
      </div>
    </>
  )
}

export default App
