import React,{useState} from 'react';
import { useNavigate } from 'react-router-dom';

const Signup = (props) => {
  const [credentials,setCredentials]=useState({name:"",email:"",password:"",cpassword:""});
  let navigate=useNavigate();

  const handleSubmit=async (e)=>{
    e.preventDefault();
    const {name,email,password,cpassword} = credentials
    if(password!==cpassword)
    {
      props.showAlert("Passwords do not matched","danger");
      return;
    }
    const response=await fetch("http://localhost:5000/api/auth/createuser",{
      
            method:"POST",
            headers:{
                'Content-Type':"application/json",
                
            },
            body:JSON.stringify({name,email,password})
           });
           const json=await response.json();
           console.log(json);
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
            props.showAlert("Account Created Successfully","success");
            navigate("/");
            
           }
           else
           {
           props.showAlert("Email Already Exists","danger")
           }
  }

  const onChange=(e)=>{
    setCredentials({...credentials,[e.target.name]:e.target.value})

  }
  return (
    <div>
      <h2 className='text-center'>Create an Account to use iNotebook</h2>
      <form onSubmit={handleSubmit}>
        <div className="mb-3">
        <label htmlFor="name" className="form-label">User Name</label>
        <input type="text" className="form-control" onChange={onChange} id="name" name="name" aria-describedby="emailHelp" required/>
      </div>
      <div className="mb-3">
        <label htmlFor="email" className="form-label">Email address</label>
        <input type="email" className="form-control" onChange={onChange} id="email" name="email" aria-describedby="emailHelp" required/>
      </div>
      <div className="mb-3">
        <label htmlFor="password" className="form-label">Password</label>
        <input type="password" className="form-control" name="password" onChange={onChange} id="password"  minLength={4} required/>
      </div>
       <div className="mb-3">
        <label htmlFor="cpassword" className="form-label">Confirm Password</label>
        <input type="password" className="form-control" name="cpassword" onChange={onChange} minLength={4}  required id="cpassword"/>
      </div>
      <button type="submit" className="btn btn-primary">Sign Up</button>
    </form>
    </div>
  )
}

export default Signup
