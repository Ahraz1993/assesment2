
import React, { useState } from 'react';
import axios from "axios";
import { useNavigate } from 'react-router-dom';

function Login() {
    const navigate = useNavigate();
    const signin=async(e)=>{
        e.preventDefault();
        const name= document.querySelector("#name").value
        const email = document.querySelector("#email").value;
        const password = document.querySelector("#password").value;
        console.log(name+email + password);
    
        try {
          const response = await axios({
            method: "get",
            url: "http://localhost:8080",
            params: {name, email, password },
          });
         
          if (response.data.message === 'Login successful') {
            alert(response.data.message)
            localStorage.setItem("user", email);
            navigate("/Aboutme", { state: response.data });
          } else {
            alert(response.data.message)
          }
        } catch (err) {
          console.log(err);
        }
      };
    
 
    return (
        <div className="login">
            <h2>LOGIN</h2>
            <input type="text" id="name"  placeholder="Enter Name" /> <br />
            <input type="text" id="email" placeholder="Enter Email" /> <br />
            <input type="text" id="password"  placeholder="Password" /> <br />
            <button type="submit" onClick= {signin} >  Login </button>

        </div>
    )
}

export default Login
