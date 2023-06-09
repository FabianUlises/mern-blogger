// Dependencies
import React, { useState } from 'react';
// Components
import Nav from '../nav/Nav';
const Login = () => {
    // State
    const [user, setUser] = useState({
        email: '',
        name: '',
        password: ''
    });
    // Handle login submit request
    const handleSubmit = (e) => {
        e.preventDefault();
        console.log({user});
    };
    return (
        <div>
            <Nav />
            <form className='page-form'>
                <div className='form-group'>
                    <label for='userEmail' className='form-label'>Email</label>
                    <input value={user.email} type='email' placeholder='your email' required className='form-input' id='userEmail' onChange={(e) => setUser({...user, email: e.target.value})} />
                </div>
                <div className='form-group'>
                    <label for='userName' className='form-label'>Name</label>
                    <input value={user.name} type='text' placeholder='your name' required className='form-input' id='userName' onChange={(e) => setUser({...user, name: e.target.value})} />
                </div>
                <div className='form-group'>
                    <label for='userPassword' className='form-label'>Password</label>
                    <input value={user.password} type='password' placeholder='password' required className='form-input' id='userPassword' onChange={(e) => setUser({...user, password: e.target.value})} />
                </div>
                <div className='form-btn-container'>
                    <button type='submit' className='form-btn-submit' onClick={handleSubmit}>Submit</button>
                </div>
            </form>
        </div>
    )
}

export default Login;