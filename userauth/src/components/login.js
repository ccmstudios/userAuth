import React from 'react'

const Login = (props) =>{
    const {email, 
        password, 
        setPassword, 
        setEmail, 
        hasAccount, 
        setHasAccount, 
        handleLogin, 
        handleSignup, 
        passwordError, 
        emailError} = props
    return(
        <section className='login'>
            <div className='loginContainer'>
                <label>Username</label>
                <input type='text' autoFocus required value ={email} onChange={(e) => setEmail(e.target.value)}></input>
                <p className='errorMSG'>{emailError}</p>
                <label>Password</label>
                <input type='password' autoFocus required value ={password} onChange={(e) => setPassword(e.target.value)}></input>
                <p className='errorMSG'>{passwordError}</p>
                <div className='btnContainer'>
                    {hasAccount ? (
<>
<button onClick={handleLogin}>Sign In</button>
<p>Don't have an Account?<span onClick={() => setHasAccount(!hasAccount)}>Sign Up</span></p>
</>
                    ) : (
                        <>
<button onClick={handleSignup}>Sign Up</button>
<p>Already have an Account?<span onClick={() => setHasAccount(!hasAccount)}>Sign In</span></p>
</>
                    )}
                </div>
            </div>
        </section>
    )
}

export default Login;