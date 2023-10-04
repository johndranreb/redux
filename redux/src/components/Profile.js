import React from 'react';
import {useSelector} from "react-redux"; //hook we're going to be used to grab the values of our states everytime we need to use it


function Profile() {
  const user = useSelector((staet) => state.user.value);
  const themeColor = useSelector((staet) => state.theme.value);


  return (
    <div style={{color: themeColor}}>
      <h1>Profile page</h1>
      <p>Name: {user.name}</p>
      <p>Age: {user.age}</p>
      <p>Email: {user.email}</p>  
    </div>
  )
}

export default Profile;