import React, {useState} from "react";
import Navbar from "../Navbar/Navbar";
import "./Login.css"; 
import { FaKey } from "react-icons/fa";
import { FaLock } from "react-icons/fa";
import { Link } from "react-router-dom";

const Login = () => {

    const[formData, setFormData] = useState({
        userid: "",
        password: "",
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
            if(!formData.userid.trim()){
                validationErrors.userid ="UserID is required"
            }

            if(!formData.password.trim()){
             validationErrors.password="Password is required"
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
            <h1>Login</h1>
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
                <input type="text" 
                name="password"
                placeholder="Password"
                autoComplete="off"
                onChange={handleChange}
                />
                {errors.password && <span>{errors.password}</span>}
                <FaLock className="icon"/>
            </div>

            <div className="remember-forget">
             <ul>
                <li>
                 <span class="remember-me">
                 <label><input type="checkbox" /> Remember me </label>
                 </span>
                </li>
                <li>
                 <Link to="/#">Forgot password?</Link>
                </li>
             </ul>
            </div>

            <button className="bLogin"type="submit">Login</button>

            <div className="register-link">
                <p> Don't have an account? <Link to="/Register">Register</Link></p>
            </div>

            </form>
            
        </div>
        </>
    );
};

export default Login;