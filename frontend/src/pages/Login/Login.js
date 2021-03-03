import React from 'react'
import LoginForm from '../../components/Forms/LoginForm/LoginForm'
const Login = ({setToken}) => {
    return (
        <div>
            <LoginForm setToken = {setToken}/>
        </div>
    )
}

export default Login
