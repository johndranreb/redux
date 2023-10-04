import React from 'react';
import {useDispatch} from "@react-redux"; // is used to modify values of your states
import { login, logout } from '../features/user';

function Login() {
  const dispatch = useDispatch()

  return (
    <div><button onClick={() => {
      dispatch(login({name:"Jb", age: 0, email:"test@example.com"}))
    }}>Login</button>
    
    <button onClick={() => { dispatch(logout())}}>Logout</button>
    </div>
  )
}

export default Login