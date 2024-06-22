import React, { useEffect, useState } from 'react';
import { Link, Navigate, useNavigate } from 'react-router-dom';
import './Login.css'
import DbService from '../shared/service/DataBaseService';
 const LoginApp = () => {

const [user,setuser]=useState({
    userName:"",
    userPassword:"",
})

const [users,setusers]=useState()
const [admins,setAdmins]=useState()

useEffect(()=>{

DbService.get("users").then((res)=>{
  setusers(res.data)
})
DbService.get("admins").then((res)=>{
  setAdmins(res.data)
})

},[])


const navigate = useNavigate()

const inputChangeHandler=(event)=>
    {
        const {name,value}=event.target;
        setuser({...user,[name]:value})
    }
const checkData=(event)=>{
    event.preventDefault();
    if(user.userName.trim()==="")
        {
            window.alert("Username is Required")
            return false
        }
    if(!user.userName.trim().match('^[a-zA-Z0-9]{3,20}$'))
    {
        window.alert("User Name must contain only character min-3 and max-20");
        return false;
    }
      
    if(user.userPassword.trim()==="")
        {
            window.alert("Password is Required")
            return false
        }
        if(!user.userPassword.trim().match('^(?=.*?[A-Z])(?=.*?[a-z])(?=.*?[0-9])(?=.*?[#?!@$%^&*-]).{8,}$'))
            {
                window.alert("Password must contain Minimum eight characters, at least one uppercase letter, one lowercase letter, one number and one special character");
                return false;
            }    
        // window.alert(JSON.stringify(user)); 
        
         if(users.find((u)=>u.name===user.userName && u.password === user.userPassword)){
          navigate("/userdashboard")
         }
         else if(admins.find((admin)=>admin.name === user.userName && admin.password === user.userPassword))
          {
            navigate("/admindashboard")
          }
          else{
            window.alert("new user ? sign in")
            navigate("/signup")
          }
       
}  

  return (<div className='Login_container'>

    <h1 className='Title'>Login</h1>
    <form onSubmit={checkData}>
      <label >
        Username:
        <input
          type="text"
          name='userName'
          onChange={inputChangeHandler}
          value={user.userName}
        />
      </label >
      <br />
      <label>
        Password:
        <input
          type="password"
          name='userPassword'
          onChange={inputChangeHandler}
          value={user.userPassword}
        />
      </label>
      <br />
      <button className='login btn btn-primary' type="submit">Login</button>
      <button className=' signup btn btn-primary' type="submit">
        <Link to="/signup" style={{
                 textDecoration: 'none',
                 color: 'inherit',
                 '&:hover': {
                   textDecoration: 'none'}
                }}>
        SignUp </Link></button>
      {/* <Link to="productdashboard" className='btn btn-primary btn-sm'>SignUp</Link> */}
    </form>
</div> 
  ) 
};

export default LoginApp;
