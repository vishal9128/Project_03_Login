import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import twitterImage from './assets/Logo_of_Twitter.svg.png'
import googleLogo from './assets/Google-logo.png'
import appleLogo from './assets/apple-logo.png'

function App() {

  return (
    <div className="App">
      <div className="logo-box">
        <img src={twitterImage} alt="twitterImage" className="logo"/>
        <h3>Sing In to Twitter</h3>

        <button>
          <img src={googleLogo} alt="googleLogo"/>
          Sign in with Google
        </button>

        <button>
          <img src={appleLogo} alt="googleLogo"/>
          Sing in with Google
        </button>

        <hr></hr>
        <span>Or</span>

        <form action="">
          <input type="text" placeholder="Phone email or username"/>
          <button>Next</button>
        </form>

        <button>Forgot Password?</button>
        <p>
          Don't have an account? <a>Sign Up</a>
        </p>
      </div>
    </div>
  )
}

export default App
