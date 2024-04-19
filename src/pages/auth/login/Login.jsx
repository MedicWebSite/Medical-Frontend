import React, { useState } from 'react'
import ApiInstance from '../../../api'
import { Link } from 'react-router-dom'
import { GoogleOAuthProvider, GoogleLogin } from '@react-oauth/google'
import { LoginSocialFacebook } from 'reactjs-social-login'
import { FacebookLoginButton, TelegramLoginButton, createButton } from 'react-social-login-buttons'
import { BsFacebook } from 'react-icons/bs'

const config = {
    icon: BsFacebook,
    style: {
        background: '#3b5999',
        width: '43px',
        height: '40px',
        padding: '9px',
        borderRadius: '50%',

    }
}

const FacebookLoginButtons = createButton(config)

const Login = () => {
    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('')

    const handleLogin = async (e) => {
        e.preventDefault()

        const UserData = { email: email, password: password }

        try {
            const response = await ApiInstance.post('/auth/login', UserData)
            console.log(response);
        }
        catch (error) {
            console.log(error);
        }

    }
    return (
        <div>
            <div className="auth-wrapper">
                <h2>Login</h2>
                <form onSubmit={handleLogin} className='auth-form'>
                    <input value={email} onChange={(e) => setEmail(e.target.value)} className='register-input' type="email" placeholder='Email' />
                    <input value={password} onChange={(e) => setPassword(e.target.value)} className='register-input' type="password" placeholder='Password' />
                    <Link className='forgot__password-text'>Forgot password?</Link>
                    <div className="field btn">
                        <div class="btn-layer"></div>
                        <input type="submit" value="Login" />
                    </div>
                    <p className='exist__account-text'>
                        If you don't have an account?
                        <Link to={'/auth/register'} className='check-link'>Register</Link>
                    </p>
                    <div className="register-socials">

                    <GoogleOAuthProvider clientId='617896106948-fncnrakj6bigf7u0kig605jifcfll205.apps.googleusercontent.com'>
                        <GoogleLogin
                            onSuccess={credentialResponse => {
                                console.log(credentialResponse);
                            }}
                            onError={() => {
                                console.log('Login Failed');
                            }}
                            size='large'
                            theme='filled_blue'
                            context='contin_with'
                            locale='english'
                            type='icon'
                            shape='circle'
                            ux_mode='popup'
                            width={480}
                            logo_alignment='left'
                        />
                    </GoogleOAuthProvider>
                    {/* FACEBOOK LOGIN */}
                    <LoginSocialFacebook
                        appId='678828277643445'
                            fields='id'
                        onResolve={(response) => {
                            console.log(response);
                        }}
                        onReject={(error) => {
                            console.log(error);
                        }}
                    >
                        <FacebookLoginButtons
                        />
                    </LoginSocialFacebook>
                    </div>

                </form>
            </div>
        </div>
    )
}

export default Login