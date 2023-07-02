import React, { useState } from 'react'
import { Link, useHistory } from 'react-router-dom'
import { auth } from '../firebase'
import "./Register.css"

function Register() {
    const history = useHistory()
    const [email, setEmail] = useState("")
    const [password, setPassword] = useState("")
    const [name, setName] = useState("")

    const register = e => { 
        e.preventDefault();

        auth.createUserWithEmailAndPassword(email, password)
            .then((auth) => {
                if (auth) {
                    history.push("/")
                }
            })
            .catch(error => alert(error.message))
    }

    return (
        <div className="register">
            <Link to="/">
                <img className="register__logo" src="https://extenship.com/img/logo/Amazon_logo.svg" alt="" />
            </Link>

            <div className="register__container">
                <h1>Create Account</h1>
                <form>
                    <h5>Your Name</h5>
                    <input type="text" value={name} onChange={e => setName(e.target.value)} />

                    <h5>E-mail</h5>
                    <input type="text" value={email} onChange={e => setEmail(e.target.value)} />

                    <h5>Password</h5>
                    <input type="password" value={password} onChange={e => setPassword(e.target.value)} />

                    <button type="submit" onClick={register} className="register__createAccountButton">Create Account</button>
                </form>

                <p>Already have an account? <Link to="/login">Sign In</Link></p>
            </div>
        </div>
    )
}

export default Register
