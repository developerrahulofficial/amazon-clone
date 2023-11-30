import React from 'react'
import { useState } from 'react'
import './Login.css'
import { Link, useHistory } from "react-router-dom"
import { auth } from "../firebase"

function Login() {
    
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');

    const history = useHistory();

    const signIn = e => {
      e.preventDefault();
      auth.signInWithEmailAndPassword(email,password).then(auth=> {
        history.push('/')
      }).catch(error => alert(error.message))
    }

    const register = e => {
      e.preventDefault();
       
      auth.createUserWithEmailAndPassword(email,password).then((auth) => {
        if(auth) {
          history.push('/')
        }
      }).catch(error=> alert(error.message));

    }

  return (
    <div className='login'>

        <Link to='/'>
            <img className='login__logo'
            src='https://upload.wikimedia.org/wikipedia/commons/thumb/a/a9/Amazon_logo.svg/1024px-Amazon_logo.svg.png'
            >
            </img>
        </Link>

        <div className='login__container'>
            <h1>Sign In</h1>
            
            <form>
                <h5>Email</h5>
                <input type='email' value={email} onChange={e => setEmail(e.target.value)} />
                 
                <h5>password</h5>
                <input type='password' value={password} onChange={e => setPassword(e.target.value)} />
                 
                <button type='submit' onClick={signIn} className='login__signInButton'> Sign In</button> 
            </form>
             
             <p>By Sign in You agree to view amazon clone terms and conditions of use oof sales
                Please see our privacy policies , our cookies Notice and our Internet Based Ads Notice.
             </p>

             <button className='login__registerButton' onClick={register}>Create your Amazon Account</button>
    
        </div>
       


    </div>
  )
}

export default Login
