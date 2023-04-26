// Dependencies
import React, { useState } from 'react';

const Login = () => {
    // State
    const [user, setUser] = useState({
        email: '',
        name: '',
        password: ''
    });
    return (
        <div>
            <form className='page-form'>
                <div className='form-group'>
                    <label for='userEmail' className='form-label'>Email</label>
                    <input type='email' placeholder='your email' required className='form-input' id='userEmail' onChange={(e) => setUser({...user, email: e.target.value})} />
                </div>
                <div className='form-group'>
                    <label for='userName' className='form-label'>Name</label>
                    <input type='text' placeholder='your name' required className='form-input' id='userName' onChange={(e) => setUser({...user, name: e.target.value})} />
                </div>
                <div className='form-group'>
                    <label for='userPassword' className='form-label'>Password</label>
                    <input type='password' placeholder='password' required className='form-input' id='userPassword' onChange={(e) => setUser({...user, password: e.target.value})} />
                </div>
                <div className='form-btn-container'>
                    <button type='submit' className='form-btn-submit'>Submit</button>
                </div>
            </form>
        </div>
    )
}

export default Login;