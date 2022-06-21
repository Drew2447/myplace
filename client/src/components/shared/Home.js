import { useContext } from "react";
import { AuthContext } from "../../providers/AuthProvider";

const Home = () => {
  const {user} = useContext(AuthContext)
  return (
      <div>
      <h1>Andrew's Myspace</h1>
      {user ? <p>Hello {user.username}</p> : <p>You are not logged in</p>}
      </div>
  )
}



export default Home;