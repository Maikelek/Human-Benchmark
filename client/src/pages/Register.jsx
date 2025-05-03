import React, { useState } from 'react';
import { FaLock, FaEnvelope, FaEye, FaEyeSlash, FaRegUserCircle} from 'react-icons/fa';

import Nav from './components/Nav';
import axios from 'axios';
import { Link } from 'react-router-dom';

const Register = () => {
    const [passwordVisible, setPasswordVisible] = useState(false);
    const [user, setUser] = useState({});

    const togglePasswordVisibility = () => {
        setPasswordVisible(!passwordVisible);
    };

    const handleChange = (e) => {
        setUser((prev) => ({ ...prev, [e.target.name]: e.target.value }));
      };

    const handleSubmit = (e) => {
        e.preventDefault();
        
        try {
            const response = axios.post("http://localhost:1245/auth/register", user, { withCredentials: true });

            if (response.status === 200) {
                console.log("Registration successful");
            }
        }
        catch (error) {
            console.error("Error during registration:", error);
        }
    }

    return (
        <div className="container">
            <Nav />

            <div className="sign-in">
                <h2>Register</h2>
                <form className="login-form" onSubmit={handleSubmit}>

                    <div className="input-group">
                        <label htmlFor="nickname">
                            <FaRegUserCircle size={20} className="icon-label" />
                            Nickname
                        </label>
                        <input type="nickname" name='nickname' id="nickname" onChange={handleChange} placeholder="Enter your Nickname" />
                    </div>

                    <div className="input-group">
                        <label htmlFor="email">
                            <FaEnvelope size={20} className="icon-label" />
                            Email
                        </label>
                        <input type="email" id="email" name='email' onChange={handleChange} placeholder="Enter your email" />
                    </div>

                    <div className="input-group">
                        <label htmlFor="password">
                            <FaLock size={20} className="icon-label" />
                            Password
                        </label>
                        <div className="password-wrapper">
                            <input
                                type={passwordVisible ? "text" : "password"}
                                id="password"
                                placeholder="Enter your password"
                                onChange={handleChange}
                                name='password'
                            />
                        </div>
                    </div>

                    <div className="input-group">
                        <label htmlFor="passwordRepeat">
                            <FaLock size={20} className="icon-label" />
                            Repeat Password
                        </label>
                        <div className="password-wrapper">
                            <input
                                type={passwordVisible ? "text" : "password"}
                                id="passwordRepeat"
                                placeholder="Repeat your password"
                                onChange={handleChange}
                                name='passwordRepeat'
                            />
                            <span className="eye-icon" onClick={togglePasswordVisibility}>
                                {passwordVisible ? <FaEyeSlash size={20} /> : <FaEye size={20} />}
                            </span>
                        </div>
                    </div>
                    

                    <button type="submit" className="login-button">Sign Up</button>
                </form>

                <div className="register-link">
                    <p>Already have an account? <Link to={"/login"}>Sign in</Link></p>
                </div>
                
            </div>

        </div>
    );
};

export default Register;
