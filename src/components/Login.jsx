import React from 'react'

function Login() {
    return (
        <>
            <div className="credentials">
                <div className="header">Login</div>
                <div className="content">
                    <input id="email" size="{40}" type="email" placeholder="Email"/>
                    <input id="password" size="{40}" type="password" placeholder="Password" />
                    <div className="reset">Forgot your password?</div>
                </div>
                <input id="signin" className="btn" type="submit" defaultValue="Sign in" />
                <div className="create">Create Account</div>
            </div>

        </>
    )
}

export default Login
