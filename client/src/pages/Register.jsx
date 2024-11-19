import React, { useState } from 'react';
import { FaLock, FaEnvelope, FaEye, FaEyeSlash, FaRegUserCircle} from 'react-icons/fa';

import Nav from './components/Nav';

const Register = () => {
    const [passwordVisible, setPasswordVisible] = useState(false);

    const togglePasswordVisibility = () => {
        setPasswordVisible(!passwordVisible);
    };

    return (
        <div className="container">
            <Nav />

            <div className="sign-in">
                <h2>Register</h2>
                <form className="login-form">

                    <div className="input-group">
                        <label htmlFor="nickname">
                            <FaRegUserCircle size={20} className="icon-label" />
                            Nickname
                        </label>
                        <input type="nickname" id="nickname" placeholder="Enter your Nickname" />
                    </div>

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
                        </div>
                    </div>

                    <div className="input-group">
                        <label htmlFor="password-repeat">
                            <FaLock size={20} className="icon-label" />
                            Repeat Password
                        </label>
                        <div className="password-wrapper">
                            <input
                                type={passwordVisible ? "text" : "password"}
                                id="password-repeat"
                                placeholder="Repeat your password"
                            />
                            <span className="eye-icon" onClick={togglePasswordVisibility}>
                                {passwordVisible ? <FaEyeSlash size={20} /> : <FaEye size={20} />}
                            </span>
                        </div>
                    </div>
                    

                    <button type="submit" className="login-button">Sign Up</button>
                </form>

                <div className="register-link">
                    <p>Already have an account? <a href="/register">Sign in</a></p>
                </div>
                
            </div>

        </div>
    );
};

export default Register;
