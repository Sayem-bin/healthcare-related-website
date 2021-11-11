import React from 'react';
import { Link, useLocation, useHistory } from 'react-router-dom';
import useFirebase from '../../../hooks/useFirebase';


const LogIn = () => {
    const { signInWithGoogle } = useFirebase();
    const location = useLocation();
    const history = useHistory();
    const redirect_uri = location.state?.form || "/details"
    const googleLogin = () => {
        signInWithGoogle()
            .then(result => {
                history.push(redirect_uri)
            })
    }


    return (

        <div className='login-form w-50 p-5'>
            <div>
                <h2>Login</h2>
                <form >
                    <div className="row mb-3 ">
                        <label for="inputEmail3" className="col-sm-2 col-form-label ">Email</label>
                        <div className="col-sm-10">
                            <input type="email" className="form-control" id="inputEmail3" />
                        </div>
                    </div>
                    <div className="row mb-3">
                        <label for="inputPassword3" className="col-sm-2 col-form-label">Password</label>
                        <div className="col-sm-10">
                            <input type="password" className="form-control" id="inputPassword3" />
                        </div>
                    </div>
                    <button type="submit" className="btn btn-primary">Log In</button>
                </form>
                <p>New to website? <Link to="/register">Create Account</Link></p>

                <button onClick={googleLogin} className="btn btn-primary">Google SignIn</button>
            </div>
        </div>

    );
};

export default LogIn;