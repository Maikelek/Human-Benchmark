import React, { useState } from 'react';
import { FaLock, FaEnvelope, FaEye, FaEyeSlash } from 'react-icons/fa';

import Nav from './components/Nav';

const Login = () => {
    const [passwordVisible, setPasswordVisible] = useState(false);

    const togglePasswordVisibility = () => {
        setPasswordVisible(!passwordVisible);
    };

    return (
        <div className="container">
            <Nav />

            <div className="sign-in">
                <h2>Login</h2>
                <form className="login-form">
                    
                    <div className="input-group">
                        <label htmlFor="email">
                            <FaEnvelope size={20} className="icon-label" />
                            Email
                        </label>
                        <input type="email" id="email" placeholder="Enter your email" />
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
                            />
                            <span className="eye-icon" onClick={togglePasswordVisibility}>
                                {passwordVisible ? <FaEyeSlash size={20} /> : <FaEye size={20} />}
                            </span>
                        </div>
                    </div>

                    <button type="submit" className="login-button">Sign In</button>
                </form>

                <div className="register-link">
                    <p>Don't have an account? <a href="/register">Sign up</a></p>
                </div>

            </div>

        </div>
    );
};

export default Login;
