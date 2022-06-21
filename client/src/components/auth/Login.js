import { useContext, useState } from "react";
import { AuthContext } from "../../providers/AuthProvider";

const Login = () => {
  const {login} = useContext(AuthContext)
  const [username, setUserName] = useState("");
  const [password, setPassword] = useState("");

  const handleSubmit = (e)=>{
      e.preventDefault()
      login({username, password})
  }
  return (
    <>
      <h1>Login</h1>
      <form onSubmit={handleSubmit}>
        <label>user name</label>
        <input
          required
          autoFocus
          value={username}
          onChange={(e) => setUserName(e.target.value)}
        />
        <label>password</label>
        <input
          required
          autoFocus
          value={password}
          onChange={(e) => setPassword(e.target.value)}
        />
        <button type='submit'>login</button>
      </form>
    </>
  );
};

export default Login