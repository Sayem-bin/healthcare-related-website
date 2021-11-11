import React from 'react';
import { Link } from 'react-router-dom';
import useFirebase from '../../../hooks/useFirebase';


const Register = () => {
    const { signInWithGoogle, emailRegistration, emailChange, passwordChange } = useFirebase();

    return (
        <div className='login-form w-50 p-5'>
            <h2 className="text-primary">Create Account</h2>
            <form onSubmit={emailRegistration}>
                <div className="row mb-3 ">
                    <label for="inputEmail3" className="col-sm-2 col-form-label">Email</label>
                    <div className="col-sm-10">
                        <input onBlur={emailChange} type="email" className="form-control" id="inputEmail3" required />
                    </div>
                </div>
                <div className="row mb-3">
                    <label for="inputPassword3" className="col-sm-2 col-form-label">Password</label>
                    <div className="col-sm-10">
                        <input onBlur={passwordChange} type="password" className="form-control" id="inputPassword3" required />
                    </div>
                </div>
                <button type="submit" className="btn btn-primary">Register</button>
            </form>
            <p>Already have an account? <Link to="/login">LogIn</Link></p>


            <button onClick={signInWithGoogle} className="btn btn-primary">Google SignIn</button>
        </div>
    );
};

export default Register;