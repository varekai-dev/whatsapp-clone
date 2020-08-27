import React from 'react'
import './Login.css'
import { Button } from '@material-ui/core'
import { auth, provider } from './firebase'
import { useStateValue } from './StateProvider'
import { actionTypes } from './reducer'

function Login() {
  const [{}, dispatch] = useStateValue()

  const signIn = () => {
    auth
      .signInWithPopup(provider)
      .then((result) => {
        dispatch({
          type: 'SET_USER',
          user: result.user
        })
      })
      .catch((error) => alert(error.message))
  }
  return (
    <div className="login">
      <div className="login__container">
        <img src="https://cdn.icon-icons.com/icons2/2119/PNG/512/social_whatsapp_icon_131217.png" alt="whatsapp" />
        <div className="login__text">
          <h1>Sign in to WhatsApp</h1>
        </div>
        <Button onClick={signIn}>Sign in With Google</Button>
      </div>
    </div>
  )
}

export default Login
