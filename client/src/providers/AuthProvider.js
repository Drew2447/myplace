import axios from 'axios'
import React, { useState } from 'react'
import { useNavigate } from 'react-router-dom'

export const AuthContext = React.createContext()

const AuthProvider = ({children})=>{   
    const [user, setUser] = useState(null)
    const navigate = useNavigate()
    const login = async (user) => {
       try{
        let res = await axios.post('/api/auth/sign_in', user)

        setUser(res.data.data)
        navigate('/')
      }catch(err){
          alert('signin did not work')
          console.log(err)
      }
    }
  
    const logout = async ()=>{
          try{
            await axios.delete('/api/auth/sign_out')
            setUser(null)
            navigate('/login')
          }catch(err){
              setUser(null)
              console.log(err)
          }
    }
    const register = async (user)=>{
         try{
           let res = await axios.post('/api/auth', user)
           console.log(res)
           setUser(res.data.data)
           navigate('/')
         }catch(err){
             alert('register did not work')
             console.log(err)
         }
      
   
   }
    return (
        <AuthContext.Provider value={{user, login, logout, register, setUser}}>
            {children}
        </AuthContext.Provider>
    )
}

export default AuthProvider