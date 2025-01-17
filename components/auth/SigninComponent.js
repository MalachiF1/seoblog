import  { useState, useEffect } from 'react';
import { signin, authenticate, isAuth } from '../../actions/auth';
import Router from 'next/router';
import Link from 'next/link';
import LoginGoogle from './LoginGoogle';


const SigninComponent = () => {
    const [values, setValues] = useState({
        email: '',
        password: '',
        error: '',
        loading: false,
        message: '',
        showForm: true
    })

    const { email, password, error, loading, message, showForm } = values;

    useEffect(() => {
        isAuth() && Router.push(`/`);
    }, []);

    const handleSubmit = e => {
        e.preventDefault()
        //console.table({ name, email, password, error, loading, message, showForm })
        setValues({...values, loading: true, error: false})
        const user = { email, password };

        signin(user).then(data => {
            if(data.error) {
                setValues({...values, error: data.error})
            } else {
                // save user token to cookie
                // save user info to local storage
                // authenticate user
                authenticate(data, () => {
                    if(isAuth && isAuth().role === 1) {
                        Router.push(`/admin`);
                    } else {
                        Router.push(`/user`);
                    }
                });
           }
        });
        
    };

    const handleChange = name => e => {
        setValues({...values, error: false, [name]: e.target.value})
    };

    const showLoading = () => (loading ? <div className='alert alert-info text-center'>Loading...</div> : '');
    const showError = () => (error ? <div className='alert alert-danger text-center'>{error}</div> : '');
    const showMessage = () => (message ? <div className='alert alert-info text-center'>{message}</div> : '');

    const signinForm = () => {
        return (
            <form onSubmit={handleSubmit}>

                <div className='form-group mr-2 ml-2'>
                    <input 
                    value={email}
                    onChange={handleChange('email')} 
                    type='email' 
                    className='form-control' 
                    placeholder='Type your email'
                    />
                </div>

                <div className='form-group mr-2 ml-2'>
                    <input 
                    value={password}
                    onChange={handleChange('password')} 
                    type='password' 
                    className='form-control' 
                    placeholder='Type your password'
                    />
                </div>
                <div className='row'>
                    <div className='col-md-8 mb-3 ml-2'>
                        <button className='btn btn-primary'>Signin</button>
                    </div>
                    <div className='col-md-2 ml-2'>
                        <Link href='/auth/password/forgot'>
                            <a className=''>Forgot Password</a>
                        </Link>
                    </div>
                    {<div className='col-md-6' style={{ position: 'relative', left: '120px', bottom: '57px' }}>
                        <LoginGoogle />
                    </div>}
                </div>
            </form>
        );
    };

    return (
        <React.Fragment>
            {showError()}
            {showLoading()}
            {showMessage()}
            {showForm && signinForm()}
        </React.Fragment>
    );
};

export default SigninComponent;
