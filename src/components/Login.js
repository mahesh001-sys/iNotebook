import React, { useState } from 'react'
import {  useNavigate } from 'react-router-dom';

const Login = (props) => {
  const [credentials,setCredentials]=useState({email:"",password:""});
  let navigate=useNavigate();
  const handleSubmit=async (e)=>{
    e.preventDefault();
    // fetch("http://localhost:5000/api/auth/login")
    const response=await fetch("http://localhost:5000/api/auth/login",{
            method:"POST",
            headers:{
                'Content-Type':"application/json",
                
            },
            body:JSON.stringify({email:credentials.email,password:credentials.password})
           });
           const json=await response.json();
          //  console.log(json);
           if(json.success)
           {
            //Save the authtoken and redirect
            localStorage.setItem('token',json.authtoken);
             // Now fetch user data
              const userResponse = await fetch("http://localhost:5000/api/auth/getuser", {
                method: "POST",
                headers: {
                  "Content-Type": "application/json",
                  "auth-token": json.authtoken,
                },
              });

              const userData = await userResponse.json();
              localStorage.setItem("username", userData.name); // Save name

              props.showAlert(`Logged in Successfully,Welcome ${userData.name}`, "success");
              navigate("/");
            
           }
           else
           {
            props.showAlert("Invalid Credentials","danger");
           }
  }
  const onChange=(e)=>{
    setCredentials({...credentials,[e.target.name]:e.target.value})

  }
  
  return (
    <div>
      <h2 className='text-center'>LOGIN to continue with iNotebook</h2>
      <form onSubmit={handleSubmit}>
      <div className="mb-3">
        <label htmlFor="email" className="form-label">Email address</label>
        <input type="email" className="form-control" value={credentials.email} onChange={onChange} id="email" name="email" aria-describedby="emailHelp" required/>
      </div>
      <div className="mb-3">
        <label htmlFor="password" className="form-label">Password</label>
        <input type="password" className="form-control" onChange={onChange} value={credentials.password} id="password" name="password" required/>
      </div>
      <button type="submit" className="btn btn-primary" >Login</button>
      <div className='my-3'>
        Don't have an account? <a href="/signup">SignUp</a>

      </div>
    </form>
    </div>
  )
}

export default Login

