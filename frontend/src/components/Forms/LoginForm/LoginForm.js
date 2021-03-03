import React, { useSelector, useEffect } from 'react'
import FileBase from 'react-file-base64'
import { useGlobalContext } from '../../../context'
import { createPost } from '../../../actions/post'
import './LoginForm.css'
import { useDispatch } from 'react-redux'
import PropTypes from 'prop-types'
const LoginForm = ({setToken}) => {

  
  const {
    currentId,
    setCurrentId,
    email,
    setEmail,
    password,
    setPassword,
  } = useGlobalContext();

  const clear = () => {
    setCurrentId(null)
    setEmail('')
    setPassword('')
  };

  async function loginUser(credentials){
    return fetch('http://localhost:5000/login',{
      method: 'POST',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify(credentials)
    })
    .then(data => data.json())
  }

  const handleSubmit = async e => {
    e.preventDefault();
    const token = await loginUser({
      email,
      password
    })
    setToken(token)
    clear();
  };
  return (

    <div className="wrapper">
      <form action="" className="form-area" onSubmit={handleSubmit}>

        <div className="details-area">
          <label htmlFor="email">Email</label>
          <input type="email"  name ="email" label="email" id="email" value={email} onChange = {(e) => setEmail(e.target.value)} />

          <label htmlFor="password">Password</label>
          <input type="password" name = "password" label="password" id="password" value={password} onChange = {(e) => setPassword(e.target.value)} />

          <div className="btn-container">
            <button type="submit" className="submit-btn" onClick={handleSubmit}>Submit</button>
          </div>

        </div>
      </form>
    </div>
  )
}

LoginForm.propTypes ={
  setToken: PropTypes.func.isRequired
}

export default LoginForm
