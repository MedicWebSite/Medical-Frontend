import React, { useState } from 'react'
import { Link, useNavigate } from 'react-router-dom'
import ApiInstance from '../../../api'
import { GoogleLogin, GoogleOAuthProvider } from '@react-oauth/google'
import { FacebookLoginButton, TelegramLoginButton, createButton } from 'react-social-login-buttons'
import { BsFacebook } from 'react-icons/bs'
import { LoginSocialFacebook } from 'reactjs-social-login'


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



const Register = () => {
    const [firstname, setFirstname] = useState('')
    const [lastname, setLastname] = useState('')
    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('')
    const [dateOfBirth, setDateOfBirth] = useState('')
    const navigate = useNavigate()


    const handleRegisterUser = async (e) => {
        e.preventDefault()
        const NewUser = {
            firstname: firstname,
            lastname, lastname,
            email: email,
            password: password,
            dateOfBirth: dateOfBirth
        }
        try {
            const response = await ApiInstance.post('/auth/register', NewUser)
            if (response.status === 200) {
                console.log(response);
                setTimeout(() => { navigate('/auth/email-validate') }, 2500)
            }
        }
        catch (error) {
            console.log(error);
        }
    }

    return (
        <div className="auth-wrapper">
            <h2><Link className='sign-up__title' to="/">Sign Up</Link></h2>
            <form onSubmit={handleRegisterUser} className='auth-form'>
                <div className="fullname-container">
                    <input value={firstname} onChange={(e) => setFirstname(e.target.value)} className='register-input' type="text" placeholder='Firstname' />
                    <input value={lastname} onChange={(e) => setLastname(e.target.value)} className='register-input' type="text" placeholder='Lastname' />
                </div>
                <input value={dateOfBirth} onChange={(e) => setDateOfBirth(e.target.value)} className='register-input' type="date" placeholder='Date of birth' />
                <input value={email} onChange={(e) => setEmail(e.target.value)} className='register-input' type="email" placeholder='Email' />
                <input value={password} onChange={(e) => setPassword(e.target.value)} className='register-input' type="password" placeholder='Password' />
                <div className="field btn">
                    <div className="btn-layer"></div>
                    <input type="submit" value="Signup" />
                </div>
                <p className='exist__account-text'>
                    Already have an account?
                    <Link to={'/auth/login'} className='check-link'>Login</Link>
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
    )
}

export default Register
