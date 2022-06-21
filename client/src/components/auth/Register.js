import { useContext, useState } from "react";
import { AuthContext } from "../../providers/AuthProvider";

const Register = () => {
    const {register} = useContext(AuthContext)
  const [email, setEmail] = useState("test@test.com");
  const [username, setUserName] = useState("");
  const [password, setPassword] = useState("123456");
  const [passwordConfirmation, setPasswordConfirmation] = useState("123456");

  const handleSubmit = (e)=>{
      e.preventDefault()
      if(password.length <6){
        alert('password is to short')
        return
      }
      if(password !== passwordConfirmation  ){
          alert('passwords do not match')
          return
      }
      register({email, password})
  }
  return (
    <>
      <h1>Register</h1>
      <form onSubmit={handleSubmit}>
      <label>user name</label>
        <input
          required
          autoFocus
          value={username}
          onChange={(e) => setUserName(e.target.value)}
        />
        <br/>
        <label>email</label>
        <input
          required
          autoFocus
          value={email}
          onChange={(e) => setEmail(e.target.value)}
        />
        <br/>
        <label>password</label>
        <input
          minLength={6}
          required
          autoFocus
          value={password}
          onChange={(e) => setPassword(e.target.value)}
        />
        <br/>
        <label>password confirmation</label>
        <input
          minLength={6}
          required
          autoFocus
          value={passwordConfirmation}
          onChange={(e) => setPasswordConfirmation(e.target.value)}
        />
        <button type='submit'>register</button>
      </form>
    </>
  );
};

export default Register