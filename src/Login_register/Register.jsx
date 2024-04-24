import React, { useState } from "react";
import Navbar from "../Navbar/Navbar";
import "./Register.css"; 
import { FaUser } from "react-icons/fa";
import { FaLock } from "react-icons/fa";
import { FaEnvelope } from "react-icons/fa";
import { FaKey } from "react-icons/fa";
import { Link } from "react-router-dom";

const Register = () => {

    const[formData, setFormData] = useState({
        username: "",
        userid:"",
        email: "",
        password: "",
        confirmpassword:"",
    })

    const[errors, setErrors] = useState({})



    const handleChange =(e) =>{
        const {name,value}=e.target;
        setFormData({...formData , [name] : value
        });
    };

    const handleSubmit = (e) =>{
        e.preventDefault()
        const validationErrors ={}
            if(!formData.username.trim()){
                validationErrors.username ="Username is required"
            }

            if(!formData.userid.trim()){
                validationErrors.userid ="UserID is required"
            }

            if(!formData.email.trim()){
              validationErrors.email="Email is required"
              } else if(!/\S+@\S+\.+\S+/.test(formData.email)){
              validationErrors.email="Email is not valid"
            }

            if(!formData.password.trim()){
             validationErrors.password="Password is required"
             } else if(formData.password.length < 6){
             validationErrors.password="Password should be at least 6 characters"
            }

            if(formData.confirmpassword !== formData.password){
             validationErrors.confirmpassword="Password does not match"
            }
    
            setErrors(validationErrors)

            if(Object.keys(validationErrors).length === 0){
             alert("Form Submitted successfully")
             }
            
        } 
    return(
        <>
        <Navbar/>
        <div className="wrapper">
            <form action="" onSubmit={handleSubmit}>
            <h1>Register</h1>
            <div className="input-box">
                <input type="text" 
                name="username" 
                placeholder="Username"
                autoComplete="off"
                onChange={handleChange}
                />
                {errors.username && <span>{errors.username}</span>}
                <FaUser className="icon"/>
            </div>
            <div className="input-box">
                <input type="text" 
                name="userid"
                placeholder="UserId" 
                autoComplete="off"
                onChange={handleChange}
                />
                {errors.userid && <span>{errors.userid}</span>}
                <FaKey className="icon"/>
            </div>
            <div className="input-box">
                <input type="email" 
                name="email" 
                placeholder="email@gmail.com"
                autoComplete="off"
                onChange={handleChange}
                />
                {errors.email && <span>{errors.email}</span>}
                <FaEnvelope className="icon"/>
            </div>
            <div className="input-box">
                <input type="text" 
                name="password"
                placeholder="Password"
                autoComplete="off"
                onChange={handleChange}
                />
                {errors.password && <span>{errors.password}</span>}
                <FaLock className="icon"/>
            </div>
            <div className="input-box">
                <input type="password" 
                name="confirmpassword" 
                placeholder="Confirm Password"
                autoComplete="off"
                onChange={handleChange}
                />
                {errors.confirmpassword && <span>{errors.confirmpassword}</span>}
                <FaLock className="icon"/>
            </div>
            <button className="bRegister"type="submit">Register</button>

            <div className="Login-link">
                <p> Already have an account? <Link to="/Login">Login</Link></p>
            </div>

            </form>
            
        </div>
        </>
    );
};

export default Register;