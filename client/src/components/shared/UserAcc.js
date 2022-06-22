import axios from "axios";
import { useContext, useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { AuthContext } from "../../providers/AuthProvider";

const UserAccount = () => {
  const {user} = useContext(AuthContext)
  const navigate = useNavigate()
  const [users, setUsers] = useState([])

  useEffect(() =>{
    getUsers()
  },[])
  const getUsers = async()=>{
    try{
      let res = await axios.get("/api/users")
      setUsers(res.data)
    } catch(err){
      alert('err occured')
    }
  }
  const sample = () => {
    if (users.length > 0) {
      let index = Math.floor(Math.random() * users.length);
      return users[index];
    } else {
      return null;
    }
  };

  const upVote = async (id)=>{
      let res = await axios.put(`/api/users/${id}`)
      console.log(res.data)
      removeUser(id)
  }
  const removeUser = (id)=>{
    setUsers(users.filter((c)=>  c.id !== id))
  }

  const renderUser = () => {
    let user = sample();
    if (user) {
      return (
        <div style={{border: '2px solid', width:'200px'}}>
          <img width={100} height={100} src={user.avatar} />
          <section>
            <h1>{user.name}</h1>
            <p>{user.breed}</p>
            <p>{user.registry}</p>
          </section>
          <section>
            <button onClick={()=> upVote(user.id)}>thumbs up</button>
            <button onClick={()=> removeUser(user.id)}>thumbs down</button>
            
          </section>
        </div>
      );
    }
    return <p>no more users</p>
  };

  return (
    <div>
      <h1>You are logged in</h1>
      <p>Hello {user.email}</p>
      <div>{renderUser()}</div>
      <button onClick={()=> navigate('/users') }>users</button>
    </div>
  );
};




export default UserAccount;