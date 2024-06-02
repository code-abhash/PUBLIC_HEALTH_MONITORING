import React from 'react'
import {FontAwesomeIcon} from '@fortawesome/react-fontawesome'
import {faNotesMedical,faUser,faLock} from '@fortawesome/free-solid-svg-icons'
import { Link } from "react-router-dom";
import { useState } from 'react';
import img4 from './img/logo.jpg'
import './Auth.css'

const Login = () => {
  const [username, setUsername] = useState("")
  const [password, setPassword] = useState("")

  const printdata=()=>{
    
    console.log(username,password);
    alert("You are logged in!!")
  }
  return (<><center className="log">
    <div className="logo"><img src={img4} alt="logo" id="logo-m"></img></div>
    <div className="Container">
    <div className="title">Login</div>
    <div className="containr inp">
        <div className="inputBox">
          <input className="in user"type="text" placeholder="Username" name="Username" value={username}onChange={(e)=>{setUsername(e.target.value)}}></input>
          <FontAwesomeIcon icon={faUser} />
        </div>
        <div className="inputBox">
          <input className="in pass"type="password" placeholder="Password" name="Password" value={password}onChange={(e)=>{setPassword(e.target.value)}}></input>
          <FontAwesomeIcon icon={faLock} />
        </div>
        <div className="rem-for"><label for="rr-1">
      <input type="checkbox" value="1" id="rr-1" name="rr[]"/>Remember me?
   </label>
          <Link to="/" id="forgotPassword" className='pl-4 text-gray-800'>Forgot Password?</Link>
        </div>
        <button className="btn" type="button" onClick={printdata}>Login</button>
        <p className='existAccount'>Don't have an account?  <Link to='/signup' className='linkLogin text-gray-800'>Register Here!</Link></p>
    </div></div></center>
    </>
  )
}

export default Login