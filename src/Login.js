import React from 'react';
import { useState, useEffect } from 'react';

  const Login = (props) => {

   
        const {
            email,
            password,
            hasAccount,
            setEmail,
            setPassword,
            setHasAccount,
        handleLogin,
        handleSignup,
        emailError,
        passwordError
        } = props;

    
        return(
            <section className="login">
                <div className="loginContainer">
                    <label>Username</label>
                    <input type="text" 
                        autoFocus 
                        required 
                        value={email}
                        onChange={(e) => setEmail(e.target.value)} 
                    />
                    <p className="errorMsg">{emailError}</p>
                    <label>Password</label>
                    <input type="password" 
                        autoFocus 
                        required 
                        value={password} 
                        onChange={(e) => setPassword(e.target.value)} 
                    />
                    <p className="errorMsg">{passwordError}</p>
                    <div className="btnContainer">
                        {hasAccount ? (
                            <>
                            <button onClick={handleLogin}>Sign In</button>
                            <p>Don't have an account? <span onClick={() => setHasAccount(!hasAccount)}>Sign UP</span></p>
                            </>
                        ) : (
                            <>
                            <button onClick={handleSignup}>Sign Up</button>
                            <p>Already Have an account? <span onClick={() => setHasAccount(!hasAccount)}>Sign In</span></p>
                            </>
                        )}
                    </div>
                </div>
            </section>
        )
    }
    
    export default Login;